import { useFloorStore } from "./../store/floor.store";
import { TilePosition } from "./../store/tiles.store";
import { addDataConnectToSvg } from "../fllor-it-utils";
import React, { useRef } from "react";
import { useDrop } from "react-dnd";

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

  const modifiedSvgString = addDataConnectToSvg(
    svgString,
    height,
    width,
    rotation,
    color
  );

  const [{ isOver }, drop] = useDrop({
    accept: "tiles", // Specify which item types can be dropped here
    drop: (item: {
      color: {
        [id: number]: string;
      };
      rotation: number;
    }) => {
      //   saveTileProperty(index, position, {
      //     rotation: item.rotation,
      //     color: item.color,
      //   });
      updateTileAtIndex(
        indexRow,
        indexCol,
        modifiedSvgString,
        item.rotation,
        item.color
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  // console.log(
  //   `gridLayout ${indexRow} ${indexCol}`,
  //   gridLayout[indexRow][indexCol]
  // );

  const ref = useRef<HTMLDivElement>(null);
  drop(ref);

  return (
    <div ref={ref} >
      <div dangerouslySetInnerHTML={{ __html: modifiedSvgString }} />
    </div>
  );
}
