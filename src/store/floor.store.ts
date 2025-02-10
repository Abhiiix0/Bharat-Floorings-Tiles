import { create } from "zustand";
import { TilesStore } from "./tiles.store";

export type TilePosition =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

interface TileCorner {
  rotation: number;
  color: { [id: number]: string };
}

export interface Tile {
  topLeft: TileCorner;
  topRight: TileCorner;
  bottomLeft: TileCorner;
  bottomRight: TileCorner;
}

export interface TileProperties {
  rotation: number;
  color: { [id: number]: string };
  width: number;
  height: number;
  svgString: string;
}

interface BorderProperties {
  color: { [id: number]: string };
  svgString: string;
}

interface FloorState {
  floorRow: number;
  floorColumn: number;
  showFloor: boolean;
  borderCorner: { color: { [id: number]: string } };
  borderLeftRight: { color: { [id: number]: string } };
  borderTopBottom: { color: { [id: number]: string } };
  tiles: Tile[]; // 5x5 grid of tiles, each containing Corner properties
  gridLayout: (TileProperties | {})[][];
  setFloorRow: (row: number) => void;
  setFloorColumn: (column: number) => void;
  setShowFloor: (show: boolean) => void;
  setTiles: (tiles: Tile[]) => void;
  saveTileProperty: (
    index: number,
    position: TilePosition,
    property: Partial<TileCorner>
  ) => void;
  calculateGridLayout: (
    borderSVGs: {
      corner: BorderProperties;
      top: BorderProperties;
      side: BorderProperties;
    },
    manipulatedResults: Record<
      TilePosition,
      Omit<TileProperties, "width" | "height">
    >
  ) => void;
  calculateGridLayoutWithBorder: (
    borderSVGs: any,
    manipulatedResults: any,
    border?: boolean
  ) => void;
  updateTileAtIndex: (
    i: number,
    j: number,
    svgString: string,
    rotation: number,
    color: { [id: number]: string }
  ) => void;

  setBorderCornerColor: (color: { [id: number]: string }) => void;
  setBorderLeftRightColor: (color: { [id: number]: string }) => void;
  setBorderTopBottomColor: (color: { [id: number]: string }) => void;
  applyCornerBorders: (
    svgString: string,
    color: { [id: number]: string }
    // floorRow: number,
    // floorColumn: number
  ) => void;
  applyLeftRightBorders: (
    svgString: string,
    color: { [id: number]: string }
    // floorRow: number,
    // floorColumn: number
  ) => void;
  applyTopBottomBorders: (
    svgString: string,
    color: { [id: number]: string }
    // floorRow: number,
    // floorColumn: number
  ) => void;
}

