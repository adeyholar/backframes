import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Side = "left" | "right";

type SessionState = {
  activeId: string;
  loop: boolean;
  playThrough: boolean;
  completed: Record<string, { left?: boolean; right?: boolean }>;
  setActiveId: (id: string) => void;
  setLoop: (value: boolean) => void;
  setPlayThrough: (value: boolean) => void;
  toggleSide: (id: string, side: Side) => void;
  reset: () => void;
};

const EMPTY = {
  activeId: "morning",
  loop: true,
  playThrough: false,
  completed: {} as Record<string, { left?: boolean; right?: boolean }>,
};

export const useSession = create<SessionState>()(
  persist(
    (set) => ({
      ...EMPTY,
      setActiveId: (id) => set({ activeId: id }),
      setLoop: (value) =>
        set((state) => ({
          loop: value,
          playThrough: value ? false : state.playThrough,
        })),
      setPlayThrough: (value) =>
        set((state) => ({
          playThrough: value,
          loop: value ? false : state.loop,
        })),
      toggleSide: (id, side) =>
        set((state) => {
          const current = state.completed[id] ?? {};
          return {
            completed: {
              ...state.completed,
              [id]: { ...current, [side]: !current[side] },
            },
          };
        }),
      reset: () => set({ completed: {}, playThrough: false }),
    }),
    {
      name: "backframes-session-v1",
      skipHydration: true,
      partialize: (state) => ({ completed: state.completed, loop: state.loop }),
    },
  ),
);

export function isFrameDone(
  completed: SessionState["completed"],
  id: string,
): boolean {
  const entry = completed[id];
  return Boolean(entry?.left && entry?.right);
}
