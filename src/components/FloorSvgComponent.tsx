import { useFloorStore } from "../store/floor.store";
import { TilePosition } from "../store/tiles.store";
import { addDataConnectToSvg } from "../fllor-it-utils";
import React, { useRef } from "react";
import { useDrop } from "react-dnd";

interface FloorSvgComponentProps {
  svgString: string;
  height: number;
  width: number;
  rotation: number;
  index: number;
  color: {
    [id: number]: string;
  };
  position: TilePosition;
}

export default function FloorSvgComponent({
  svgString,
  height,
  width,
  color,
  rotation,
  position,
  index,
}: FloorSvgComponentProps) {
  const saveTileProperty = useFloorStore((state) => state.saveTileProperty);

  const [{ isOver }, drop] = useDrop({
    accept: "tiles", // Specify which item types can be dropped here
    drop: (item: {
      color: {
        [id: number]: string;
      };
      rotation: number;
    }) => {
      saveTileProperty(index, position, {
        rotation: item.rotation,
        color: item.color,
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);
  drop(ref);

  const modifiedSvgString = addDataConnectToSvg(
    svgString,
    height,
    width,
    rotation,
    color
  );

  return (
    <div ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: modifiedSvgString }} />
    </div>
  );
}
