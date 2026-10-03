import { createFileRoute, Link } from "@tanstack/react-router";
import { PURPOSES, exerciseFrames, getRoutine } from "@/lib/exercises";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10">
        <header className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Clipped exercise studio
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight tracking-[-0.03em] text-foreground sm:text-5xl">
            BackFrames
          </h1>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground sm:text-base">
            Each purpose has its own page. Open one and stay inside that list.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PURPOSES.map((purpose) => {
            const frames = purpose.routineIds.reduce(
              (sum, id) => sum + exerciseFrames(getRoutine(id)).length,
              0,
            );
            const meta =
              purpose.kind === "log"
                ? "One new drill a day"
                : purpose.kind === "works"
                  ? "Keeps only"
                  : purpose.kind === "clip"
                    ? "Play the clip"
                    : purpose.routineIds.length > 1
                      ? `${purpose.routineIds.length} routines`
                      : `${frames} frames`;
            return (
              <Link
                key={purpose.id}
                to="/p/$purpose"
                params={{ purpose: purpose.id }}
                className="flex min-h-36 flex-col gap-2 rounded-xl bg-card px-5 py-5 text-left shadow-[var(--shadow-border)] transition-colors hover:bg-raised"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  {purpose.aim}
                </span>
                <span className="font-display text-3xl leading-tight tracking-[-0.02em] text-foreground">
                  {purpose.title}
                </span>
                <span className="text-sm text-muted-foreground">{purpose.detail}</span>
                <span className="mt-auto pt-3 font-mono text-xs tabular-nums text-subtle">{meta}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
