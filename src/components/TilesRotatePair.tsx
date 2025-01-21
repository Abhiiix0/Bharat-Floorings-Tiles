"use client";
import { TilePosition, useTilesStore } from "./../store/tiles.store";
import React from "react";
import RotateButton from "./RotationButton";
import SvgComponent from "./SvgComponent";
import SvgRotateComponent from "./SvgRotateComponent";

interface TilesPairProps {
  svgString: string;
}

export default function TilesPair({ svgString }: TilesPairProps) {
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
    <div className=" flex flex-col items-stretch justify-center">
   
      
        <div className="flex relative justify-center">
          <SvgRotateComponent
            svgString={svgString}
            height={174}
            width={174}
            position="topLeft"
            color={manipulatedResults["topLeft"].color}
            rotation={manipulatedResults["topLeft"].rotation}
            onClick={(event) => handleElementClick(event, "topLeft")}
          />
          <SvgRotateComponent
            svgString={svgString}
            height={174}
            width={174}
            position="topRight"
            color={manipulatedResults["topRight"].color}
            rotation={manipulatedResults["topRight"].rotation}
            onClick={(event) => handleElementClick(event, "topRight")}
                  />
     <div className="flex absolute w-full  h-[175px] top-0 left-0  justify-between">
                      <div  onClick={() => rotateTile("topLeft")} className=" cursor-pointer w-[174px] h-full"></div>
                      <div onClick={() => rotateTile("topRight")}  className="w-[174px] cursor-pointer h-full"></div>
      </div>
        </div>
        <div className="flex relative justify-center">
          <SvgRotateComponent
            svgString={svgString}
            height={174}
            width={174}
            position="bottomLeft"
            color={manipulatedResults["bottomLeft"].color}
            rotation={manipulatedResults["bottomLeft"].rotation}
            onClick={(event) => handleElementClick(event, "bottomLeft")}
          />
          <SvgRotateComponent
            svgString={svgString}
            height={174}
            width={174}
            position="bottomRight"
            color={manipulatedResults["bottomRight"].color}
            rotation={manipulatedResults["bottomRight"].rotation}
            onClick={(event) => handleElementClick(event, "bottomRight")}
                  />
                  <div className="flex absolute w-full h-[175px] top-0 left-0  justify-between">
                      <div  onClick={() => rotateTile("bottomLeft")} className="cursor-pointer w-[174px] h-full"></div>
                      <div onClick={() => rotateTile("bottomRight")}  className=" cursor-pointer w-[174px] h-full"></div>
      </div>
        </div>

     
    </div>
  );
}
