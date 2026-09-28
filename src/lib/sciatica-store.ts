import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  drillById,
  emptyEntry,
  seedEntries,
  type DrillEntry,
  type DrillStatus,
} from "@/lib/sciatica";

type SciaticaState = {
  entries: Record<string, DrillEntry>;
  legacyImported: boolean;
  setStatus: (id: string, status: DrillStatus) => void;
  setField: (id: string, key: "before" | "after" | "later" | "morning" | "where", value: string) => void;
  setListed: (id: string, listed: boolean) => void;
  reset: () => void;
  importLegacy: (raw: string) => void;
};

function clampScore(value: string): string {
  if (value === "") return "";
  const n = Number(value);
  if (Number.isNaN(n)) return "";
  return String(Math.max(0, Math.min(10, Math.round(n))));
}

export const useSciatica = create<SciaticaState>()(
  persist(
    (set) => ({
      entries: seedEntries(),
      legacyImported: false,
      setStatus: (id, status) =>
        set((state) => {
          const drill = drillById(id);
          if (!drill || drill.preset === "locked") return state;
          if (status === "locked") return state;
          const current = state.entries[id] ?? emptyEntry(drill);
          const listed = status === "daily" || status === "weekly" ? current.listed : false;
          return {
            entries: {
              ...state.entries,
              [id]: { ...current, status, listed },
            },
          };
        }),
      setField: (id, key, value) =>
        set((state) => {
          const drill = drillById(id);
          if (!drill || drill.preset === "locked") return state;
          const current = state.entries[id] ?? emptyEntry(drill);
          const next = key === "where" ? value.slice(0, 80) : clampScore(value);
          return { entries: { ...state.entries, [id]: { ...current, [key]: next } } };
        }),
      setListed: (id, listed) =>
        set((state) => {
          const drill = drillById(id);
          if (!drill) return state;
          const current = state.entries[id] ?? emptyEntry(drill);
          if (current.status !== "daily" && current.status !== "weekly") return state;
          return { entries: { ...state.entries, [id]: { ...current, listed } } };
        }),
      reset: () => set({ entries: seedEntries(), legacyImported: true }),
      importLegacy: (raw) =>
        set((state) => {
          if (state.legacyImported) return state;
          try {
            const parsed = JSON.parse(raw) as Record<string, Partial<DrillEntry>>;
            const entries = { ...state.entries };
            for (const [id, value] of Object.entries(parsed)) {
              const drill = drillById(id);
              if (!drill || !value || drill.preset === "locked") continue;
              const status = value.status === "daily" || value.status === "weekly" || value.status === "drop" || value.status === "untested"
                ? value.status
                : entries[id]?.status ?? "untested";
              entries[id] = {
                ...emptyEntry(drill),
                ...entries[id],
                ...value,
                status,
                listed: status === "daily" || status === "weekly",
              };
            }
            const tensioner = drillById("tensioner");
            if (tensioner) entries.tensioner = emptyEntry(tensioner);
            return { entries, legacyImported: true };
          } catch {
            return { legacyImported: true };
          }
        }),
    }),
    {
      name: "backframes-sciatica-v1",
      skipHydration: true,
      partialize: (state) => ({ entries: state.entries, legacyImported: state.legacyImported }),
    },
  ),
);
