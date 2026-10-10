export const BACK_VIDEO = "AlZm5IKaf1U";
export const HIP_VIDEO = "krGkT8NymA4";
export const CUPPLES_VIDEO = "3Oc7V2xB2kQ";
export const REHABFIX_VIDEO = "LVShMZEUros";

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
  presenter: string;
  channel: string;
  videoId: string;
  duration: number;
  portrait?: boolean;
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

const CUPPLES_FRAMES: Exercise[] = [
  {
    id: "cupples-brief",
    videoId: CUPPLES_VIDEO,
    frame: "00",
    title: "The test",
    start: 0,
    end: 267,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "Floor",
    summary:
      "Why one hip sits higher, then the 90/90 test that shows which side is limited before you start the drills.",
    steps: [
      "A hiked hip is often the pelvis making up for limited internal rotation, so it can still push into the ground.",
      "90/90 test: sit with one leg turned out (outer thigh down) and the other turned in (inner thigh down). Lean toward each end range.",
      "The side that lacks external rotation is the higher hip. The opposite side, short on internal rotation, is the lower one.",
      "If both sides feel stuck, do the log roll first. Then the stagger squat and the wall push.",
    ],
    note: "This clip is the explanation and the test. The three frames after it are the drills.",
    kind: "brief",
  },
  {
    id: "cupples-roll",
    videoId: CUPPLES_VIDEO,
    frame: "01",
    title: "Slow log roll",
    start: 267,
    end: 375,
    position: "Side-lying",
    hold: "2–5 minutes",
    reps: "Each side",
    gear: "Mat, pillow, or towel",
    summary:
      "A slow backward roll that lowers overall tension when both hips feel stiff. It is not a stretch.",
    steps: [
      "Lie on your side. Put a mat, rolled pillow, or towel under the ribs and the pelvis. Hips sit at about a 70° angle.",
      "Stack the arms in front of the chest. Breathe quietly through the nose. Do not force air in or out.",
      "Slide the whole body backward, chest and pelvis staying lined up, then roll back to the start. It should feel like melting, not stretching.",
      "Stay 2 to 5 minutes on each side. Going too far and chasing a stretch adds tension. That is the opposite of this drill.",
    ],
    note: "Use this first if the 90/90 test was tight on both sides.",
    kind: "exercise",
  },
  {
    id: "cupples-squat",
    videoId: CUPPLES_VIDEO,
    frame: "02",
    title: "Stagger squat",
    start: 375,
    end: 510,
    position: "Against a wall",
    hold: "60 seconds",
    reps: "3 holds, then 3×10",
    gear: "Wall, foam roller, a weight",
    summary:
      "A staggered squat with the hiked-side foot back, so that hip can find the internal rotation it has been missing.",
    steps: [
      "Foam roller on the low back, resting against the wall. Feet about 2 to 3 feet forward.",
      "Slide the hiked-side foot back until the big toe lines up with the end of the other foot’s arch. Hold a weight at the chest. Feet stay flat. Eyes forward.",
      "Inhale at the top. Squat to just above parallel and hold. Stay heavy on the heels, chest roughly parallel to the wall, no big arch in the back, and don’t let a foot lift.",
      "Hold 3 sets of 60 seconds. When that is easy, inhale down and exhale up for 3 sets of 10. Don’t lock the knees.",
    ],
    note: "The back foot is the hiked side. This frame ends before the wall push.",
    kind: "exercise",
  },
  {
    id: "cupples-push",
    videoId: CUPPLES_VIDEO,
    frame: "03",
    title: "Wall push",
    start: 510,
    end: 884,
    position: "Standing, one foot on the wall",
    hold: "60 seconds",
    reps: "3 holds, then 3×10",
    gear: "Wall, optional weight",
    summary:
      "A diagonal step that loads the lower side while the hiked-side foot pushes the wall away.",
    steps: [
      "Hiked-side foot flat on the wall. Step the other leg slightly forward and turn that foot out.",
      "Inhale through the nose and push the wall away, loading the front heel. You should feel the hiked-side glute and the front-side quad and hip.",
      "A reach with the hiked-side arm can stop the trunk from swinging. Keep the wall foot flat. On the loading leg, stay heel-heavy with the knee over the second toe — no cave.",
      "Hold 3 sets of 60 seconds, then 3 sets of 10 reps. Add a weight on the loading side when the push feels easy.",
    ],
    note: "This frame runs through the end of the demo, including the dynamic reps.",
    kind: "exercise",
  },
];

const REHABFIX_FRAMES: Exercise[] = [
  {
    id: "rehab-brief",
    videoId: REHABFIX_VIDEO,
    frame: "00",
    title: "Skip the hamstring stretch",
    start: 0,
    end: 31,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The wall hamstring stretch is the thing not to do. The tightness down the leg is treated as nerve tension from the low back, not a short muscle.",
    steps: [
      "The opening shows one leg up the wall and the other on the floor.",
      "Pulling that already irritable nerve can make the leg worse.",
      "The three frames after this work at the back and the nerve instead.",
    ],
    note: "This clip is only the warning. The exercises start in the next frame.",
    kind: "brief",
  },
  {
    id: "rehab-press",
    videoId: REHABFIX_VIDEO,
    frame: "01",
    title: "Side press-up",
    start: 31,
    end: 51,
    position: "Face down",
    hold: "Comfortable range",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "Lie face down, take the painful leg out to the side, and press up into extension to ease pressure on that side of the disc.",
    steps: [
      "Lie on your stomach.",
      "Bring the painful leg out to the side.",
      "Press the chest up only as far as it stays comfortable. Hips stay down.",
      "Each press is meant to calm the nerve pain in the leg, not to chase a deeper bend.",
    ],
    note: "This frame is only the side press-up.",
    kind: "exercise",
  },
  {
    id: "rehab-floss",
    videoId: REHABFIX_VIDEO,
    frame: "02",
    title: "Sciatic nerve floss",
    start: 51,
    end: 81,
    position: "Side-lying on a pillow",
    hold: "Slow reps",
    reps: "As shown",
    gear: "Pillow",
    summary:
      "Side-lying over a pillow so the low back arches, then a slider: straighten the painful leg and look up, then bend the knee and look down.",
    steps: [
      "Lie on your side over a pillow so the low back arches toward the ceiling.",
      "Hold the painful leg.",
      "Straighten the leg and look up.",
      "Bend the knee and look down. That is the floss. It is not a long hamstring pull.",
    ],
    note: "The pillow stays under you for this whole frame.",
    kind: "exercise",
  },
  {
    id: "rehab-frog",
    videoId: REHABFIX_VIDEO,
    frame: "03",
    title: "Tactical frog",
    start: 81,
    end: 100,
    position: "On all fours",
    hold: "A deep sit, then a rock",
    reps: "Each hip",
    gear: "Mat or carpet",
    summary:
      "Knees wide, sit back to open the hips, then rock forward and turn one hip in at a time.",
    steps: [
      "Get on all fours and spread the knees wide.",
      "Sit back as deep as you comfortably can.",
      "Rock forward while turning one hip inward, then the other.",
      "Stop before the pitch at the end of the short.",
    ],
    note: "The player stops before the phone-number pitch.",
    kind: "exercise",
  },
];

