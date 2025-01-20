"use client";
import { TilePosition, useTilesStore } from "./../store/tiles.store";
import React from "react";
import RotateButton from "./RotationButton";
import SvgComponent from "./SvgComponent";

interface TilesPairProps {
    svgString: string;
    height: number,
    width:number
}

export default function SingleTile({ svgString, height=50, width=50, }: TilesPairProps) {
  const selectedColor = useTilesStore((state) => state.selectedColor);

  const manipulatedResults = useTilesStore((state) => state.manipulatedResults);
  const setManipulatedResult = useTilesStore(
    (state) => state.setManipulatedResult
  );

  const rotateTile = (position: TilePosition) => {
    const results = manipulatedResults[position];
    setManipulatedResult(
      position,
      results.rotation + 90,
      results.color,
      svgString
    );
  };

  const handleElementClick = (
    event: React.MouseEvent<HTMLElement>,
    position: TilePosition
  ) => {
    const target = event.target as HTMLElement;
    const dataConnect = target.getAttribute("data-connect");
    if (dataConnect) {
      // Update the color of the element with the data-connect ID
      const id = parseInt(dataConnect, 10);
      const updatedColors = {
        ...manipulatedResults[position].color,
        [id]: selectedColor,
      };
      setManipulatedResult(
        position,
        manipulatedResults[position].rotation,
        updatedColors,
        svgString
      );
      Object.keys(manipulatedResults).forEach((key) => {
        setManipulatedResult(
          key as TilePosition,
          manipulatedResults[key as TilePosition].rotation,
          updatedColors,
          svgString
        );
      });
    }
  };

  return (
    <div className="h-72 w-72 flex flex-col items-stretch justify-center">
          <SvgComponent
            svgString={svgString}
            height={height}
            width={width}
            position="topLeft"
            color={manipulatedResults["topLeft"].color}
            rotation={manipulatedResults["topLeft"].rotation}
            onClick={(event) => handleElementClick(event, "topLeft")}
          />
    </div>
  );
}
