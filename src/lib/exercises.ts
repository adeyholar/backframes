export const VIDEO_ID = "AlZm5IKaf1U";
export const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
export const VIDEO_TITLE = "The 3 Best Back Exercises (For NO MORE PAIN)";
export const CHANNEL_NAME = "SpineCare Decompression and Chiropractic Center";
export const PRESENTER = "Dr. Michael Rowe";
export const VIDEO_DURATION = 618;

export type Exercise = {
  id: string;
  frame: string;
  title: string;
  start: number;
  end: number;
  position: string;
  hold: string;
  reps: string;
  gear: string;
  summary: string;
  steps: string[];
  note: string;
  kind: "brief" | "exercise";
};

export const EXERCISES: Exercise[] = [
  {
    id: "brief",
    frame: "00",
    title: "The briefing",
    start: 0,
    end: 11,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "A short setup: three daily back exercises meant to keep the spine strong and flexible, for quick relief and longer-lasting support.",
    steps: [
      "These are meant to be done every day.",
      "Morning and midday are stretches. The last frame is the strength work that makes the relief last.",
      "Stop short of sharp pain. A workable stretch or a solid hold is the target.",
    ],
    note: "This clip is only the intro. The three frames after it are the exercises.",
    kind: "brief",
  },
  {
    id: "morning",
    frame: "01",
    title: "Morning stretch",
    start: 11,
    end: 292,
    position: "Floor",
    hold: "20–30s, then 3–5s",
    reps: "3 holds, then 5–10 scorpions",
    gear: "Mat or carpet",
    summary:
      "A floor sequence: child’s pose through the whole back, half and full cobra to open the front, then a gentle scorpion to rotate the low back and hips.",
    steps: [
      "Start on all fours, hands a little forward and about shoulder width. Tuck the chin. Rock the hips toward the heels until you feel the stretch from the base of the neck to the tailbone.",
      "Let the chest sag toward the floor to open between the shoulder blades, and crawl the fingers forward. If one side of the low back is tighter, tilt the shoulders and hands toward the easier side. Hold 20 to 30 seconds. Rock forward, breathe, and repeat 3 times, a little deeper each round.",
      "Half cobra: lie on your stomach, forearms in a V, hands together. Keep the hips and pelvis flat. You should feel the front of the core and the hip flexors, with only a mild stretch in the low back. Hold 20 to 30 seconds, 3 times.",
      "Full cobra: hands at shoulder level, elbows tucked. Press the chest up and keep the hips down. More press means a stronger stretch — stay short of discomfort.",
      "Scorpion: from baby cobra, legs together, knees bent about 90°, chest stays down. Lower the legs side to side like a pendulum through the low back and hips. Hold 3 to 5 seconds. Do 5 to 10 each direction.",
    ],
    note: "This frame stays inside the morning chapter, from the first rock-back through the last scorpion.",
    kind: "exercise",
  },
  {
    id: "midday",
    frame: "02",
    title: "Midday stretch",
    start: 292,
    end: 430,
    position: "Standing at a wall",
    hold: "20–30s, then 10s",
    reps: "3 holds, 3 scoops each side",
    gear: "Smooth wall or door",
    summary:
      "A standing puppy against a wall or door, then a shoulder-blade scoop that targets the space between the blades.",
    steps: [
      "Face a smooth wall or door, one arm’s length away. Feet hip width, weight on the heels. Reach both arms overhead, about shoulder width.",
      "Lean your weight into the door. Tuck the chin, bend the knees slightly, and sit the hips back and down, away from the door.",
      "Deepen it by letting the chest sag and crawling the fingers up the wall. Shift the shoulders and hands left or right if one side wants more relief. Hold 20 to 30 seconds with slow breaths. Repeat 3 times.",
      "Scoop: stay in the puppy, drop one arm, and bend that elbow about 90°. Scoop the shoulder blade and upper back toward the other side. Hold about 10 seconds. Do 3 reps each side.",
    ],
    note: "The player stops before the strengthening chapter starts.",
    kind: "exercise",
  },
  {
    id: "strengthen",
    frame: "03",
    title: "Strengthening",
    start: 430,
    end: 618,
    position: "Back on the floor",
    hold: "5 seconds",
    reps: "1–10, then add a set",
    gear: "Mat or carpet",
    summary:
      "Three bridges that load the muscles holding the spine up: a two-leg bridge, a single-leg bridge, and a feet-together clamshell bridge.",
    steps: [
      "Lie on your back, knees bent, feet flat, legs about hip width. Hands can rest on the hips or out to the sides.",
      "Brace the core — draw the belly toward the spine — and squeeze the glutes. Drive the hips up until knees, hips, and shoulders make a straight line. Hold 5 seconds. Relax, breathe, and repeat 1 to 10 times, building each rep. Add a set if you still have energy.",
      "Single-leg: from the bridge, lift one foot. Keep the hips level, no tilt. A slow march is optional. Switch sides.",
      "Clamshell bridge: feet together, knees bent. Wing the knees out and down for an inner-thigh stretch, then brace, squeeze the glutes, and bridge. Hold 5 seconds. Repeat 1 to 10 times.",
    ],
    note: "Daily strength is what keeps the morning and midday stretches from wearing off.",
    kind: "exercise",
  },
];

export const EXERCISE_FRAMES = EXERCISES.filter((item) => item.kind === "exercise");

export function getExercise(id: string): Exercise {
  return EXERCISES.find((item) => item.id === id) ?? EXERCISES[1]!;
}

export function nextExerciseId(id: string, exercisesOnly = true): string | null {
  const list = exercisesOnly ? EXERCISE_FRAMES : EXERCISES;
  const index = list.findIndex((item) => item.id === id);
  if (index < 0 || index >= list.length - 1) return null;
  return list[index + 1]!.id;
}

export function clipLength(item: Exercise): number {
  return Math.max(0, item.end - item.start);
}

export function youtubeAt(start: number): string {
  return `${VIDEO_URL}&t=${Math.floor(start)}s`;
}

export const THUMB_MAX = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
export const THUMB_HQ = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