const REHABFIX_SOURCE_FRAMES: Exercise[] = [
  {
    id: "rehab-source-brief",
    videoId: "H9vE3fr_pAg",
    frame: "00",
    title: "Not a leg problem",
    start: 0,
    end: 24,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The nerve sits under the glute and the hamstring, so rubbing the leg does not last. The short treats the pain as coming from the low back.",
    steps: [
      "The opening shows how deep the nerve runs.",
      "Massaging the hamstring or digging into the glute is what they say to skip.",
      "The three frames after this are the work at the back.",
    ],
    note: "This clip is only the setup. The exercises start in the next frame.",
    kind: "brief",
  },
  {
    id: "rehab-source-press",
    videoId: "H9vE3fr_pAg",
    frame: "01",
    title: "Relaxed press-up",
    start: 24,
    end: 42,
    position: "Face down",
    hold: "Exhale at the top",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "Hands under the shoulders, press up only as far as is comfortable, and keep the glutes and low back relaxed.",
    steps: [
      "Lie on your stomach with your hands under your shoulders.",
      "Press up as far as it stays comfortable.",
      "Exhale at the top. Glutes and low back stay relaxed, hips stay down.",
      "The point is extension that eases disc pressure, not a deep yoga backbend.",
    ],
    note: "This frame is only the press-up.",
    kind: "exercise",
  },
  {
    id: "rehab-source-open",
    videoId: "H9vE3fr_pAg",
    frame: "02",
    title: "Open the nerve path",
    start: 42,
    end: 61,
    position: "Side-lying on a bed edge",
    hold: "A gentle arch",
    reps: "As shown",
    gear: "Bed or couch, pillow",
    summary:
      "Painful side up, on the edge of a bed or couch, pillow under the waist so the low back arches and the nerve exit has more room.",
    steps: [
      "Lie on the edge of a bed or couch.",
      "Painful side faces up.",
      "Put a pillow under the waist so the low back arches gently toward the ceiling.",
      "Stay there. This frame does not add a leg pull.",
    ],
    note: "This frame stops before the side plank starts.",
    kind: "exercise",
  },
  {
    id: "rehab-source-plank",
    videoId: "H9vE3fr_pAg",
    frame: "03",
    title: "Knee side plank",
    start: 61,
    end: 86,
    position: "Side plank from the knees",
    hold: "Lift, then lower",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "From the knees, lift the hips up and forward, separate the knees at the top, then lower and tap the glute.",
    steps: [
      "Set up in a side plank on your knees.",
      "Lift the hips up and forward.",
      "Separate the knees at the top.",
      "Lower slowly, tap the glute, and repeat.",
    ],
    note: "The player stops before the phone-number pitch.",
    kind: "exercise",
  },
];

const REHABFIX_ROOTS_FRAMES: Exercise[] = [
  {
    id: "roots-brief",
    videoId: "newfiFACOc4",
    frame: "00",
    title: "Which nerve",
    start: 0,
    end: 24,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "Buttock to the foot is treated as S1, the outer leg and top of the foot as L5, and the front of the thigh as L4. All three are traced back to the low back.",
    steps: [
      "The opening maps where the pain sits to a nerve root.",
      "The claim is that the source is still a disc in the low back.",
      "The three frames after this are the work, not a massage of the painful spot.",
    ],
    note: "This clip is only the map. The exercises start in the next frame.",
    kind: "brief",
  },
  {
    id: "roots-quad",
    videoId: "newfiFACOc4",
    frame: "01",
    title: "All-fours extension",
    start: 24,
    end: 40,
    position: "On all fours",
    hold: "A gentle press",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "On hands and knees, push the hips forward and down so the low back moves into extension.",
    steps: [
      "Get on all fours.",
      "Push the hips forward and down into a low-back extension.",
      "Stay inside a comfortable range.",
      "If the leg pain eases toward the back, that is the change they are looking for.",
    ],
    note: "This frame is only the all-fours press.",
    kind: "exercise",
  },
  {
    id: "roots-side",
    videoId: "newfiFACOc4",
    frame: "02",
    title: "Side-lying opening",
    start: 40,
    end: 54,
    position: "Side-lying on a bed edge",
    hold: "A gentle arch",
    reps: "As shown",
    gear: "Bed or couch, pillow",
    summary:
      "Painful side up, on the edge of a bed or sofa, pillow under the back so that side of the spine opens.",
    steps: [
      "Lie on the edge of a bed or sofa.",
      "Painful side faces up.",
      "Put a pillow under the back so the spine arches toward the ceiling.",
      "Stay there. This frame does not add a leg pull.",
    ],
    note: "This frame stops before the leg lifts start.",
    kind: "exercise",
  },
  {
    id: "roots-lifts",
    videoId: "newfiFACOc4",
    frame: "03",
    title: "Braced leg lifts",
    start: 54,
    end: 74,
    position: "On your back, feet toward a wall",
    hold: "Low back pressed down",
    reps: "Alternate slowly",
    gear: "Wall",
    summary:
      "Hands press the wall, the low back presses into the floor, then the legs alternate while that brace stays on.",
    steps: [
      "Lie on your back and press your hands into the wall.",
      "Push the low back toward the floor and brace the abdomen.",
      "Slowly alternate the legs without losing that pressure.",
      "The close of this frame says to treat the back, not only the spot that hurts.",
    ],
    note: "The player stops before the phone-number pitch.",
    kind: "exercise",
  },
];

