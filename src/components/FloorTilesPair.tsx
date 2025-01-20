import React from "react";
import FloorSvgComponent from "./FloorSvgComponent";
import { TilePosition } from "./../store/tiles.store";

interface TilesPairProps {
  svgString: string;
  tilesData: Record<
    TilePosition,
    {
      rotation: number;
      color: { [id: number]: string };
    }
  >;
  index: number;
}

export default function FloorTilesPair({
  svgString,
  tilesData,
  index,
}: TilesPairProps) {
  return (
    <div>
      <div className="flex justify-center">
        <FloorSvgComponent
          svgString={svgString}
          height={50}
          width={50}
          color={tilesData["topLeft"].color}
          rotation={tilesData["topLeft"].rotation}
          index={index}
          position={"topLeft"}
        />
        <FloorSvgComponent
          svgString={svgString}
          height={50}
          width={50}
          color={tilesData["topRight"].color}
          rotation={tilesData["topRight"].rotation}
          index={index}
          position={"topRight"}
        />
      </div>
      <div className="flex justify-center">
        <FloorSvgComponent
          svgString={svgString}
          height={50}
          width={50}
          color={tilesData["bottomLeft"].color}
          rotation={tilesData["bottomLeft"].rotation}
          index={index}
          position={"bottomLeft"}
        />
        <FloorSvgComponent
          svgString={svgString}
          height={50}
          width={50}
          color={tilesData["bottomRight"].color}
          rotation={tilesData["bottomRight"].rotation}
          index={index}
          position={"bottomRight"}
        />
      </div>
    </div>
  );
}
