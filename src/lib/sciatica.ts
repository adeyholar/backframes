export type DrillStatus = "untested" | "daily" | "weekly" | "drop" | "locked";

export type Drill = {
  id: string;
  n: number;
  section: string;
  name: string;
  dose: string;
  note: string;
  preset: "" | "daily" | "locked";
};

export type DrillEntry = {
  status: DrillStatus;
  before: string;
  after: string;
  later: string;
  morning: string;
  where: string;
  listed: boolean;
};

export const SCIATICA_SECTIONS = [
  { id: "s1", title: "Directional — spine", hint: "Test these first in a flare." },
  { id: "s2", title: "Nerve", hint: "Only after the spine drills are stable. No tensioners." },
  { id: "s3", title: "Core endurance", hint: "" },
  { id: "s4", title: "Hip strength", hint: "Left is the low side." },
  { id: "s5", title: "Pelvis and waist", hint: "Right hip high, left hip low." },
  { id: "s6", title: "Stretches", hint: "Test last, one at a time." },
  { id: "s7", title: "Release", hint: "" },
  { id: "s8", title: "Cardio", hint: "Short walks stay in either way." },
] as const;

export const SCIATICA_DRILLS: Drill[] = [
  ["prone-lie", 1, "s1", "Prone lying, face down, no push", "2–5 min", "Leg eases without a press-up.", ""],
  ["cobra", 2, "s1", "Cobra, hips stay down", "10 reps", "Already a keep if pain moves to the waist.", "daily"],
  ["standing", 3, "s1", "Standing back-bend after sitting", "10 reps", "Already a keep after driving.", "daily"],
  ["shift", 4, "s1", "Prone press-up with a small shift to the left", "10 reps", "Only if plain cobra stalls.", ""],
  ["flexion", 5, "s1", "Knees-to-chest / flexion", "10 reps", "Usually worse for a disc. Drop fast.", ""],
  ["glide", 6, "s1", "Side glide, hips toward the left", "10 reps", "One careful test for a right-high pelvis.", ""],
  ["slider-sit", 7, "s2", "Seated sciatic slider", "10 slow reps", "Knee straight as you look up; knee bends as you look down.", ""],
  ["slider-lie", 8, "s2", "Lying slider, ankle relaxed", "10 reps", "On your back, gentle knee straighten.", ""],
  ["pumps", 9, "s2", "Ankle pumps in the cobra position", "20", "Fine only if the leg stays quiet.", ""],
  ["tensioner", 10, "s2", "Nerve tensioner — do not test yet", "—", "Hold the leg straight and pull the toes.", "locked"],
  ["curlup", 11, "s3", "McGill curl-up", "3 × 8 sec", "One knee bent, hands under the low back.", ""],
  ["plank-l", 12, "s3", "Side plank from the knees, left", "3 × 8 sec", "Low hip side first.", ""],
  ["plank-r", 13, "s3", "Side plank from the knees, right", "3 × 8 sec", "Only if the leg stays quiet.", ""],
  ["birddog", 14, "s3", "Bird dog, slow", "5 each side", "Already a keep.", "daily"],
  ["deadbug", 15, "s3", "Dead bug, low range", "5 each side", "Stop if the back arches or the leg fires.", ""],
  ["plank", 16, "s3", "Front plank on knees", "3 × 10 sec", "Short plank already helped if the leg stayed quiet.", "daily"],
  ["slr-l", 17, "s4", "Side-lying straight-leg raise, left", "8", "Weak / low side.", ""],
  ["slr-r", 18, "s4", "Side-lying straight-leg raise, right", "8", "High side. Lighter.", ""],
  ["clam-l", 19, "s4", "Clamshell, left", "10", "Already a keep.", "daily"],
  ["clam-r", 20, "s4", "Clamshell, right", "10", "Score it separately.", ""],
  ["rev-l", 21, "s4", "Reverse clamshell, left", "10", "Already a keep.", "daily"],
  ["rev-r", 22, "s4", "Reverse clamshell, right", "10", "Score it separately.", ""],
  ["band", 23, "s4", "Band walk sideways", "8 steps each way", "Knees soft, trunk tall.", ""],
  ["sl-bridge", 24, "s4", "Single-leg bridge, left only", "5", "One test.", ""],
  ["hinge", 25, "s4", "Standing hip hinge, tiny range, flat back", "8", "Drop if bending flares the leg.", ""],
  ["sts", 26, "s4", "Sit-to-stand from a high seat", "8", "No forward fold.", ""],
  ["hip-ext", 27, "s4", "Prone hip extension", "As given by your therapist", "Already a keep.", "daily"],
  ["sidebend", 28, "s5", "Right side-bend stretch, arm overhead", "20–30 sec", "Pelvis stays put.", ""],
  ["hang", 29, "s5", "Doorway hang on the right, light", "20 sec", "Not full body weight.", ""],
  ["abd", 30, "s5", "Left hip abduction hold against a wall", "5 × 5 sec", "Low side strength.", ""],
  ["step", 31, "s5", "Step-down off a low step, left leg working", "5", "Knee tracks straight.", ""],
  ["fig4", 32, "s6", "Figure-4 / piriformis stretch, right", "20 sec", "Drop at the first shoot down the leg.", ""],
  ["pigeon", 33, "s6", "Pigeon, shallow", "20 sec", "Same stop rule.", ""],
  ["ham", 34, "s6", "Hamstring stretch, knee softly bent", "20 sec", "A nerve tug is a fail.", ""],
  ["flexor", 35, "s6", "Hip-flexor kneel, right", "20 sec", "Stop if the back pinches.", ""],
  ["ball", 36, "s7", "Tennis ball on the right glute", "30–60 sec", "Stop at electric pain down the leg.", ""],
  ["roller", 37, "s7", "Foam roller on the glute, broad pressure", "30 sec", "Same stop rule.", ""],
  ["heat", 38, "s7", "Heat on the waist, then cobra", "15 min + 10 cobras", "Keep only if cobra works better after.", ""],
  ["ice", 39, "s7", "Ice on the buttock", "10 min", "Keep only if the next walk is easier.", ""],
  ["walk", 40, "s8", "Walk on flat ground", "5–15 min", "Score distance and leg.", ""],
  ["bike", 41, "s8", "Stationary bike, upright, easy", "8 min", "Stop if the leg builds.", ""],
  ["pool", 42, "s8", "Pool walk", "8 min", "If you can get to a pool.", ""],
].map(([id, n, section, name, dose, note, preset]) => ({
  id,
  n,
  section,
  name,
  dose,
  note,
  preset,
})) as Drill[];