const REHABFIX_WEEKS_FRAMES: Exercise[] = [
  {
    id: "weeks-brief",
    videoId: "H1GivG2MazE",
    frame: "00",
    title: "The shift",
    start: 0,
    end: 17,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "A client whose hips sat shifted to the left, with sciatica down the left leg. They correct that shift before the later exercises.",
    steps: [
      "The case is a lateral shift, not a random tight muscle.",
      "This client’s hips were shifted left, with pain down the left leg.",
      "Week one is the side glide. Later weeks add the hinge, then extension, a floss, and a hip drill.",
    ],
    note: "Their client was shifted left. Match the wall side to the painful side, not automatically to the left.",
    kind: "brief",
  },
  {
    id: "weeks-glide",
    videoId: "H1GivG2MazE",
    frame: "01",
    title: "Side glides",
    start: 17,
    end: 42,
    position: "Standing at a wall",
    hold: "A gentle push",
    reps: "Further over time",
    gear: "Wall",
    summary:
      "Elbow along the side, feet a foot from the wall, painful side away. Push the hip into the wall a little further over time.",
    steps: [
      "Lean into a wall with the elbow bent along the side.",
      "Feet together, about a foot from the wall.",
      "Painful side faces away from the wall.",
      "Push the hip gently into the wall. Do not force a sharp increase in leg pain.",
    ],
    note: "This frame is only week one, the side glide.",
    kind: "exercise",
  },
  {
    id: "weeks-hinge",
    videoId: "H1GivG2MazE",
    frame: "02",
    title: "Wall hinge",
    start: 42,
    end: 63,
    position: "Standing, feet back from the wall",
    hold: "Chest down, hips back",
    reps: "As shown",
    gear: "Wall",
    summary:
      "Feet a few feet from the wall. Push the chest down and the hips back to open the mid back.",
    steps: [
      "Lean into the wall with the feet a few feet back.",
      "Push the chest down and the hips back.",
      "The aim is mid-back extension, so the low back carries less of the bend.",
    ],
    note: "This frame is only the week-two hinge.",
    kind: "exercise",
  },
  {
    id: "weeks-press",
    videoId: "H1GivG2MazE",
    frame: "03",
    title: "Lumbar extension",
    start: 63,
    end: 77,
    position: "As shown",
    hold: "Comfortable range",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "Once the shift is straight, they switch off the side glides and move the spine into extension to ease the disc off the nerve.",
    steps: [
      "This starts only after the side glide is no longer the focus.",
      "The motion is extension, front to back, not another side glide.",
      "Stay short of a sharp increase in leg pain.",
    ],
    note: "This frame is the extension. The floss is next.",
    kind: "exercise",
  },
  {
    id: "weeks-floss",
    videoId: "H1GivG2MazE",
    frame: "04",
    title: "Nerve floss",
    start: 77,
    end: 82,
    position: "As shown",
    hold: "Slow reps",
    reps: "As shown",
    gear: "None",
    summary:
      "A short sciatic floss meant to slide the nerve, not to hold a long hamstring stretch.",
    steps: [
      "Follow the floss they demonstrate, not a wall hamstring pull.",
      "The motion should stay comfortable. Stop if the leg pain climbs.",
    ],
    note: "This clip is only the floss.",
    kind: "exercise",
  },
  {
    id: "weeks-hip",
    videoId: "H1GivG2MazE",
    frame: "05",
    title: "Hip mobilization",
    start: 82,
    end: 99,
    position: "As shown",
    hold: "Through the ranges they show",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "A triplanar hip drill so the hip moves in more than one direction and the low back does less of the work.",
    steps: [
      "Move the hip through the ranges they show.",
      "The point is hip motion, so the pelvis and disc take less of the bend.",
      "Stop before the pitch at the end of the short.",
    ],
    note: "The player stops before the phone-number pitch.",
    kind: "exercise",
  },
];

const REHABFIX_STEPS_FRAMES: Exercise[] = [
  {
    id: "steps-couch",
    videoId: "JI3_WssLJbs",
    frame: "01",
    title: "Couch extension",
    start: 30,
    end: 41,
    position: "Leaning on a couch",
    hold: "Hips forward and down",
    reps: "As shown",
    gear: "Couch",
    summary:
      "Knees a few feet back from the couch. Push the hips forward and down to restore extension without grabbing the feet.",
    steps: [
      "Lean your upper body on the couch.",
      "Set the knees a few feet back.",
      "Push the hips forward and down.",
      "The short opens with a feet-grab they say not to do. This frame starts after that.",
    ],
    note: "This frame is only the couch extension.",
    kind: "exercise",
  },
  {
    id: "steps-oblique",
    videoId: "JI3_WssLJbs",
    frame: "02",
    title: "Oblique sit",
    start: 41,
    end: 56,
    position: "Sitting, holding the couch",
    hold: "Drive up, then lower",
    reps: "As shown",
    gear: "Couch",
    summary:
      "Hold the couch, sit into the oblique position, drive up through the knees while squeezing the glutes, then lower slowly.",
    steps: [
      "Hold the couch for support.",
      "Get into the oblique sit.",
      "Pull up, driving through the knees and squeezing the glutes.",
      "Lower slowly. This is the hip and piriformis work.",
    ],
    note: "This frame stops before the QL dips.",
    kind: "exercise",
  },
  {
    id: "steps-ql",
    videoId: "JI3_WssLJbs",
    frame: "03",
    title: "QL dips",
    start: 56,
    end: 75,
    position: "Side plank from the knees",
    hold: "Lower, then pull up",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "Painful side down, on the knees. Lower the hips to stretch the QL, then pull back up. Straighten the legs only when that feels easy.",
    steps: [
      "Start on your knees with the painful side down.",
      "Lower the hips gently.",
      "Pull back up.",
      "Straighten the legs later if the knee version is easy.",
    ],
    note: "The player stops before the phone-number pitch.",
    kind: "exercise",
  },
];

const HARRIS_FRAMES: Exercise[] = [
  {
    id: "harris-why",
    videoId: "GdG8ZqwoXMo",
    frame: "00",
    title: "Not just the piriformis",
    start: 0,
    end: 70,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The short’s point: a tight piriformis can matter, but an arched low back can compress the nerve too. The drill that follows tips the pelvis back.",
    steps: [
      "Stretching the piriformis is not the whole story in this clip.",
      "An overly arched low back, anterior pelvic tilt, can crowd the nerve.",
      "The next frame is the drill: flatten the low back by dragging the heels.",
    ],
    note: "Explanation only. The exercise starts in the next frame.",
    kind: "brief",
  },
  {
    id: "harris-drag",
    videoId: "GdG8ZqwoXMo",
    frame: "01",
    title: "Heel drag",
    start: 70,
    end: 177,
    position: "On your back, feet on a wall",
    hold: "Quiet breaths",
    reps: "Stay and breathe",
    gear: "Wall. Foam roller and a pillow are optional.",
    summary:
      "Hips and knees at about 90°. Drag the heels down without sliding the feet so the tailbone lifts and the low back flattens. Hamstrings work. Glutes stay quiet.",
    steps: [
      "Lie on your back. Hips and knees each bent about 90°, feet flat on the wall. A book under the heels is optional leverage.",
      "A foam roller between the thighs is optional. Knees stay in line with the feet and hips. Chin points at the ceiling, relaxed.",
      "Keep the whole foot flat and soft. Think of dragging the heels down the wall. The feet do not actually slide.",
      "The tailbone lifts a little and the low back flattens into the floor. You should feel both hamstrings. If the low back will not flatten, slide a pillow under the tailbone and drag the heels again.",
      "Optional: once the hamstrings are on and nothing else is working, squeeze the roller at about 2 out of 10 so the inner thighs join in. Keep the feet flat, weight through the heels, and breathe.",
    ],
    note: "One drill, plus the light squeeze and the pillow fallback. Not medical advice. Stop if pain runs farther down the leg.",
    kind: "exercise",
  },
];

