import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HowClip } from "@/components/how-clip";
import {
  BRIDGE,
  DECIDED_KEEPS,
  SCIATICA_DRILLS,
  SCIATICA_SECTIONS,
  drillById,
  testableDrills,
  type Drill,
  type DrillStatus,
} from "@/lib/sciatica";
import { useSciatica } from "@/lib/sciatica-store";
import { cn } from "@/lib/utils";

const FILTERS = [
  ["all", "All"],
  ["untested", "Untested"],
  ["kept", "Kept"],
  ["dropped", "Dropped"],
] as const;

const CHOICES: { status: DrillStatus; label: string }[] = [
  { status: "untested", label: "Untested" },
  { status: "daily", label: "Keep daily" },
  { status: "weekly", label: "Keep 3× a week" },
  { status: "drop", label: "Drop" },
];

export function TestLog({ onOpenWorks }: { onOpenWorks: () => void }) {
  const entries = useSciatica((s) => s.entries);
  const setStatus = useSciatica((s) => s.setStatus);
  const setField = useSciatica((s) => s.setField);
  const setListed = useSciatica((s) => s.setListed);
  const reset = useSciatica((s) => s.reset);
  const importLegacy = useSciatica((s) => s.importLegacy);
  const [filter, setFilter] = useState<(typeof FILTERS)[number][0]>("all");
  const [open, setOpen] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void Promise.resolve(useSciatica.persist.rehydrate()).finally(() => {
      const legacy = localStorage.getItem("sciatica-test-log-v1");
      if (legacy) importLegacy(legacy);
      const state = useSciatica.getState().entries;
      const first = SCIATICA_SECTIONS.find((section) =>
        SCIATICA_DRILLS.some(
          (drill) =>
            drill.section === section.id &&
            drill.preset !== "locked" &&
            state[drill.id]?.status === "untested",
        ),
      );
      setOpen(first?.id ?? SCIATICA_SECTIONS[0].id);
      setReady(true);
    });
  }, [importLegacy]);

  const testable = testableDrills();
  const tested = testable.filter((drill) => entries[drill.id]?.status !== "untested").length;

  function visible(drill: Drill) {
    const status = entries[drill.id]?.status ?? "untested";
    if (status === "locked") return filter === "all";
    if (filter === "untested") return status === "untested";
    if (filter === "kept") return status === "daily" || status === "weekly";
    if (filter === "dropped") return status === "drop";
    return true;
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl tracking-[-0.02em]">How to score a test</h2>
        <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-foreground">
          <li>Note where the pain is before you start: foot, calf, thigh, buttock, or waist. Score 0–10.</li>
          <li>Do only that drill, then walk 5 minutes.</li>
          <li>Score again right after, at 30 minutes, and the next morning.</li>
          <li>Keep if the pain moves up toward the waist, the walk is easier, or the morning is the same or better.</li>
          <li>Drop if the pain travels farther down the leg, the foot gets more numb or weak, or the next morning is worse.</li>
          <li>One new drill per day. Do not stack two unknowns.</li>
        </ol>
      </section>

      <p className="rounded-xl bg-[#f6ebe8] px-4 py-3 text-sm font-medium leading-relaxed text-danger">
        Loss of bladder or bowel control, saddle numbness, or a leg that keeps getting weaker means stop and get urgent care.
      </p>

      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter drills">
        {FILTERS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={cn(
              "inline-flex h-11 items-center rounded-full px-4 text-sm",
              filter === id ? "bg-accent text-accent-foreground" : "bg-card text-foreground shadow-[var(--shadow-border)]",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl tracking-[-0.02em]">Do not restart</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Already decided. Change one here, or add a new keep to{" "}
          <button type="button" className="text-foreground underline" onClick={onOpenWorks}>
            your list
          </button>
          .
        </p>
        <p className="mt-4 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Keep daily</p>
        <div className="mt-2 flex flex-col gap-3">
          {DECIDED_KEEPS.map((id) => {
            const drill = drillById(id);
            if (!drill) return null;
            return <StatusRow key={id} drill={drill} />;
          })}
        </div>
        <p className="mt-4 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Drop</p>
        <div className="mt-2">
          <StatusRow drill={BRIDGE} />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Not test items: traction, TENS as a cure, ultrasound, back belts, hanging upside down, and aggressive twisting.
        </p>
      </section>

      {SCIATICA_SECTIONS.map((section) => {
        const drills = SCIATICA_DRILLS.filter((drill) => drill.section === section.id && visible(drill));
        if (!drills.length) return null;
        const left = SCIATICA_DRILLS.filter(
          (drill) =>
            drill.section === section.id &&
            drill.preset !== "locked" &&
            (entries[drill.id]?.status ?? "untested") === "untested",
        ).length;
        const isOpen = open === section.id;
        return (
          <section key={section.id} className="flex flex-col gap-2">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : section.id)}
              className="flex min-h-11 items-center justify-between gap-3 rounded-xl bg-accent px-4 py-3 text-left text-accent-foreground"
            >
              <span>
                <span className="block font-display text-lg leading-tight">{section.title}</span>
                {section.hint ? <span className="mt-0.5 block text-sm text-accent-foreground/75">{section.hint}</span> : null}
              </span>
              <span className="shrink-0 font-mono text-xs tabular-nums">{left} untested</span>
            </button>
            {isOpen ? (
              <div className="flex flex-col gap-3">
                {drills.map((drill) => (
                  <DrillCard
                    key={drill.id}
                    drill={drill}
                    ready={ready}
                    onStatus={setStatus}
                    onField={setField}
                    onList={setListed}
                  />
                ))}
              </div>
            ) : null}
          </section>
        );
      })}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <p className="text-xs text-subtle">
          Personal log, not medical advice. {ready ? `${tested} of ${testable.length} tested` : "Loading the log"}.
        </p>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => {
            if (window.confirm("Clear every score and start the log over? The already-decided keeps and the dropped bridge will return.")) {
              reset();
            }
          }}
        >
          Reset log
        </Button>
      </div>
    </div>
  );
}