export const BRIDGE: Drill = {
  id: "bridge",
  n: 0,
  section: "extra",
  name: "Glute bridge",
  dose: "Do not retest unless a physical therapist changes the form",
  note: "Already failed.",
  preset: "",
};

export const DECIDED_KEEPS = [
  "cobra",
  "standing",
  "hip-ext",
  "birddog",
  "clam-l",
  "rev-l",
  "plank",
] as const;

const ALL = [...SCIATICA_DRILLS, BRIDGE];

export function drillById(id: string): Drill | undefined {
  return ALL.find((drill) => drill.id === id);
}

export function emptyEntry(drill: Drill): DrillEntry {
  if (drill.preset === "locked") {
    return { status: "locked", before: "", after: "", later: "", morning: "", where: "", listed: false };
  }
  if (drill.id === "bridge") {
    return { status: "drop", before: "", after: "", later: "", morning: "", where: "", listed: false };
  }
  const kept = drill.preset === "daily";
  return {
    status: kept ? "daily" : "untested",
    before: "",
    after: "",
    later: "",
    morning: "",
    where: "",
    listed: kept,
  };
}

export function seedEntries(): Record<string, DrillEntry> {
  const entries: Record<string, DrillEntry> = {};
  for (const drill of ALL) entries[drill.id] = emptyEntry(drill);
  return entries;
}

export function testableDrills(): Drill[] {
  return SCIATICA_DRILLS.filter((drill) => drill.preset !== "locked");
}