const L5_STEPS_FRAMES: Exercise[] = [
  {
    id: "l5-map",
    videoId: "bK49Qh1STSk",
    frame: "00",
    title: "The L5 line",
    start: 0,
    end: 28,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The short’s map: back of the thigh into the calf or foot is called S1, the side of the thigh into the shin and the top of the foot is called L5, and the front of the thigh is called L4.",
    steps: [
      "This frame is the map, not a diagnosis.",
      "L5, in this clip, is the side of the thigh, the shin, and the top of the foot.",
      "The next three frames are the drills they pair with that pattern.",
    ],
    note: "Explanation only. The work starts in the next frame.",
    kind: "brief",
  },
  {
    id: "l5-unload",
    videoId: "bK49Qh1STSk",
    frame: "01",
    title: "Unload",
    start: 28,
    end: 46,
    position: "On your back, feet on a wall",
    hold: "Slow belly breaths",
    reps: "Stay and breathe",
    gear: "Wall",
    summary:
      "Hips and knees at about 90°, feet on the wall. The point is to take pressure off the discs and let the belly move while you breathe.",
    steps: [
      "Lie on your back with your feet on the wall.",
      "Hips and knees each bent about 90°.",
      "Breathe slowly into the belly.",
      "Stay relaxed. This is not a hamstring stretch.",
    ],
    note: "This frame is only the wall unload.",
    kind: "exercise",
  },
  {
    id: "l5-extend",
    videoId: "bK49Qh1STSk",
    frame: "02",
    title: "Press-up",
    start: 46,
    end: 64,
    position: "Face down",
    hold: "Elbows, then a press",
    reps: "As shown",
    gear: "Mat or carpet",
    summary:
      "On your stomach, prop on the elbows first. If that eases the leg, press up with the glutes relaxed and the hips down.",
    steps: [
      "Roll onto your stomach and rest on your elbows.",
      "If the leg eases, progress to a press-up.",
      "Glutes stay relaxed. Hips stay down.",
      "Breathe. Stop if pain runs farther down the leg.",
    ],
    note: "This frame is the extension, from the elbows through the press-up.",
    kind: "exercise",
  },
  {
    id: "l5-floss",
    videoId: "bK49Qh1STSk",
    frame: "03",
    title: "Nerve floss",
    start: 64,
    end: 83,
    position: "On your back",
    hold: "To the first tension, not past it",
    reps: "10–15",
    gear: "None",
    summary:
      "Hold the painful leg. Straighten the knee and look up, then bend the knee and look down. Stop at the first tension.",
    steps: [
      "Lie on your back and hold the painful leg.",
      "Straighten the knee only to the first pull, and look up.",
      "Bend the knee and look down.",
      "About 10 to 15 reps. It is a slide, not a long hamstring stretch.",
    ],
    note: "The player runs through the end of the short. Not medical advice.",
    kind: "exercise",
  },
];

const L5_MORE_FRAMES: Exercise[] = [
  {
    id: "l5-more-brief",
    videoId: "newfiFACOc4",
    frame: "00",
    title: "Same root, other clips",
    start: 0,
    end: 24,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "These are the other drills already in the app that aim at the same root: extension, an opening on the painful side, a brace, a shifted press-up, and a side-lying floss.",
    steps: [
      "This is the map from the other short, which also calls the outer leg and the top of the foot L5.",
      "The frames after this are those drills, not a second program.",
      "Skip any one that sends pain farther down the leg.",
    ],
    note: "The exercises start in the next frame.",
    kind: "brief",
  },
  { ...REHABFIX_ROOTS_FRAMES[1]!, id: "l5-allfours", frame: "01" },
  { ...REHABFIX_ROOTS_FRAMES[2]!, id: "l5-opening", frame: "02" },
  { ...REHABFIX_ROOTS_FRAMES[3]!, id: "l5-lifts", frame: "03" },
  { ...REHABFIX_FRAMES[1]!, id: "l5-side-press", frame: "04" },
  { ...REHABFIX_FRAMES[2]!, id: "l5-side-floss", frame: "05" },
];