function StatusRow({ drill }: { drill: Drill }) {
  const entry = useSciatica((s) => s.entries[drill.id]);
  const setStatus = useSciatica((s) => s.setStatus);
  const setListed = useSciatica((s) => s.setListed);
  const status = entry?.status ?? "untested";
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-3 first:border-t-0 first:pt-0">
      <div>
        <p className="text-sm font-medium text-foreground">{drill.name}</p>
        <p className="text-sm text-muted-foreground">{drill.dose}</p>
      </div>
      <ChoiceRow
        name={drill.name}
        status={status}
        locked={false}
        onPick={(next) => setStatus(drill.id, next)}
      />
      {status === "daily" || status === "weekly" ? (
        <ListToggle listed={Boolean(entry?.listed)} onChange={(listed) => setListed(drill.id, listed)} />
      ) : null}
    </div>
  );
}

function DrillCard({
  drill,
  ready,
  onStatus,
  onField,
  onList,
}: {
  drill: Drill;
  ready: boolean;
  onStatus: (id: string, status: DrillStatus) => void;
  onField: (id: string, key: "before" | "after" | "later" | "morning" | "where", value: string) => void;
  onList: (id: string, listed: boolean) => void;
}) {
  const entry = useSciatica((s) => s.entries[drill.id]);
  const status = entry?.status ?? "untested";
  const locked = drill.preset === "locked";
  return (
    <article
      className={cn(
        "flex flex-col gap-3 rounded-xl p-4 shadow-[var(--shadow-border)]",
        status === "daily" && "bg-[#e7f0ea]",
        status === "weekly" && "bg-[#e6eef3]",
        status === "drop" && "bg-[#f6ebe8]",
        (status === "untested" || status === "locked") && "bg-card",
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-xs tabular-nums text-muted-foreground">{String(drill.n).padStart(2, "0")}</span>
        <span className="text-sm text-muted-foreground">{drill.dose}</span>
      </div>
      <h3 className="font-display text-xl leading-tight">{drill.name}</h3>
      <HowClip drillId={drill.id} />
      <p className="text-sm text-muted-foreground">{drill.note}</p>
      {locked ? (
        <p className="text-sm font-medium text-danger">Do not test yet. This cannot be marked Keep.</p>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Score label="Before" value={ready ? entry?.before ?? "" : ""} onChange={(value) => onField(drill.id, "before", value)} />
          <Score label="After" value={ready ? entry?.after ?? "" : ""} onChange={(value) => onField(drill.id, "after", value)} />
          <Score label="30 min" value={ready ? entry?.later ?? "" : ""} onChange={(value) => onField(drill.id, "later", value)} />
          <Score label="Morning" value={ready ? entry?.morning ?? "" : ""} onChange={(value) => onField(drill.id, "morning", value)} />
          <label className="col-span-2 flex flex-col gap-1 text-xs text-muted-foreground sm:col-span-4">
            Where the pain sat after
            <input
              value={ready ? entry?.where ?? "" : ""}
              maxLength={80}
              placeholder="Foot, calf, thigh, buttock, or waist"
              onChange={(event) => onField(drill.id, "where", event.target.value)}
              className="h-11 rounded-md bg-background px-3 text-base text-foreground shadow-[var(--shadow-border)]"
            />
          </label>
        </div>
      )}
      <ChoiceRow name={drill.name} status={status} locked={locked} onPick={(next) => onStatus(drill.id, next)} />
      {!locked && (status === "daily" || status === "weekly") ? (
        <ListToggle listed={Boolean(entry?.listed)} onChange={(listed) => onList(drill.id, listed)} />
      ) : null}
    </article>
  );
}

function ListToggle({ listed, onChange }: { listed: boolean; onChange: (listed: boolean) => void }) {
  return (
    <Button type="button" variant={listed ? "subtle" : "default"} size="sm" onClick={() => onChange(!listed)}>
      {listed ? "On your list — remove" : "Add to my list"}
    </Button>
  );
}

function ChoiceRow({
  name,
  status,
  locked,
  onPick,
}: {
  name: string;
  status: DrillStatus;
  locked: boolean;
  onPick: (status: DrillStatus) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4" role="group" aria-label={`${name} status`}>
      {CHOICES.map((choice) => {
        const pressed = status === choice.status;
        return (
          <button
            key={choice.status}
            type="button"
            disabled={locked}
            aria-pressed={pressed}
            onClick={() => onPick(choice.status)}
            className={cn(
              "min-h-11 rounded-md px-2 text-sm disabled:opacity-40",
              pressed ? "bg-accent font-medium text-accent-foreground" : "bg-raised text-foreground",
            )}
          >
            {choice.label}
          </button>
        );
      })}
    </div>
  );
}

function Score({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-muted-foreground">
      {label}
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-md bg-background px-3 text-base text-foreground shadow-[var(--shadow-border)]"
      />
    </label>
  );
}
