import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HowClip } from "@/components/how-clip";
import { SCIATICA_DRILLS, type Drill } from "@/lib/sciatica";
import { useSciatica } from "@/lib/sciatica-store";

export function WorksList() {
  const entries = useSciatica((s) => s.entries);
  const setListed = useSciatica((s) => s.setListed);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void Promise.resolve(useSciatica.persist.rehydrate()).finally(() => setReady(true));
  }, []);

  const drills = SCIATICA_DRILLS.filter((drill) => drill.preset !== "locked");
  const listed = (status: "daily" | "weekly") =>
    drills.filter((drill) => ready && entries[drill.id]?.listed && entries[drill.id]?.status === status);
  const waiting = drills.filter((drill) => {
    const entry = entries[drill.id];
    return ready && entry && (entry.status === "daily" || entry.status === "weekly") && !entry.listed;
  });
  const dropped = drills.filter((drill) => ready && entries[drill.id]?.status === "drop");

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl tracking-[-0.02em]">What works</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
          This is the list to build from. A drill lands here only after you keep it and add it. Dropped drills stay off.
        </p>
      </section>
      <Pile title="Every day" drills={listed("daily")} empty="Nothing daily yet." onRemove={(id) => setListed(id, false)} />
      <Pile title="Three times a week" drills={listed("weekly")} empty="Nothing on the lighter rotation yet." onRemove={(id) => setListed(id, false)} />
      <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl tracking-[-0.02em]">Ready to add</h2>
        {waiting.length ? (
          <ul className="mt-3 flex flex-col gap-3">
            {waiting.map((drill) => (
              <li key={drill.id} className="flex flex-col gap-2 border-t border-border pt-3 first:border-t-0 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">{drill.name}</p>
                  <p className="text-sm text-muted-foreground">{drill.dose}</p>
                </div>
                <Button type="button" size="sm" onClick={() => setListed(drill.id, true)}>
                  Add to my list
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">Kept drills you have not added yet will show up here.</p>
        )}
      </section>
      <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl tracking-[-0.02em]">Never again</h2>
        {dropped.length ? (
          <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
            {dropped.map((drill) => (
              <li key={drill.id}>{drill.name}</li>
            ))}
            {ready && entries.bridge?.status === "drop" ? <li>Glute bridge</li> : null}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">Nothing dropped yet.</p>
        )}
      </section>
    </div>
  );
}

function Pile({
  title,
  drills,
  empty,
  onRemove,
}: {
  title: string;
  drills: Drill[];
  empty: string;
  onRemove: (id: string) => void;
}) {
  const entries = useSciatica((s) => s.entries);
  return (
    <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
      <h2 className="font-display text-2xl tracking-[-0.02em]">{title}</h2>
      {drills.length ? (
        <ul className="mt-3 flex flex-col gap-4">
          {drills.map((drill) => {
            const entry = entries[drill.id];
            const scores = [entry?.before, entry?.after, entry?.later, entry?.morning].filter((value) => value !== "");
            return (
              <li key={drill.id} className="flex flex-col gap-3 border-t border-border pt-3 first:border-t-0 first:pt-0">
                <HowClip drillId={drill.id} />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-display text-lg leading-tight">{drill.name}</p>
                    <p className="text-sm text-muted-foreground">{drill.dose}</p>
                    <p className="mt-1 text-sm text-foreground">{drill.note}</p>
                    {entry?.where ? <p className="mt-1 text-sm text-muted-foreground">Pain sat in the {entry.where}.</p> : null}
                    {scores.length ? (
                      <p className="mt-1 font-mono text-xs tabular-nums text-subtle">
                        Before {entry?.before || "–"} · After {entry?.after || "–"} · 30 min {entry?.later || "–"} · Morning {entry?.morning || "–"}
                      </p>
                    ) : null}
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={() => onRemove(drill.id)}>
                    Remove
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">{empty}</p>
      )}
    </section>
  );
}