const PIRIFORMIS_FRAMES: Exercise[] = [
  {
    id: "piri-brief",
    videoId: "yBRSQB0Xyb0",
    frame: "00",
    title: "Weak, not tight",
    start: 0,
    end: 208,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The claim is that a piriformis often feels tight because it is weak. The four frames after this strengthen it instead of stretching it.",
    steps: [
      "Stretching is what this video says to stop leading with.",
      "In neutral, the job they train is external rotation.",
      "With the hip bent, they also train it as an opener out to the side.",
      "The player stops before the program pitch.",
    ],
    note: "Explanation only. The first drill starts at 3:28.",
    kind: "brief",
  },
  {
    id: "piri-side",
    videoId: "yBRSQB0Xyb0",
    frame: "01",
    title: "Side-lying rotation",
    start: 208,
    end: 303,
    position: "On your side",
    hold: "5 seconds at the end",
    reps: "2 sets of 4–6",
    gear: "Mat or carpet",
    summary:
      "Top leg lifts a little, then the thigh turns up. Pelvis stays square. Think of drawing the leg into the hip.",
    steps: [
      "Lie on your side. Hips stay neutral, pelvis does not roll open.",
      "Lift the top leg just off the bottom leg.",
      "Turn the thigh up, away from the midline, and keep trying to go a little farther.",
      "Hold about 5 seconds, then lower slowly.",
    ],
    note: "This frame is only the side-lying rotation.",
    kind: "exercise",
  },
  {
    id: "piri-stand",
    videoId: "yBRSQB0Xyb0",
    frame: "02",
    title: "Standing turn",
    start: 303,
    end: 426,
    position: "Standing on one leg",
    hold: "5 seconds",
    reps: "2 sets of 4–6",
    gear: "None",
    summary:
      "The working foot stays on the floor. Turn the body around that leg so the hip rotates out. Stay tall.",
    steps: [
      "Stand with the feet about hip width.",
      "Lift the other foot. The working foot stays down.",
      "Turn the body around the standing leg. Think of the foot turning out from the hip.",
      "Hold about 5 seconds. Keep the standing arch active.",
    ],
    note: "This frame is only the standing turn.",
    kind: "exercise",
  },
  {
    id: "piri-four",
    videoId: "yBRSQB0Xyb0",
    frame: "03",
    title: "All-fours lift",
    start: 426,
    end: 550,
    position: "On all fours",
    hold: "5 seconds",
    reps: "2 sets of 4–6",
    gear: "Mat or carpet",
    summary:
      "Hands under shoulders, knees under hips, spine quiet. Lift one knee out to the side without twisting the back.",
    steps: [
      "Set up on all fours with a quiet spine.",
      "Brace lightly through the middle.",
      "Lift one knee out to the side. The pelvis and back stay still.",
      "Hold about 5 seconds. If it cramps, lower the knee a little and try again.",
    ],
    note: "This frame is only the all-fours lift.",
    kind: "exercise",
  },
  {
    id: "piri-open",
    videoId: "yBRSQB0Xyb0",
    frame: "04",
    title: "Standing opener",
    start: 550,
    end: 681,
    position: "Standing, hip bent",
    hold: "5 seconds",
    reps: "2 sets of 4–6",
    gear: "A wall for balance",
    summary:
      "Hip bent about 90°. Drop the sit bone toward the floor instead of hiking the hip, then take the knee out to the side.",
    steps: [
      "Stand by a wall if you need the balance.",
      "Bend the hip to about 90°.",
      "Drop that sit bone toward the floor. Do not hitch the hip up.",
      "Take the knee out to the side and hold about 5 seconds. Draw the leg into the hip.",
    ],
    note: "The player stops before the program pitch. Not medical advice. Stop if pain runs down the leg.",
    kind: "exercise",
  },
];

const STACEY_FRAMES: Exercise[] = [
  {
    id: "stacey-why",
    videoId: "UCDOYknb1RU",
    frame: "00",
    title: "Why the stretch backfires",
    start: 0,
    end: 140,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "A hamstring stretch is treated as more tension on an already irritated nerve. The two drills after this open the exit and slide the nerve instead.",
    steps: [
      "Tightness down the leg is not treated as a short hamstring.",
      "The first drill opens the side the nerve exits.",
      "The second is a slow floss, not a held stretch.",
      "The player stops before the free-group pitch.",
    ],
    note: "Explanation and the short disclaimer. The first drill starts at 2:20.",
    kind: "brief",
  },
  {
    id: "stacey-side",
    videoId: "UCDOYknb1RU",
    frame: "01",
    title: "Side-lying opener",
    start: 140,
    end: 244,
    position: "Side-lying, painful side up",
    hold: "A couple of minutes",
    reps: "Once, then rest",
    gear: "Pillow or folded blanket",
    summary:
      "Painful side up, knees slightly bent, a folded pillow under the waist so that side of the spine opens. Stay and let it settle.",
    steps: [
      "Lie on your side with the painful side facing up.",
      "Bend the knees a little, as if curling into a ball.",
      "Put a folded pillow or blanket under the waist.",
      "Relax there for a couple of minutes. Do not pull the leg.",
    ],
    note: "This frame is only the side-lying opener.",
    kind: "exercise",
  },
  {
    id: "stacey-floss",
    videoId: "UCDOYknb1RU",
    frame: "02",
    title: "Nerve floss",
    start: 244,
    end: 376,
    position: "On your back",
    hold: "To the first pull, not past it",
    reps: "8–10",
    gear: "None",
    summary:
      "Support the painful leg. Straighten the knee and point the toes up as the chin lifts, then bend the knee and look down. Slow. No bounce.",
    steps: [
      "Lie on your back and support the painful leg behind the thigh.",
      "Straighten the knee only to the first mild pull. Toes come up, chin lifts a little.",
      "Bend the knee, point the toes down, and look down.",
      "8 to 10 slow passes. Stop if it zaps or turns sharp.",
    ],
    note: "This frame is only the floss.",
    kind: "exercise",
  },
  {
    id: "stacey-retest",
    videoId: "UCDOYknb1RU",
    frame: "03",
    title: "Retest",
    start: 376,
    end: 493,
    position: "Watch last",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The close treats sciatica as a low-back problem. Opening the exit is the point. Stretching before that is what they say can make it worse.",
    steps: [
      "Notice whether the leg feels quieter after the opener and the floss.",
      "If pain ran farther down the leg, stop and skip that drill next time.",
      "This is not a hamstring program.",
    ],
    note: "The player stops before the free-group pitch. Not medical advice.",
    kind: "brief",
  },
];

