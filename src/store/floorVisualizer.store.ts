import { StaticImageData } from "next/image";
import { create } from "zustand";
import roomImage1 from "../components/images/roomThumbnails/Sample1.png";
import roomLayerImage1 from "../components/images/roomsLayersCutout/sample1.png";

type SizeProperties = {
  top: number;
  left: number;
  perspective: number;
  rotateX: number;
  scale: number;
};

export type SizeItem = {
  size: string;
  properties: SizeProperties;
};

export interface Room {
  id: number;
  image: string | StaticImageData;
  layer: string | StaticImageData;
  name: string;
  sizes: SizeItem[];
}

interface FloorVisualizerStore {
  selectedRoom: Room;
  floor: string | StaticImageData;
  setSelectedRoom: (room: Room) => void;
  setFloor: (floor: string) => void;
  tileData: object,
  setTileData:any
  
}

export const useFloorVisualizerStore = create<FloorVisualizerStore>((set) => ({
  selectedRoom: {
    id: 0,
    image: roomImage1,
    layer: roomLayerImage1,
    name: "Room 1",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  // RoomCSSProperties: [
  //   {
  //     roomId: 1,
  //     sizes: [
  //       {
  //         size: "10*10",
  //         properties: {
  //           top: 1,
  //           left: 1,
  //           perspective: "100px",
  //           rotateX: 180,
  //           scale: 2.1,
  //         },
  //       },
  //       {
  //         size: "12*12",
  //         properties: {
  //           top: 1,
  //           left: 1,
  //           perspective: "100px",
  //           rotateX: 180,
  //           scale: 2.1,
  //         },
  //       },
  //     ],
  //   },
  //   ,
  //   {
  //     roomId: 2,
  //     sizes: [
  //       {
  //         size: "10*10",
  //         properties: {
  //           top: 1,
  //           left: 1,
  //           perspective: "100px",
  //           rotateX: 180,
  //           scale: 2.1,
  //         },
  //       },
  //       {
  //         size: "12*12",
  //         properties: {
  //           top: 1,
  //           left: 1,
  //           perspective: "100px",
  //           rotateX: 180,
  //           scale: 2.1,
  //         },
  //       },
  //     ],
  //   },
  // ],
  floor: "",
  tileData: {},
  setTileData: (tileData) => {
    set((state)=>({...state, tileData}))
  },
  setSelectedRoom: (room) => set((state) => ({ ...state, selectedRoom: room })),
  setFloor: (floor: string | StaticImageData) =>
    set((state) => ({ ...state, floor })),
}));
