import { drillClip } from "@/lib/sciatica";

export function HowClip({ drillId }: { drillId: string }) {
  const clip = drillClip(drillId);
  if (!clip) {
    return <p className="text-sm text-muted-foreground">No how-to clip for this one yet.</p>;
  }
  return (
    <video
      className="aspect-video w-full rounded-lg bg-black"
      controls
      playsInline
      preload="metadata"
      poster={clip.poster}
      src={clip.src}
    >
      How-to clip
    </video>
  );
}