const BED_FRAMES: Exercise[] = [
  {
    id: "bed-brief",
    videoId: "BoqeyUEcNPs",
    frame: "00",
    title: "Before bed",
    start: 0,
    end: 49,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "A bedtime sequence for night sciatica: a pelvic rock, two releases, a press-up, then two nerve flosses. Stop any one that sends pain farther down the leg.",
    steps: [
      "This is meant for the bed, before sleep.",
      "The releases are stretches. Skip them if a stretch makes the leg worse.",
      "The player stops before the subscribe close.",
    ],
    note: "Explanation only. The warm-up starts at 0:49.",
    kind: "brief",
  },
  {
    id: "bed-rock",
    videoId: "BoqeyUEcNPs",
    frame: "01",
    title: "Pelvic rock",
    start: 49,
    end: 124,
    position: "On your back, knees bent",
    hold: "1–2 seconds each way",
    reps: "15–20",
    gear: "Bed",
    summary:
      "Feet flat, hands on the hips. Rock the tailbone up, then down, so the low back and hips loosen before the rest.",
    steps: [
      "Lie on your back, knees bent, feet about hip width.",
      "Rock the tailbone up and hold a second or two.",
      "Rock it down and hold a second or two.",
      "Keep it fluid for about 15 to 20 rocks.",
    ],
    note: "This frame is only the warm-up.",
    kind: "exercise",
  },
  {
    id: "bed-figure",
    videoId: "BoqeyUEcNPs",
    frame: "02",
    title: "Figure-four release",
    start: 124,
    end: 241,
    position: "On your back",
    hold: "5–10 seconds, or 30 if you pull",
    reps: "5–10",
    gear: "Bed",
    summary:
      "Painful-side ankle over the other knee. Press that knee away, or reach through and pull the back leg toward you. This is a glute stretch, not a hamstring pull.",
    steps: [
      "Lie on your back and cross the painful-side ankle over the other knee.",
      "Press the knee away and hold 5 to 10 seconds. About 5 to 10 times.",
      "Optional: reach through and pull the back leg in for about 30 seconds, breathing slowly.",
      "Stop if the leg pain climbs.",
    ],
    note: "This frame is only the lying release.",
    kind: "exercise",
  },
  {
    id: "bed-seated-release",
    videoId: "BoqeyUEcNPs",
    frame: "03",
    title: "Seated release",
    start: 241,
    end: 375,
    position: "Sitting on the edge of the bed",
    hold: "5–10 seconds",
    reps: "5–10",
    gear: "Bed",
    summary:
      "Same figure-four, sitting on the edge. Press the knee down. If that stays easy, lean away from the painful side while the press holds.",
    steps: [
      "Sit on the edge of the bed, back tall.",
      "Ankle of the painful side over the other knee, or over the shin if that is as far as it goes.",
      "Press the bent knee down and hold 5 to 10 seconds.",
      "Optional: lean away from the painful side while the press stays on. Stop if it zaps.",
    ],
    note: "This frame is only the seated release.",
    kind: "exercise",
  },
  {
    id: "bed-press",
    videoId: "BoqeyUEcNPs",
    frame: "04",
    title: "Press-up",
    start: 375,
    end: 500,
    position: "Face down",
    hold: "30–45 seconds",
    reps: "3–5",
    gear: "Bed or floor",
    summary:
      "On your stomach, press the chest up and keep the hips down. They hold it, then show a side tilt. The aim is less disc pressure, not a deep bend.",
    steps: [
      "Lie face down. Hands can be in a V or under the shoulders.",
      "Press the chest up. Hips stay down.",
      "Hold about 30 to 45 seconds and breathe. 3 to 5 times.",
      "The side tilt is in this same frame. Try both sides only if the straight press stays comfortable.",
    ],
    note: "This frame is only the press-up.",
    kind: "exercise",
  },
  {
    id: "bed-floss",
    videoId: "BoqeyUEcNPs",
    frame: "05",
    title: "Nerve floss",
    start: 500,
    end: 605,
    position: "On your back",
    hold: "1–2 seconds on each pump",
    reps: "5 pumps, 5 rounds",
    gear: "Bed",
    summary:
      "Draw the painful knee in, then straighten it only to the first pull. Pump the foot away and back, five times, and build slowly.",
    steps: [
      "Lie on your back, knees bent.",
      "Draw the painful knee toward the chest.",
      "Straighten the knee only to the first pull. Do not chase a deep hamstring stretch.",
      "Pump the foot away, then back toward you, about five times. Repeat the round about five times.",
    ],
    note: "This frame is only the lying floss.",
    kind: "exercise",
  },
  {
    id: "bed-seated-floss",
    videoId: "BoqeyUEcNPs",
    frame: "06",
    title: "Seated floss",
    start: 605,
    end: 723,
    position: "Sitting on the edge of the bed",
    hold: "1–2 seconds, or 5 on the slump",
    reps: "5 pumps, then 5 rounds",
    gear: "Bed",
    summary:
      "Painful leg long, heel down, toes up. Pump the foot. The slump at the end is optional and is the one to skip if the nerve complains.",
    steps: [
      "Sit tall on the edge of the bed.",
      "Painful leg straight, heel on the floor, toes up. The other knee stays bent.",
      "Press the heel down, pump the foot away, then draw it back. About five pumps.",
      "Skip the chin-tuck slump if it sends pain down the leg.",
    ],
    note: "The player stops before the subscribe close. Not medical advice.",
    kind: "exercise",
  },
];

