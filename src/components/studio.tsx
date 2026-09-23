import { Check, ExternalLink, Infinity, ListVideo, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { ClipPlayer } from "@/components/clip-player";
import { Button } from "@/components/ui/button";
import {
  CHANNEL_NAME,
  EXERCISES,
  EXERCISE_FRAMES,
  PRESENTER,
  VIDEO_TITLE,
  clipLength,
  getExercise,
  nextExerciseId,
  youtubeAt,
} from "@/lib/exercises";
import { isFrameDone, useSession, type Side } from "@/lib/session-store";
import { cn, formatClock } from "@/lib/utils";

export function Studio() {
  const activeId = useSession((s) => s.activeId);
  const loop = useSession((s) => s.loop);
  const playThrough = useSession((s) => s.playThrough);
  const completed = useSession((s) => s.completed);
  const setActiveId = useSession((s) => s.setActiveId);
  const setLoop = useSession((s) => s.setLoop);
  const setPlayThrough = useSession((s) => s.setPlayThrough);
  const toggleSide = useSession((s) => s.toggleSide);
  const reset = useSession((s) => s.reset);

  const [armed, setArmed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const clip = getExercise(activeId);

  useEffect(() => {
    void Promise.resolve(useSession.persist.rehydrate()).finally(() => {
      setHydrated(true);
    });
  }, []);

  const doneCount = hydrated
    ? EXERCISE_FRAMES.filter((item) => isFrameDone(completed, item.id)).length
    : 0;

  function handleEnded() {
    if (!playThrough) return;
    const next = nextExerciseId(activeId, clip.kind === "exercise");
    if (next) setActiveId(next);
    else setPlayThrough(false);
  }

  function startPlayThrough() {
    const startId =
      EXERCISE_FRAMES.find((item) => !isFrameDone(completed, item.id))?.id ??
      EXERCISE_FRAMES[0]!.id;
    setPlayThrough(true);
    setActiveId(startId);
    setArmed(true);
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Clipped exercise studio
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight tracking-[-0.03em] text-foreground sm:text-5xl">
            BackFrames
          </h1>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground sm:text-base">
            Each frame plays only one stretch from {PRESENTER}’s {VIDEO_TITLE}. The
            player is locked to that chapter so you never drift into the next demo.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs tabular-nums text-muted-foreground">
            {doneCount}/{EXERCISE_FRAMES.length} sides complete
          </span>
          <Button
            type="button"
            variant={playThrough ? "default" : "outline"}
            size="sm"
            onClick={() => (playThrough ? setPlayThrough(false) : startPlayThrough())}
          >
            <ListVideo className="size-4" />
            {playThrough ? "Playing through" : "Play all frames"}
          </Button>
          <Button
            type="button"
            variant={loop ? "default" : "outline"}
            size="sm"
            onClick={() => setLoop(!loop)}
          >
            <Infinity className="size-4" />
            Loop clip
          </Button>
        </div>
      </header>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,1fr)] lg:items-start">
        <div className="flex min-w-0 flex-col-reverse gap-4 lg:flex-col">
          <ClipPlayer
            clip={clip}
            loop={loop && !playThrough}
            armed={armed}
            onArm={() => setArmed(true)}
            onEnded={handleEnded}
          />
          <FrameStrip
            activeId={clip.id}
            completed={hydrated ? completed : {}}
            onSelect={setActiveId}
          />
        </div>
        <CuePanel
          clip={clip}
          completed={hydrated ? completed[clip.id] : undefined}
          onToggle={(side) => clip.kind === "exercise" && toggleSide(clip.id, side)}
        />
      </div>

      <footer className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href={youtubeAt(clip.start)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 text-foreground hover:underline"
          >
            Original video · {CHANNEL_NAME}
            <ExternalLink className="size-3.5" />
          </a>
          <Button type="button" variant="ghost" size="sm" onClick={reset}>
            <RotateCcw className="size-3.5" />
            Clear session
          </Button>
        </div>
        <p className="max-w-3xl text-xs leading-relaxed text-subtle">
          Demonstration only — not medical advice, diagnosis, or treatment. Consult a
          clinician before starting. This studio maps publicly available YouTube
          chapters so each frame plays a single exercise. It is not affiliated with{" "}
          {CHANNEL_NAME}. Use of the original video remains subject to YouTube and
          the presenter’s terms.
        </p>
      </footer>
    </div>
  );
}

function FrameStrip({
  activeId,
  completed,
  onSelect,
}: {
  activeId: string;
  completed: Record<string, { left?: boolean; right?: boolean }>;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
        Frames
      </p>
      <div className="min-w-0 overflow-x-auto overscroll-x-contain pb-1 snap-x snap-mandatory">
        <div className="flex w-max gap-2 sm:grid sm:w-full sm:grid-cols-2 lg:grid-cols-4">
        {EXERCISES.map((item) => {
          const active = item.id === activeId;
          const done = item.kind === "exercise" && isFrameDone(completed, item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={cn(
                "flex w-40 shrink-0 snap-start flex-col gap-2 rounded-lg px-3 py-3 text-left shadow-[var(--shadow-border)] transition-[background-color,box-shadow] duration-150 motion-reduce:transition-none sm:w-auto",
                active ? "bg-muted shadow-[var(--shadow-border-hover)]" : "bg-raised hover:bg-muted",
              )}
              aria-current={active ? "true" : undefined}
            >
              <span className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {item.frame}
                </span>
                {done ? (
                  <Check className="size-3.5 text-done" aria-label="Both sides done" />
                ) : null}
              </span>
              <span className="font-display text-sm leading-snug text-foreground">
                {item.title}
              </span>
              <span className="font-mono text-xs tabular-nums text-subtle">
                {formatClock(item.start)}–{formatClock(item.end)}
              </span>
            </button>
          );
        })}
        </div>
      </div>
    </div>
  );
}

function CuePanel({
  clip,
  completed,
  onToggle,
}: {
  clip: ReturnType<typeof getExercise>;
  completed?: { left?: boolean; right?: boolean };
  onToggle: (side: Side) => void;
}) {
  return (
    <aside className="flex flex-col gap-5 rounded-xl bg-card p-5 shadow-[var(--shadow-border)] lg:p-6">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Frame {clip.frame} · {clip.position}
        </p>
        <h2 className="font-display text-2xl leading-tight tracking-[-0.02em] text-foreground">
          {clip.title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{clip.summary}</p>
      </div>

      <dl className="grid grid-cols-2 gap-2">
        <Stat label="Hold" value={clip.hold} />
        <Stat label="Reps" value={clip.reps} />
        <Stat label="Setup" value={clip.gear} />
        <Stat label="Clip" value={formatClock(clipLength(clip))} />
      </dl>

      <ol className="flex flex-col gap-3">
        {clip.steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm leading-relaxed text-foreground">
            <span className="mt-0.5 w-5 shrink-0 font-mono text-xs tabular-nums text-subtle">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <p className="text-sm text-muted-foreground">{clip.note}</p>

      {clip.kind === "exercise" ? (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Mark both sides
          </p>
          <div className="grid grid-cols-2 gap-2">
            <SideToggle
              label="Left"
              pressed={Boolean(completed?.left)}
              onClick={() => onToggle("left")}
            />
            <SideToggle
              label="Right"
              pressed={Boolean(completed?.right)}
              onClick={() => onToggle("right")}
            />
          </div>
        </div>
      ) : (
        <a
          href={youtubeAt(clip.start)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md bg-raised text-sm font-medium text-foreground"
        >
          Watch briefing on YouTube
        </a>
      )}
    </aside>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-raised px-3 py-2.5">
      <dt className="text-xs tracking-[0.12em] text-subtle uppercase">{label}</dt>
      <dd className="mt-1 text-sm text-foreground">{value}</dd>
    </div>
  );
}

function SideToggle({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150 motion-reduce:transition-none",
        pressed ? "bg-done text-background" : "bg-raised text-foreground hover:bg-muted",
      )}
    >
      {pressed ? <Check className="size-4" /> : null}
      {label}
    </button>
  );
}
