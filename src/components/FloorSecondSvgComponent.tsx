import { useFloorStore } from "./../store/floor.store";
import { TilePosition } from "./../store/tiles.store";
import { addDataConnectToSvg, addDataConnectToSvgWithGrainEffect } from "../fllor-it-utils";
import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import grainsEffect from "../../public/images/tiles/grains.svg"
interface FloorSecondSvgComponentProps {
  svgString: string;
  height: number;
  width: number;
  rotation: number;
  indexRow: number;
  indexCol: number;
  color: {
    [id: number]: string;
  };
}

export default function FloorSecondSvgComponent({
  svgString,
  height,
  width,
  color,
  rotation,
  indexRow,
  indexCol,
}: FloorSecondSvgComponentProps) {
  const saveTileProperty = useFloorStore((state) => state.saveTileProperty);
  const updateTileAtIndex = useFloorStore((state) => state.updateTileAtIndex);
  const gridLayout = useFloorStore((state) => state.gridLayout);

  const modifiedSvgString = addDataConnectToSvgWithGrainEffect(
    svgString,
    height,
    width,
    rotation,
    color,
    grainsEffect
  );

  const [{ isOver }, drop] = useDrop({
    accept: "tiles", // Specify which item types can be dropped here
    drop: (item: {
      color: {
        [id: number]: string;
      };
      rotation: number;
    }) => {
      const updatedSvgString = addDataConnectToSvgWithGrainEffect(
        svgString,
        height,
        width,
        rotation,
        item.color,
        grainsEffect // Ensure grainsEffect is applied
      );
      updateTileAtIndex(
        indexRow,
        indexCol,
        updatedSvgString,
        item.rotation,
        item.color
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const ref = useRef<HTMLDivElement>(null);
  drop(ref);

  return (
    <div ref={ref} >
      <div dangerouslySetInnerHTML={{ __html: modifiedSvgString }} />
    </div>
  );
}
