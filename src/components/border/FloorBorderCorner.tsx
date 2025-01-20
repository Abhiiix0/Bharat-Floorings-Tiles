import { useTilesBorderStore } from "../../store/tilesBorder.store";
import React from "react";
import BorderSvgComponent from "./BorderSvgComponent";

interface FloorBorderCornerProps {
  svgString: string;
  rotation: number;
  height: number;
  width: number;
}

export default function FloorBorderCorner({
  svgString,
  rotation,
  height,
  width,
}: FloorBorderCornerProps) {
  const borderCorner = useTilesBorderStore((state) => state.borderCorner);

  return (
    <div>
      <BorderSvgComponent
        svgString={svgString}
        height={height}
        width={width}
        color={borderCorner.color}
        borderType={"corner"}
        isFloor={true}
        rotation={rotation}
      />
    </div>
  );
}
