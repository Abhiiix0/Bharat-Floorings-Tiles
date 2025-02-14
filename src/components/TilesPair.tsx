"use client";
import { TilePosition, useTilesStore } from "./../store/tiles.store";
import RotateButton from "./RotationButton";
import SvgComponent from "./SvgComponent";

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
    <div className="h-72 w-72 flex flex-col items-stretch justify-center">
      <div className="flex justify-between">
        <RotateButton onClick={() => rotateTile("topLeft")} />
        <RotateButton onClick={() => rotateTile("topRight")} />
      </div>
      <div>
        <div className="flex justify-center">
          <SvgComponent
            svgString={svgString}
            height={100}
            width={100}
            position="topLeft"
            color={manipulatedResults["topLeft"].color}
            rotation={manipulatedResults["topLeft"].rotation}
            onClick={(event) => handleElementClick(event, "topLeft")}
          />
          <SvgComponent
            svgString={svgString}
            height={100}
            width={100}
            position="topRight"
            color={manipulatedResults["topRight"].color}
            rotation={manipulatedResults["topRight"].rotation}
            onClick={(event) => handleElementClick(event, "topRight")}
          />
        </div>
        <div className="flex justify-center">
          <SvgComponent
            svgString={svgString}
            height={100}
            width={100}
            position="bottomLeft"
            color={manipulatedResults["bottomLeft"].color}
            rotation={manipulatedResults["bottomLeft"].rotation}
            onClick={(event) => handleElementClick(event, "bottomLeft")}
          />
          <SvgComponent
            svgString={svgString}
            height={100}
            width={100}
            position="bottomRight"
            color={manipulatedResults["bottomRight"].color}
            rotation={manipulatedResults["bottomRight"].rotation}
            onClick={(event) => handleElementClick(event, "bottomRight")}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <RotateButton onClick={() => rotateTile("bottomLeft")} />
        <RotateButton onClick={() => rotateTile("bottomRight")} />
      </div>
    </div>
  );
}
