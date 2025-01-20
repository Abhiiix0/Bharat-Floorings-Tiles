import { Tile, useFloorStore } from "./../store/floor.store";
import { useTilesStore } from "./../store/tiles.store";
import React, { useEffect } from "react";
import FloorTilesPair from "./FloorTilesPair";
import FloorBorderTopBottom from "./border/FloorBorderTopBottom";
import FloorBorderCorner from "./border/FloorBorderCorner";
import FloorBorderLeftRight from "./border/FloorBorderLeftRight";

interface FloorProps {
  tileSvgString: string;
  borderCornerSvgString: string;
  borderTopBottomSvgString: string;
  borderSideSvgString: string;
}

export default function Floor({
  tileSvgString,
  borderCornerSvgString,
  borderTopBottomSvgString,
  borderSideSvgString,
}: FloorProps) {
  const tiles = useFloorStore((state) => state.tiles);
  const floorColumn = useFloorStore((state) => state.floorColumn);

  return (
    <div className="relative">
      <div className="absolute left-[-25px]">
        <FloorBorderCorner
          svgString={borderCornerSvgString}
          rotation={0}
          height={25}
          width={25}
        />
      </div>

      <div className="absolute right-[-25px]">
        <FloorBorderCorner
          svgString={borderCornerSvgString}
          rotation={90}
          height={25}
          width={25}
        />
      </div>
      <FloorBorderTopBottom
        svgString={borderTopBottomSvgString}
        rotation={0}
        height={25}
        width={50}
      />

      <div className="absolute left-[-25px]">
        <FloorBorderLeftRight
          svgString={borderSideSvgString}
          rotation={0}
          height={50}
          width={25}
        />
      </div>

      <div className="absolute right-[-25px]">
        <FloorBorderLeftRight
          svgString={borderSideSvgString}
          rotation={180}
          height={50}
          width={25}
        />
      </div>

      <div className={`grid  grid-cols-5`}>
        {tiles.map((tiles, index) => (
          <div key={index}>
            <FloorTilesPair
              index={index}
              svgString={tileSvgString}
              tilesData={tiles}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-[-25px]">
        <FloorBorderCorner
          svgString={borderCornerSvgString}
          rotation={270}
          height={25}
          width={25}
        />
      </div>

      <div className="absolute right-[-25px]">
        <FloorBorderCorner
          svgString={borderCornerSvgString}
          rotation={180}
          height={25}
          width={25}
        />
      </div>

      <FloorBorderTopBottom
        svgString={borderTopBottomSvgString}
        rotation={180}
        height={25}
        width={50}
      />
    </div>
  );
}