const SLEEP_FRAMES: Exercise[] = [
  {
    id: "sleep-brief",
    videoId: "xWz8pUARPvc",
    frame: "00",
    title: "Why the night matters",
    start: 0,
    end: 124,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary:
      "The claim is that an L4-L5 disc loads more overnight if the position keeps it compressed or twisted. The frames after this are the setup, not a diagnosis.",
    steps: [
      "This is about how you lie down, not a new exercise program.",
      "A subscribe line sits inside this opening. The steps start at 2:04.",
      "The player stops before the outro.",
    ],
    note: "Explanation only.",
    kind: "brief",
  },
  {
    id: "sleep-list",
    videoId: "xWz8pUARPvc",
    frame: "01",
    title: "The seven changes",
    start: 124,
    end: 204,
    position: "Watch first",
    hold: "—",
    reps: "Once",
    gear: "None",
    summary: "The list of the seven changes, before each one is shown on its own.",
    steps: [
      "Decompress before sleep.",
      "Find a calm pelvic position.",
      "Support the knees, pick a side, and support the low back if you sleep on your back.",
      "Get in and out without a twist, sit before you stand, and optionally raise the head of the bed.",
    ],
    note: "This frame is only the list.",
    kind: "brief",
  },
  {
    id: "sleep-decompress",
    videoId: "xWz8pUARPvc",
    frame: "02",
    title: "Pre-sleep decompression",
    start: 204,
    end: 296,
    position: "Standing, then the floor, then on your back",
    hold: "About 60s, then 90s, then 2 min",
    reps: "Once through",
    gear: "Rolled blanket or towel",
    summary:
      "Gentle standing extensions, a supported child’s pose, then a slow knee-to-chest rock. Easy range. Not a hard stretch.",
    steps: [
      "Stand and press the hips gently forward, hands on the hips, for about a minute.",
      "Supported child’s pose for about 90 seconds. A roll can go under the chest or the hips.",
      "On your back, rock one knee toward the chest for about two minutes.",
      "Stop if pain runs farther down the leg.",
    ],
    note: "This frame is only the pre-sleep routine.",
    kind: "exercise",
  },
  {
    id: "sleep-tilt",
    videoId: "xWz8pUARPvc",
    frame: "03",
    title: "Find neutral",
    start: 296,
    end: 388,
    position: "Standing beside the bed",
    hold: "The calmest tilt",
    reps: "A few slow rocks",
    gear: "None",
    summary:
      "Rock the pelvis forward and back and notice which spot keeps the back and the leg quietest. Keep that pelvis as you lie down.",
    steps: [
      "Stand next to the mattress.",
      "Tilt the pelvis slowly forward, then back.",
      "Mark the position where the leg feels calmest.",
      "Lower into bed without losing that tilt.",
    ],
    note: "This frame is only the tilt test.",
    kind: "exercise",
  },
  {
    id: "sleep-pillow",
    videoId: "xWz8pUARPvc",
    frame: "04",
    title: "Pillow between the knees",
    start: 388,
    end: 482,
    position: "On your side",
    hold: "All night",
    reps: "Set it once",
    gear: "A pillow about as thick as the hip",
    summary:
      "The pillow should keep the top knee and hip level. Too thin and the top leg drops and twists the low back.",
    steps: [
      "Lie on your side.",
      "Put a pillow between the knees, thick enough that the top knee stays level with the hip.",
      "The top thigh should not hang toward the bed.",
    ],
    note: "This frame is only the knee pillow.",
    kind: "exercise",
  },
  {
    id: "sleep-side",
    videoId: "xWz8pUARPvc",
    frame: "05",
    title: "Which side",
    start: 482,
    end: 590,
    position: "On your side",
    hold: "The quieter side",
    reps: "Test both",
    gear: "Pillow",
    summary:
      "Their rule is painful side up, so that side of the spine has more room. If the other side is quieter, use that one.",
    steps: [
      "Symptoms on the left: try the right side down, so the left side faces up.",
      "Symptoms on the right: try the left side down.",
      "Stay with the side that leaves the leg quieter by morning.",
    ],
    note: "This frame is the side rule, not a second pillow lesson.",
    kind: "exercise",
  },
  {
    id: "sleep-towel",
    videoId: "xWz8pUARPvc",
    frame: "06",
    title: "Towel under the back",
    start: 590,
    end: 674,
    position: "On your back",
    hold: "All night, if you sleep this way",
    reps: "Set it once",
    gear: "A bath towel rolled to about 3–4 inches",
    summary:
      "For back sleeping. The roll sits under the low back at the belt line so the curve does not flatten into the mattress.",
    steps: [
      "Roll a bath towel to about 3 or 4 inches.",
      "Lie on your back and place it under the low back, at the belt line.",
      "The roll supports the curve. It is not a big arch.",
    ],
    note: "Skip this if you sleep on your side.",
    kind: "exercise",
  },
  {
    id: "sleep-entry",
    videoId: "xWz8pUARPvc",
    frame: "07",
    title: "In and out of bed",
    start: 674,
    end: 759,
    position: "Sitting, then on your side",
    hold: "—",
    reps: "Every time",
    gear: "None",
    summary:
      "Sit, lower onto your side with the arms, and bring both legs up together. To get out, roll to the side, drop both feet, and push up. No twist.",
    steps: [
      "Sit on the edge.",
      "Lower sideways onto an elbow. Spine stays quiet.",
      "Bring both legs up together.",
      "To get out: roll to the side, both feet off the edge, then push up with the arms.",
    ],
    note: "This frame is only getting in and out.",
    kind: "exercise",
  },
  {
    id: "sleep-clock",
    videoId: "xWz8pUARPvc",
    frame: "08",
    title: "Sit before you stand",
    start: 759,
    end: 843,
    position: "Sitting on the edge",
    hold: "A few minutes",
    reps: "10–20 tilts",
    gear: "None",
    summary:
      "After waking, sit on the edge for a few minutes and rock the pelvis 10 to 20 times before you stand.",
    steps: [
      "Do not stand up the moment you wake.",
      "Sit on the edge for a few minutes.",
      "Rock the pelvis 10 to 20 times.",
      "Then stand.",
    ],
    note: "This frame is only the morning sit.",
    kind: "exercise",
  },
  {
    id: "sleep-incline",
    videoId: "xWz8pUARPvc",
    frame: "09",
    title: "A slight incline",
    start: 843,
    end: 936,
    position: "On your back",
    hold: "All night, if you try it",
    reps: "Once",
    gear: "Wedge, or the head of an adjustable bed",
    summary:
      "Optional. Raise the head of the bed about 10 to 15 degrees so gravity gives the low back a little length. Meant for back sleepers.",
    steps: [
      "A wedge under the mattress, or an adjustable base, about 10 to 15 degrees.",
      "This is a mild slope, not sitting up in bed.",
      "Skip it if side sleeping is the position that stays quiet.",
    ],
    note: "The player stops before the outro. Not medical advice.",
    kind: "exercise",
  },
];

export const ROUTINES: Routine[] = [
  {
    id: "l5-steps",
    shortTitle: "L5 line",
    title: "3-Step Sciatica Fix",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: "bK49Qh1STSk",
    duration: 83,
    portrait: true,
    frames: L5_STEPS_FRAMES,
  },
  {
    id: "piriformis",
    shortTitle: "Piriformis",
    title: "Your Piriformis Isn't Tight, it's Weak",
    presenter: "Coach E",
    channel: "Precision Movement",
    videoId: "yBRSQB0Xyb0",
    duration: 761,
    frames: PIRIFORMIS_FRAMES,
  },
  {
    id: "stacey-open",
    shortTitle: "Don't stretch",
    title: "Stretching for Sciatica Pain Relief Is Making It Worse",
    presenter: "Michael Stacey",
    channel: "Michael Stacey",
    videoId: "UCDOYknb1RU",
    duration: 540,
    frames: STACEY_FRAMES,
  },
  {
    id: "bedtime",
    shortTitle: "Before bed",
    title: "Sciatica at Night? Do THIS Before Bed",
    presenter: "Dr. Rowe",
    channel: "SpineCare",
    videoId: "BoqeyUEcNPs",
    duration: 726,
    frames: BED_FRAMES,
  },
  {
    id: "sleep-l45",
    shortTitle: "L4-L5 sleep",
    title: "Best Sleeping Position for L4-L5 Disc Bulge",
    presenter: "Dr. Tam Ly",
    channel: "Ativa Pain & Spine",
    videoId: "xWz8pUARPvc",
    duration: 1006,
    frames: SLEEP_FRAMES,
  },
  {
    id: "l5-more",
    shortTitle: "More for L5",
    title: "Other drills for the L5 path",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: "newfiFACOc4",
    duration: 83,
    portrait: true,
    frames: L5_MORE_FRAMES,
  },
  {
    id: "harris-tilt",
    shortTitle: "Heel drag",
    title: "This Fixes Sciatica More Than Stretching",
    presenter: "Conor Harris",
    channel: "Conor Harris",
    videoId: "GdG8ZqwoXMo",
    duration: 177,
    portrait: true,
    frames: HARRIS_FRAMES,
  },
  {
    id: "back",
    shortTitle: "Back",
    title: "The 3 Best Back Exercises (For NO MORE PAIN)",
    presenter: "Dr. Michael Rowe",
    channel: "SpineCare Decompression and Chiropractic Center",
    videoId: BACK_VIDEO,
    duration: 618,
    frames: BACK_FRAMES,
  },
  {
    id: "hip",
    shortTitle: "High hip",
    title: "How to Self Correct a High Hip in 30 SECONDS",
    presenter: "Dr. Michael Rowe",
    channel: "SpineCare Decompression and Chiropractic Center",
    videoId: HIP_VIDEO,
    duration: 355,
    frames: HIP_FRAMES,
  },
  {
    id: "uneven",
    shortTitle: "Uneven hips",
    title: "The ONLY 2 Exercises You Need to Fix Uneven Hips",
    presenter: "Zac Cupples",
    channel: "Zac Cupples",
    videoId: CUPPLES_VIDEO,
    duration: 884,
    frames: CUPPLES_FRAMES,
  },
  {
    id: "rehabfix",
    shortTitle: "Sciatica fix",
    title: "3 Exercises to Fix Sciatica Pain Fast",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: REHABFIX_VIDEO,
    duration: 112,
    portrait: true,
    frames: REHABFIX_FRAMES,
  },
  {
    id: "rehabfix-source",
    shortTitle: "Wrong area",
    title: "The Reason Your Sciatica Keeps Coming Back",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: "H9vE3fr_pAg",
    duration: 100,
    portrait: true,
    frames: REHABFIX_SOURCE_FRAMES,
  },
  {
    id: "rehabfix-roots",
    shortTitle: "Leg pain",
    title: "3 Exercises for Leg Pain Coming From Your Lower Back",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: "newfiFACOc4",
    duration: 83,
    portrait: true,
    frames: REHABFIX_ROOTS_FRAMES,
  },
  {
    id: "rehabfix-weeks",
    shortTitle: "3 weeks",
    title: "How We Fixed Sciatica in 3 Weeks",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: "H1GivG2MazE",
    duration: 111,
    portrait: true,
    frames: REHABFIX_WEEKS_FRAMES,
  },
  {
    id: "rehabfix-steps",
    shortTitle: "3 steps",
    title: "Why Sciatica Hurts, 3 Steps",
    presenter: "RehabFix",
    channel: "RehabFix",
    videoId: "JI3_WssLJbs",
    duration: 85,
    portrait: true,
    frames: REHABFIX_STEPS_FRAMES,
  },
];

