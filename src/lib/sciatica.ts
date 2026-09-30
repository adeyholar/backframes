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
  ["slr-r", 18, "s4", "Straight-leg raise, right, on the back", "8", "Left knee stays bent. High side, lighter.", ""],
  ["clam-l", 19, "s4", "Clamshell, left", "10", "Already a keep.", "daily"],
  ["clam-r", 20, "s4", "Clamshell, right", "10", "Score it separately.", ""],
  ["rev-l", 21, "s4", "Reverse clamshell, left", "10", "Already a keep.", "daily"],
  ["rev-r", 22, "s4", "Reverse clamshell, right", "10", "Score it separately.", ""],
  ["band", 23, "s4", "Band walk sideways", "8 steps each way", "Knees soft, trunk tall.", ""],
  ["sl-bridge", 24, "s4", "Single-leg bridge, right leg", "5", "One foot stays down. One test.", ""],
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

/** Grok Imagine posts from the Sciatica clips page. Retries replace the first take when the retry still exists. */
export const DRILL_CLIPS: Record<string, string> = {
  "prone-lie": "d0740ef5-f488-4a11-bc3f-71c53f7b8ab0",
  cobra: "88bce49a-1b3d-4123-9731-cf514a64e20f",
  standing: "28fcdf3d-9b91-488e-8ba9-f2536e8f119a",
  shift: "1aac1b32-0fa1-4d5c-8f83-9d055ea1ef19",
  flexion: "e7410641-d6ae-4f96-8d22-b449702ed26b",
  glide: "ddb01a0a-2287-4c4a-b312-2bf0c5087368",
  "slider-sit": "9bec5688-7ec2-4339-a7e9-9716aa615609",
  "slider-lie": "55507d78-cf1c-4af0-907b-a17c81b54009",
  pumps: "012e0809-b9f8-4ca1-9f80-407bee5d69f7",
  tensioner: "ce50980c-f36c-45c3-9326-91cbce1613dc",
  curlup: "5d0236c2-088a-4d72-8814-37e2ae11942b",
  "plank-l": "364bfed6-a354-4a2a-8d9e-fe322f59eaa5",
  "plank-r": "feaaac55-3c6d-4812-98f6-17c09844a915",
  birddog: "bc6c7437-5efc-46b1-83be-7bcdbb8e83f8",
  deadbug: "44b67853-82ee-4828-bab9-ce9f31260bd2",
  plank: "5b1b368e-879b-448e-b18e-d18664192d9b",
  "slr-l": "82f509a7-2b0a-4545-9fbe-0ee9658904fb",
  "slr-r": "9c8f7d0f-1b2e-42a4-9b28-d7ddd36ebd22",
  "clam-l": "87571dbb-0b24-4421-8e35-f6a4d009da59",
  "clam-r": "3c2ef85a-6251-4299-bfd0-c3863d66af3a",
  "rev-l": "a48f1f09-ae87-4475-b0c7-64783ca2d6b3",
  "rev-r": "d471cc31-90a5-4ad5-9d93-c3c991bffbad",
  band: "d83286c9-7676-43b6-b77e-50ea07432495",
  "sl-bridge": "4e07f2b1-f119-4c11-a2cf-1151bdd87c52",
  hinge: "3148c1b4-b118-4ccb-8004-b1c562dd110e",
  sts: "b4e9f0f5-2b15-45ab-b1b7-369442f43859",
  "hip-ext": "28dca93c-963d-4516-b070-e61719b36759",
  sidebend: "d34d3dd4-5a32-47d1-b78b-98872a41f5a5",
  hang: "9e301845-b3ff-4b9a-8e49-9f9ef00f1de5",
  abd: "9da0842b-c391-4b42-9a4c-e98ca116f27b",
  step: "2b4750f0-fad1-4433-92d2-39263bc96db1",
  fig4: "07dbb1ac-82f9-42c1-8509-c4c8ec93b53a",
  pigeon: "4ff2cfeb-2033-46f7-880a-b5b76ffdffc0",
  ham: "3b147d07-5bce-44f9-b34d-05a5e5e11ae3",
  flexor: "fba18882-68f9-4d72-ac72-32895815a8f9",
  ball: "c45d6dd6-cce9-4fcc-981b-3ec92b88b042",
  roller: "d68829bb-50bd-41f3-9dd1-9344c8cb505c",
  heat: "613c5cb2-ea45-4c5e-aaf0-cbff455cc568",
  ice: "b785d46c-019a-4bf5-ab95-a5fc26b25aaf",
  walk: "64a0f1e1-663c-4fb4-bac3-d8cfba568531",
  bike: "7862c6c2-5343-41f3-918a-7695e66e7bdb",
  pool: "4966c5b3-ad1a-43ee-8aac-69574b47ec9f",
};

export function drillClip(id: string): { src: string; poster: string } | null {
  const post = DRILL_CLIPS[id];
  if (!post) return null;
  // Hosted here. Grok's CDN only serves the first spine clips without a login cookie.
  return {
    src: `/clips/${post}.mp4`,
    poster: `/clips/${post}.jpg`,
  };
}
