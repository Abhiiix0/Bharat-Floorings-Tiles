import { create } from "zustand";

interface ComponentStore {
  isTilesVisualizer: boolean;
  setIsTilesVisualizer: (value: boolean) => void;
}

export const useComponentStore = create<ComponentStore>((set) => ({
  isTilesVisualizer: false,
  setIsTilesVisualizer: (value) => set({ isTilesVisualizer: value }),
}));
