import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/studio";

export const Route = createFileRoute("/p/$purpose")({
  component: PurposePage,
});

function PurposePage() {
  const { purpose } = Route.useParams();
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Studio purposeId={purpose} />
      </div>
    </main>
  );
}