export const useFloorStore = create<FloorState>((set) => ({
  floorRow: 14,
  floorColumn: 20,
  showFloor: false,
  tiles: [],
  gridLayout: [[{}]],
  borderCorner: { color: {} },
  borderLeftRight: { color: {} },
  borderTopBottom: { color: {} },
  setFloorRow: (row) => {
    console.log("setFloorRow called with:", row);
    set((state) => {
      console.log("Previous floorRow:", state.floorRow);
      const newState = { ...state, floorRow: row };
      console.log("New state:", newState);
      return newState;
    });
  },
  setFloorColumn: (column) =>
    set((state) => ({ ...state, floorColumn: column })),
  setShowFloor: (show) => set((state) => ({ ...state, showFloor: show })),
  setTiles: (tiles) => set((state) => ({ ...state, tiles })),
  saveTileProperty: (index, position, property) =>
    set((state) => {
      const updatedTiles = [...state.tiles];
      updatedTiles[index] = {
        ...updatedTiles[index],
        [position]: {
          ...updatedTiles[index][position],
          ...property,
        },
      };
      return { ...state, tiles: updatedTiles };
    }),
  calculateGridLayout: (
    borderSVGs,
    manipulatedResults
  ) =>
    set((state) => {
      const { floorRow, floorColumn } = state;

      const newGridLayout = Array.from({ length: floorRow }, () =>
        Array.from({ length: floorColumn }, () => ({} as TileProperties))
      );

      for (let i = 0; i < floorRow; i++) {
        for (let j = 0; j < floorColumn; j++) {
          if (i === 0 && (j === 0 || j === floorColumn - 1)) {
            // Top corners
            newGridLayout[i][j] = {
              rotation: j === 0 ? 0 : 90,
              color: borderSVGs.corner.color,
              svgString: borderSVGs.corner.svgString,
              height: 25,
              width: 25,
            };
          } else if (i === floorRow - 1 && (j === 0 || j === floorColumn - 1)) {
            // Bottom corners
            newGridLayout[i][j] = {
              rotation: j === 0 ? 270 : 180,
              color: borderSVGs.corner.color,
              svgString: borderSVGs.corner.svgString,
              height: 25,
              width: 25,
            };
          } else if (i === 0) {
            // Top row excluding corners
            newGridLayout[i][j] = {
              rotation: 0,
              color: borderSVGs.top.color,
              svgString: borderSVGs.top.svgString,
              height: 25,
              width: 50,
            };
          } else if (i === floorRow - 1) {
            // Bottom row excluding corners
            newGridLayout[i][j] = {
              rotation: 180,
              color: borderSVGs.top.color,
              svgString: borderSVGs.top.svgString,
              height: 25,
              width: 50,
            };
          } else if (j === 0) {
            // Left column excluding corners
            newGridLayout[i][j] = {
              rotation: 0,
              color: borderSVGs.side.color,
              svgString: borderSVGs.side.svgString,
              height: 50,
              width: 25,
            };
          } else if (j === floorColumn - 1) {
            // Right column excluding corners
            newGridLayout[i][j] = {
              rotation: 180,
              color: borderSVGs.side.color,
              svgString: borderSVGs.side.svgString,
              height: 50,
              width: 25,
            };
          } else {
            // Inner tiles
            const topTiles: TilePosition[] = ["topLeft", "topRight"];
            const bottomTiles: TilePosition[] = ["bottomLeft", "bottomRight"];
            let tilePosition: TilePosition;
            if (i % 2 === 0) {
              // For even rows (0, 2, 4,...), use top tiles
              tilePosition = topTiles[(j - 1) % topTiles.length];
            } else {
              // For odd rows (1, 3, 5,...), use bottom tiles
              tilePosition = bottomTiles[(j - 1) % bottomTiles.length];
            }
            const tileProps = manipulatedResults[tilePosition];
            newGridLayout[i][j] = {
              rotation: tileProps.rotation,
              color: tileProps.color,
              svgString: tileProps.svgString,
              height: 50,
              width: 50,
            };
          }
        }
      }

      console.log(
        "newGridLayoutRow",
        newGridLayout.length,
        "newGridLayoutCol",
        newGridLayout[0].length
      );

      return { gridLayout: newGridLayout };
    }),
    calculateGridLayoutWithBorder:(borderSVGs:any, manipulatedResults:any, border = true) =>
    set((state) => {
      const { floorRow, floorColumn } = state;
  
      const newGridLayout = Array.from({ length: floorRow }, () =>
        Array.from({ length: floorColumn }, () => ({} as TileProperties))
      );
  
      for (let i = 0; i < floorRow; i++) {
        for (let j = 0; j < floorColumn; j++) {
          if (
            border && // Only add borders if `border === true`
            (i === 0 || i === floorRow - 1 || j === 0 || j === floorColumn - 1)
          ) {
            // Borders logic
            if (i === 0 && (j === 0 || j === floorColumn - 1)) {
              // Top corners
              newGridLayout[i][j] = {
                rotation: j === 0 ? 0 : 90,
                color: borderSVGs.corner.color,
                svgString: borderSVGs.corner.svgString,
                height: 25,
                width: 25,
              };
            } else if (i === floorRow - 1 && (j === 0 || j === floorColumn - 1)) {
              // Bottom corners
              newGridLayout[i][j] = {
                rotation: j === 0 ? 270 : 180,
                color: borderSVGs.corner.color,
                svgString: borderSVGs.corner.svgString,
                height: 25,
                width: 25,
              };
            } else if (i === 0) {
              // Top row excluding corners
              newGridLayout[i][j] = {
                rotation: 0,
                color: borderSVGs.top.color,
                svgString: borderSVGs.top.svgString,
                height: 25,
                width: 50,
              };
            } else if (i === floorRow - 1) {
              // Bottom row excluding corners
              newGridLayout[i][j] = {
                rotation: 180,
                color: borderSVGs.top.color,
                svgString: borderSVGs.top.svgString,
                height: 25,
                width: 50,
              };
            } else if (j === 0) {
              // Left column excluding corners
              newGridLayout[i][j] = {
                rotation: 0,
                color: borderSVGs.side.color,
                svgString: borderSVGs.side.svgString,
                height: 50,
                width: 25,
              };
            } else if (j === floorColumn - 1) {
              // Right column excluding corners
              newGridLayout[i][j] = {
                rotation: 180,
                color: borderSVGs.side.color,
                svgString: borderSVGs.side.svgString,
                height: 50,
                width: 25,
              };
            }
          } else if (!border || (i > 0 && i < floorRow - 1 && j > 0 && j < floorColumn - 1)) {
            // Inner tiles (Only floors when border = false)
            const topTiles: TilePosition[] = ["topLeft", "topRight"];
            const bottomTiles: TilePosition[] = ["bottomLeft", "bottomRight"];
            let tilePosition: TilePosition;
  
            if (i % 2 === 0) {
              // Even rows (0, 2, 4,...) use top tiles
              tilePosition = topTiles[j % topTiles.length];
            } else {
              // Odd rows (1, 3, 5,...) use bottom tiles
              tilePosition = bottomTiles[j % bottomTiles.length];
            }
  
            const tileProps = manipulatedResults[tilePosition];
            newGridLayout[i][j] = {
              rotation: tileProps.rotation,
              color: tileProps.color,
              svgString: tileProps.svgString,
              height: 50,
              width: 50,
            };
          }
        }
      }
  
      console.log(
        "newGridLayoutRow",
        newGridLayout.length,
        "newGridLayoutCol",
        newGridLayout[0].length
      );
  
      return { gridLayout: newGridLayout };
    }),
  updateTileAtIndex: (i, j, svgString, rotation, color) =>
    set((state) => {
      const newGridLayout = [...state.gridLayout];
      newGridLayout[i][j] = {
        ...newGridLayout[i][j],
        rotation,
        color,
        svgString,
      };
      return { gridLayout: newGridLayout };
    }),
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
  applyCornerBorders: (svgString, color) =>
    set((state) => {
      const newGridLayout = [...state.gridLayout];
      const { floorRow, floorColumn } = state;

      if (floorRow > 1 && floorColumn > 1) {
        // Top-left corner
        newGridLayout[0][0] = {
          ...newGridLayout[0][0],
          rotation: 0,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
        // Top-right corner
        newGridLayout[0][floorColumn - 1] = {
          ...newGridLayout[0][floorColumn - 1],
          rotation: 90,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
        // Bottom-left corner
        newGridLayout[floorRow - 1][0] = {
          ...newGridLayout[floorRow - 1][0],
          rotation: 270,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
        // Bottom-right corner
        newGridLayout[floorRow - 1][floorColumn - 1] = {
          ...newGridLayout[floorRow - 1][floorColumn - 1],
          rotation: 180,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
      }

      return { gridLayout: newGridLayout };
    }),
  applyLeftRightBorders: (svgString, color) =>
    set((state) => {
      const newGridLayout = [...state.gridLayout];
      const { floorRow, floorColumn } = state;

      for (let i = 1; i < floorRow - 1; i++) {
        // Left side
        newGridLayout[i][0] = {
          ...newGridLayout[i][0],
          rotation: 0,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
        // Right side
        newGridLayout[i][floorColumn - 1] = {
          ...newGridLayout[i][floorColumn - 1],
          rotation: 180,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
      }

      return { gridLayout: newGridLayout };
    }),
  applyTopBottomBorders: (svgString, color) =>
    set((state) => {
      const newGridLayout = [...state.gridLayout];
      const { floorRow, floorColumn } = state;

      for (let j = 1; j < floorColumn - 1; j++) {
        // Top row
        newGridLayout[0][j] = {
          ...newGridLayout[0][j],
          rotation: 0,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
        // Bottom row
        newGridLayout[floorRow - 1][j] = {
          ...newGridLayout[floorRow - 1][j],
          rotation: 180,
          color: color,
          svgString: svgString, // Replace with actual SVG string
        };
      }

      return { gridLayout: newGridLayout };
    }),
}));
