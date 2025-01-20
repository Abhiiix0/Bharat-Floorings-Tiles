import { create } from "zustand";

export type TilePosition =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export interface TilesStore {
  selectedColor: string;
  tileSize: string;
  manipulatedResults: Record<
    TilePosition,
    {
      rotation: number;
      color: { [id: number]: string };
      svgString: string;
    }
  >;

  setManipulatedResult: (
    position: TilePosition,
    rotation: number,
    color: { [id: number]: string },
    svgString: string
  ) => void;

  setSelectedColor: (color: string) => void;
  setTileSize: (size: string) => void;
}

export const useTilesStore = create<TilesStore>((set) => ({
  selectedColor: "white",
  tileSize: "",
  manipulatedResults: {
    topLeft: { rotation: 0, color: {}, svgString: "" },
    topRight: { rotation: 0, color: {}, svgString: "" },
    bottomLeft: { rotation: 0, color: {}, svgString: "" },
    bottomRight: { rotation: 0, color: {}, svgString: "" },
  },
  setTileSize: (size) => set({ tileSize: size }),
  setSelectedColor: (color) => set({ selectedColor: color }),
  setManipulatedResult: (position, rotation, color, svgString) =>
    set((state) => ({
      manipulatedResults: {
        ...state.manipulatedResults,
        [position]: { rotation, color, svgString },
      },
    })),
}));
