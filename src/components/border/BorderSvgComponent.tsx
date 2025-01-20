import { addDataConnectToSvg } from "../../fllor-it-utils";
import { useFloorStore } from "../../store/floor.store";
import { useTilesStore } from "../../store/tiles.store";
import { useTilesBorderStore } from "../../store/tilesBorder.store";

import React from "react";


interface BorderSvgComponentProps {
  svgString: string;
  height: number;
  width: number;
  color: {
    [id: number]: string;
  };
  rotation?: number;
  borderType: "corner" | "leftRight" | "topBottom";
  isFloor: boolean;
}

export default function BorderSvgComponent({
  svgString,
  height,
  width,
  color,
  borderType,
  isFloor,
  rotation = 0,
}: BorderSvgComponentProps) {
  const selectedColor = useTilesStore((state) => state.selectedColor);

  const borderCorner = useTilesBorderStore((state) => state.borderCorner);
  const borderLeftRight = useTilesBorderStore((state) => state.borderLeftRight);
  const borderTopBottom = useTilesBorderStore((state) => state.borderTopBottom);
  const setBorderCornerColor = useTilesBorderStore(
    (state) => state.setBorderCornerColor
  );
  const setBorderLeftRightColor = useTilesBorderStore(
    (state) => state.setBorderLeftRightColor
  );
  const setBorderTopBottomColor = useTilesBorderStore(
    (state) => state.setBorderTopBottomColor
  );

  const floorRow = useFloorStore((state) => state.floorRow);
  const floorColumn = useFloorStore((state) => state.floorColumn);
  const applyCornerBorders = useFloorStore((state) => state.applyCornerBorders);
  const applyTopBottomBorders = useFloorStore(
    (state) => state.applyTopBottomBorders
  );
  const applyLeftRightBorders = useFloorStore(
    (state) => state.applyLeftRightBorders
  );

  const modifiedSvgString = addDataConnectToSvg(
    svgString,
    height,
    width,
    rotation,
    color
  );

  const handleElementClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const dataConnect = target.getAttribute("data-connect");
    if (dataConnect) {
      const id = parseInt(dataConnect, 10);

      switch (borderType) {
        case "corner":
          setBorderCornerColor({
            ...borderCorner.color,
            [id]: selectedColor,
          });
          applyCornerBorders(
            modifiedSvgString,
            {
              ...borderCorner.color,
              [id]: selectedColor,
            }
            // floorRow,
            // floorColumn
          );

          break;
        case "leftRight":
          setBorderLeftRightColor({
            ...borderLeftRight.color,
            [id]: selectedColor,
          });
          applyLeftRightBorders(
            modifiedSvgString,
            {
              ...borderLeftRight.color,
              [id]: selectedColor,
            }
            // floorRow,
            // floorColumn
          );
          break;
        case "topBottom":
          setBorderTopBottomColor({
            ...borderTopBottom.color,
            [id]: selectedColor,
          });
          applyTopBottomBorders(
            modifiedSvgString,
            {
              ...borderTopBottom.color,
              [id]: selectedColor,
            }
            // floorRow,
            // floorColumn
          );

          break;
      }
    }
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: modifiedSvgString }}
      onClick={isFloor ? undefined : handleElementClick}
    />
  );
}
