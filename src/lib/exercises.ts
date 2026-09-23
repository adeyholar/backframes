export const CHANNEL_NAME = "SpineCare Decompression and Chiropractic Center";
export const PRESENTER = "Dr. Michael Rowe";

export const BACK_VIDEO = "AlZm5IKaf1U";
export const HIP_VIDEO = "krGkT8NymA4";

export type Exercise = {
  id: string;
  videoId: string;
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

export type Routine = {
  id: string;
  shortTitle: string;
  title: string;
  videoId: string;
  duration: number;
  frames: Exercise[];
};

const BACK_FRAMES: Exercise[] = [
  {
    id: "brief",
    videoId: BACK_VIDEO,
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
    videoId: BACK_VIDEO,
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
    videoId: BACK_VIDEO,
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
    videoId: BACK_VIDEO,
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

const HIP_FRAMES: Exercise[] = [
  {
    id: "hip-brief",
    videoId: HIP_VIDEO,
    frame: "00",
    title: "The briefing",
    start: 0,
    end: 84,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "Why a high hip or short-leg feeling often starts in a locked pelvis, and how the next three frames mobilize it, then strengthen it.",
    steps: [
      "A high hip is an uneven pelvis. The first two frames try to get the joints and soft tissue moving. You may feel a pop or a self-release in the sacroiliac joint.",
      "The last frame strengthens the muscles, ligaments, and tendons around the pelvis so the alignment holds longer.",
      "Stay inside a comfortable range. Switch sides after each exercise.",
    ],
    note: "This clip is only the intro. The three frames after it are the exercises.",
    kind: "brief",
  },
  {
    id: "hip-iso",
    videoId: HIP_VIDEO,
    frame: "01",
    title: "Isometric stick",
    start: 84,
    end: 171,
    position: "On your back",
    hold: "5–10 seconds",
    reps: "5 each side",
    gear: "Sturdy stick or broom",
    summary:
      "A stick between the thighs turns the legs into an isometric fight, so the pelvis and hips have to stabilize.",
    steps: [
      "Lie on the floor or a bed. Bend the knees and bring one knee up.",
      "Slide a sturdy stick between the legs so the bottom leg supports it at the top of the knee.",
      "Drive the bottom leg back toward you while the top leg drives away. That isometric pull lands in the pelvis and hips. Only go as far as is comfortable.",
      "Hold 5 to 10 seconds, relax, and repeat 5 times. Then switch legs and repeat.",
    ],
    note: "A pop in the hip, pelvis, or low back can happen. Do not chase it.",
    kind: "exercise",
  },
  {
    id: "hip-squeeze",
    videoId: HIP_VIDEO,
    frame: "02",
    title: "SI joint squeeze",
    start: 171,
    end: 222,
    position: "On your back",
    hold: "5 seconds",
    reps: "5",
    gear: "None",
    summary:
      "Fists between the knees, then a hard squeeze, to mobilize the sacroiliac joints.",
    steps: [
      "Lie flat and lift both legs.",
      "Put your fists together and place them between the knees.",
      "Drive the knees together and squeeze. Hold 5 seconds, relax, and repeat 5 times.",
    ],
    note: "This frame stops before the standing strength work starts.",
    kind: "exercise",
  },
  {
    id: "hip-strength",
    videoId: HIP_VIDEO,
    frame: "03",
    title: "Step-down strength",
    start: 222,
    end: 355,
    position: "Standing on a step",
    hold: "5–10 seconds",
    reps: "Up to 10, each side",
    gear: "Stair or block, wall nearby",
    summary:
      "A slow single-leg lower from a step. The hanging leg drops while the pelvis stays level, then you hold at the bottom and again at the top.",
    steps: [
      "Stand with one foot on a block or stair and the other leg off the side. Use a wall or a stick if you need balance.",
      "Lower the free leg slowly. Keep both legs as straight as you comfortably can. Stop before pain, and do not let the pelvis tip forward.",
      "Hold the bottom stretch 5 to 10 seconds. Come back up and hold the top 5 to 10 seconds.",
      "Repeat up to 10 slow reps, then switch the standing leg.",
    ],
    note: "This is the frame that helps the correction last between sessions.",
    kind: "exercise",
  },
];

export const ROUTINES: Routine[] = [
  {
    id: "back",
    shortTitle: "Back",
    title: "The 3 Best Back Exercises (For NO MORE PAIN)",
    videoId: BACK_VIDEO,
    duration: 618,
    frames: BACK_FRAMES,
  },
  {
    id: "hip",
    shortTitle: "High hip",
    title: "How to Self Correct a High Hip in 30 SECONDS",
    videoId: HIP_VIDEO,
    duration: 355,
    frames: HIP_FRAMES,
  },
];

export const EXERCISES = ROUTINES.flatMap((routine) => routine.frames);

export function getRoutine(id: string): Routine {
  return ROUTINES.find((routine) => routine.id === id) ?? ROUTINES[0]!;
}

export function routineForFrame(frameId: string): Routine {
  return ROUTINES.find((routine) => routine.frames.some((frame) => frame.id === frameId)) ?? ROUTINES[0]!;
}

export function exerciseFrames(routine: Routine): Exercise[] {
  return routine.frames.filter((item) => item.kind === "exercise");
}

export function getExercise(id: string): Exercise {
  return EXERCISES.find((item) => item.id === id) ?? exerciseFrames(ROUTINES[0]!)[0]!;
}

export function nextExerciseId(routine: Routine, id: string, exercisesOnly = true): string | null {
  const list = exercisesOnly ? exerciseFrames(routine) : routine.frames;
  const index = list.findIndex((item) => item.id === id);
  if (index < 0 || index >= list.length - 1) return null;
  return list[index + 1]!.id;
}

export function clipLength(item: Exercise): number {
  return Math.max(0, item.end - item.start);
}

export function youtubeAt(videoId: string, start: number): string {
  return `https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(start)}s`;
}

export function thumbMax(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

export function thumbHq(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
