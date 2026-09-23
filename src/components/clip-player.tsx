import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  THUMB_HQ,
  THUMB_MAX,
  VIDEO_ID,
  clipLength,
  type Exercise,
  youtubeAt,
} from "@/lib/exercises";
import { formatClock } from "@/lib/utils";
import { loadYouTubeIframeAPI, YT_STATE, type YTPlayer } from "@/lib/youtube";

type ClipPlayerProps = {
  clip: Exercise;
  loop: boolean;
  armed: boolean;
  onArm: () => void;
  onEnded: () => void;
};

export function ClipPlayer({ clip, loop, armed, onArm, onEnded }: ClipPlayerProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const clipRef = useRef(clip);
  const loopRef = useRef(loop);
  const onEndedRef = useRef(onEnded);
  const creatingRef = useRef(false);
  const endedGate = useRef(false);
  const readyRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(clip.start);
  const [failed, setFailed] = useState<string | null>(null);
  const [thumb, setThumb] = useState(THUMB_MAX);
  const instanceId = useId();

  clipRef.current = clip;
  loopRef.current = loop;
  onEndedRef.current = onEnded;

  const duration = clipLength(clip);
  const elapsed = Math.min(duration, Math.max(0, current - clip.start));
  const progress = duration > 0 ? (elapsed / duration) * 100 : 0;

  const constrain = useCallback((player: YTPlayer) => {
    const { start, end } = clipRef.current;
    let time = 0;
    let state = YT_STATE.UNSTARTED as number;
    try {
      state = player.getPlayerState();
      time = player.getCurrentTime();
    } catch {
      return;
    }
    if (
      state === YT_STATE.UNSTARTED ||
      state === YT_STATE.BUFFERING ||
      state === YT_STATE.CUED
    ) {
      return;
    }
    if (time + 0.35 < start) {
      player.seekTo(start, true);
      setCurrent(start);
      return;
    }
    if (time >= end - 0.12) {
      if (loopRef.current) {
        endedGate.current = false;
        player.seekTo(start, true);
        player.playVideo();
        setCurrent(start);
        setPlaying(true);
      } else if (!endedGate.current) {
        endedGate.current = true;
        player.pauseVideo();
        player.seekTo(Math.max(start, end - 0.25), true);
        setCurrent(end);
        setPlaying(false);
        onEndedRef.current();
      }
      return;
    }
    endedGate.current = false;
    setCurrent(time);
  }, []);

  const createPlayer = useCallback(async () => {
    if (playerRef.current || creatingRef.current) return;
    const host = hostRef.current;
    if (!host) return;
    creatingRef.current = true;
    setFailed(null);
    try {
      const YT = await loadYouTubeIframeAPI();
      if (!hostRef.current) return;
      const { start, end } = clipRef.current;
      new YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        width: "100%",
        height: "100%",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          origin: window.location.origin,
          start,
          end,
        },
        events: {
          onReady: (event) => {
            readyRef.current = true;
            playerRef.current = event.target;
            event.target.seekTo(clipRef.current.start, true);
            event.target.playVideo();
            setPlaying(true);
            setFailed(null);
            setCurrent(clipRef.current.start);
          },
          onStateChange: (event) => {
            if (event.data === YT_STATE.PLAYING) {
              setPlaying(true);
              constrain(event.target);
            }
            if (event.data === YT_STATE.PAUSED) setPlaying(false);
            if (event.data === YT_STATE.ENDED) constrain(event.target);
          },
          onError: () => {
            if (!readyRef.current) {
              setFailed("This clip could not start in the player.");
              setPlaying(false);
            }
          },
        },
      });
    } catch (error) {
      setFailed(error instanceof Error ? error.message : "Player failed to load.");
    } finally {
      creatingRef.current = false;
    }
  }, [constrain]);

  useEffect(() => {
    if (armed) void createPlayer();
  }, [armed, createPlayer]);

  useEffect(() => {
    endedGate.current = false;
    const player = playerRef.current;
    if (!player) return;
    player.loadVideoById({
      videoId: VIDEO_ID,
      startSeconds: clip.start,
      endSeconds: clip.end,
    });
    setCurrent(clip.start);
    setPlaying(true);
  }, [clip.id, clip.start, clip.end]);

  useEffect(() => {
    if (!armed) return;
    const id = window.setInterval(() => {
      const player = playerRef.current;
      if (!player) return;
      constrain(player);
      try {
        setMuted(player.isMuted());
      } catch {
        /* player not ready */
      }
    }, 200);
    return () => window.clearInterval(id);
  }, [armed, constrain]);

  useEffect(() => {
    return () => {
      try {
        playerRef.current?.destroy();
      } catch {
        /* already gone */
      }
      playerRef.current = null;
    };
  }, []);

  function togglePlay() {
    if (!armed) {
      onArm();
      return;
    }
    const player = playerRef.current;
    if (!player) {
      void createPlayer();
      return;
    }
    if (playing) {
      player.pauseVideo();
      setPlaying(false);
    } else {
      endedGate.current = false;
      if (current >= clip.end - 0.3) player.seekTo(clip.start, true);
      player.playVideo();
      setPlaying(true);
    }
  }

  function restart() {
    if (!armed) {
      onArm();
      return;
    }
    const player = playerRef.current;
    if (!player) return;
    endedGate.current = false;
    player.seekTo(clip.start, true);
    player.playVideo();
    setCurrent(clip.start);
    setPlaying(true);
  }

  function seek(nextPercent: number) {
    const player = playerRef.current;
    if (!player) return;
    endedGate.current = false;
    const time = clip.start + (nextPercent / 100) * duration;
    player.seekTo(time, true);
    setCurrent(time);
  }

  function toggleMute() {
    const player = playerRef.current;
    if (!player) return;
    if (player.isMuted()) {
      player.unMute();
      setMuted(false);
    } else {
      player.mute();
      setMuted(true);
    }
  }

  return (
    <section
      className="overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)]"
      aria-label={`${clip.title} clip, ${formatClock(clip.start)} to ${formatClock(clip.end)}`}
    >
      <div className="relative aspect-video bg-muted">
        <div className={armed ? "yt-host" : "hidden"}>
          <div ref={hostRef} id={`yt-${instanceId}`} className="h-full w-full" />
        </div>

        {!armed || failed ? (
          <div className="absolute inset-0">
            <img
              src={thumb}
              alt=""
              className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
              onError={() => setThumb(THUMB_HQ)}
            />
            <div className="absolute inset-0 bg-background/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="font-display text-xl text-foreground sm:text-2xl">{clip.title}</p>
              <p className="text-sm text-muted-foreground tabular-nums">
                Frame {clip.frame} · {formatClock(clip.start)}–{formatClock(clip.end)} ·{" "}
                {formatClock(duration)} clip
              </p>
              {failed ? (
                <div className="flex flex-col items-center gap-3">
                  <p className="max-w-sm text-sm text-muted-foreground">{failed}</p>
                  <a
                    href={youtubeAt(clip.start)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground"
                  >
                    Open this clip on YouTube
                  </a>
                </div>
              ) : (
                <Button type="button" size="lg" onClick={togglePlay} aria-label={`Play ${clip.title}`}>
                  <Play className="ml-0.5 size-4 fill-current" />
                  Play this frame
                </Button>
              )}
            </div>
          </div>
        ) : null}

        {armed && !failed ? (
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
            <span className="rounded-sm bg-background/80 px-2 py-1 text-xs font-medium tracking-wide text-foreground uppercase">
              Clipped to this exercise
            </span>
            <span className="rounded-sm bg-background/80 px-2 py-1 font-mono text-xs tabular-nums text-foreground">
              {formatClock(clip.start)}–{formatClock(clip.end)}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 px-3 py-3 sm:px-4">
        {armed && !failed ? (
          <label className="flex items-center gap-3">
            <span className="sr-only">Clip position</span>
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onChange={(event) => seek(Number(event.target.value))}
              className="clip-range h-11 w-full"
            />
          </label>
        ) : (
          <div className="flex h-11 items-center" aria-hidden="true">
            <div className="h-1 w-full rounded-full bg-border" />
          </div>
        )}
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="subtle"
            size="icon"
            onClick={togglePlay}
            aria-label={playing ? "Pause clip" : "Play clip"}
          >
            {playing ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4 fill-current" />}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={restart}
            aria-label="Restart clip"
          >
            <RotateCcw className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            disabled={!armed}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </Button>
          <p className="ml-auto font-mono text-xs tabular-nums text-muted-foreground">
            {formatClock(elapsed)} / {formatClock(duration)}
          </p>
        </div>
      </div>
    </section>
  );
}
