import { create } from "zustand";

interface TilesBorderState {
  borderCorner: { color: { [id: number]: string } };
  borderLeftRight: { color: { [id: number]: string } };
  borderTopBottom: { color: { [id: number]: string } };
  setBorderCornerColor: (color: { [id: number]: string }) => void;
  setBorderLeftRightColor: (color: { [id: number]: string }) => void;
  setBorderTopBottomColor: (color: { [id: number]: string }) => void;
}

export const useTilesBorderStore = create<TilesBorderState>((set) => ({
  borderCorner: { color: {} },
  borderLeftRight: { color: {} },
  borderTopBottom: { color: {} },
  setBorderCornerColor: (color) =>
    set((state) => ({
      ...state,
      borderCorner: { color },
    })),
  setBorderLeftRightColor: (color) =>
    set((state) => ({
      ...state,
      borderLeftRight: { color },
    })),
  setBorderTopBottomColor: (color) =>
    set((state) => ({
      ...state,
      borderTopBottom: { color },
    })),
}));