export type ClipSource = {
  id: string;
  title: string;
  src: string;
  poster: string;
  credit: string;
  href: string;
  note: string;
};

export type Purpose = {
  id: string;
  title: string;
  aim: string;
  detail: string;
  kind: "frames" | "log" | "works" | "clip";
  routineIds: string[];
  clipSrc?: string;
  clips?: ClipSource[];
};

export const PURPOSES: Purpose[] = [
  {
    id: "l5",
    title: "L5 line",
    aim: "Side of the leg",
    detail:
      "The path that short calls L5: side of the thigh, shin, and the top of the foot. The drills aimed at that root. Not a diagnosis.",
    kind: "frames",
    routineIds: ["l5-steps", "l5-more"],
  },
  {
    id: "piriformis",
    title: "Piriformis",
    aim: "Strength, not a stretch",
    detail: "Four strength drills for a piriformis that feels tight. The program pitch is cut off. Not on the L5 page.",
    kind: "frames",
    routineIds: ["piriformis"],
  },
  {
    id: "stacey",
    title: "Don't stretch",
    aim: "Open the exit",
    detail:
      "A side-lying opener and a nerve floss. The hamstring stretch is what this video says to stop. The group pitch is cut off.",
    kind: "frames",
    routineIds: ["stacey-open"],
  },
  {
    id: "bedtime",
    title: "Before bed",
    aim: "Sciatica at night",
    detail:
      "A bedtime sequence: pelvic rock, two releases, a press-up, then two nerve flosses. The subscribe close is cut off.",
    kind: "frames",
    routineIds: ["bedtime"],
  },
  {
    id: "sleep",
    title: "L4-L5 sleep",
    aim: "Tonight",
    detail:
      "How to lie down, which side, and how to get out of bed. Not a diagnosis, and not the bedtime exercise list.",
    kind: "frames",
    routineIds: ["sleep-l45"],
  },
  {
    id: "morning",
    title: "Five minutes",
    aim: "Every morning",
    detail: "The five-minute morning routine from the post you sent. About a minute on screen.",
    kind: "clip",
    routineIds: [],
    clipSrc: "/morning/five.mp4",
  },
  {
    id: "strength",
    title: "Lower back strength",
    aim: "From X",
    detail: "Your account had no lower-back videos. These two strength clips are from other posts on X.",
    kind: "clip",
    routineIds: [],
    clips: [
      {
        id: "floor",
        title: "Floor lift",
        src: "/strength/floor.mp4",
        poster: "/strength/floor.jpg",
        credit: "@TheNiDiVi",
        href: "https://x.com/TheNiDiVi/status/2105707666924614106",
        note: "Face down, lift the chest a short way, then lower. No bench.",
      },
      {
        id: "extension",
        title: "Back extension",
        src: "/strength/extension.mp4",
        poster: "/strength/extension.jpg",
        credit: "@evan_physique",
        href: "https://x.com/evan_physique/status/2106120310604861591",
        note: "On a back-extension bench. Slow, with a stretch at the bottom. No swinging.",
      },
    ],
  },
  {
    id: "shorts",
    title: "Sciatica shorts",
    aim: "Quick clips",
    detail: "The shorts you sent. One move per frame.",
    kind: "frames",
    routineIds: [
      "harris-tilt",
      "rehabfix-steps",
      "rehabfix-weeks",
      "rehabfix-roots",
      "rehabfix-source",
      "rehabfix",
    ],
  },
  {
    id: "log",
    title: "Test log",
    aim: "Find what helps",
    detail: "One new sciatica drill a day. Score it, then keep it or drop it.",
    kind: "log",
    routineIds: [],
  },
  {
    id: "works",
    title: "What works",
    aim: "The list you keep",
    detail: "Drills you decided to keep, with the how-to clip for each one.",
    kind: "works",
    routineIds: [],
  },
  {
    id: "back",
    title: "Back",
    aim: "Daily back work",
    detail: "Morning stretch, midday stretch, then the strength that makes the relief last.",
    kind: "frames",
    routineIds: ["back"],
  },
  {
    id: "hip",
    title: "High hip",
    aim: "A hip that sits high",
    detail: "Mobilize the pelvis, then the step-down that helps the change hold.",
    kind: "frames",
    routineIds: ["hip"],
  },
  {
    id: "uneven",
    title: "Uneven hips",
    aim: "One side higher",
    detail: "The test, then the log roll, stagger squat, and wall push.",
    kind: "frames",
    routineIds: ["uneven"],
  },
];

export function getPurpose(id: string): Purpose {
  return PURPOSES.find((item) => item.id === id) ?? PURPOSES[0]!;
}

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
