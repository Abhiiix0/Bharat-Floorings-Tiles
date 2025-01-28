"use client";
import roomImage1 from "../../../components/images/roomThumbnails/Sample1.png";
import roomImage5 from "../../../components/images/roomThumbnails/Sample5.png";
import roomLayer1 from "../../../components/images/roomsLayersCutout/sample1.png";
import TopBar from "../../../components/floor-visualizer/TopBar";
import { Room, useFloorVisualizerStore } from "../../../store/floorVisualizer.store";
import RoomPhotoPannel from "../../../components/floor-visualizer/RoomPhotoPannel";
import { useRouter } from "next/navigation";

export default function FloorVisuaizer() {
  const router = useRouter();

  const floor = useFloorVisualizerStore((state) => state.floor);

  // if (!floor) {
  //   router.push("/");
  // }

  return (
    <div className="h-screen w-full ">
      <TopBar rooms={rooms} />
      <RoomPhotoPannel handelRoomVisual={undefined} handleVisualizeClick={undefined} />
    </div>
  );
}

const rooms: Room[] = [
  {
    id: 1,
    image: roomImage1,
    layer: roomLayer1,
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
  {
    id: 2,
    image: roomImage5,
    layer: roomImage1,
    name: "Room 5",
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
  {
    id: 3,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 4,
    image: roomImage5,
    layer: roomImage5,
    name: "Room 5",
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
  {
    id: 5,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 6,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 7,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 8,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 9,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 10,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
  {
    id: 11,
    image: roomImage5,
    layer: roomLayer1,
    name: "Room 5",
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
];
