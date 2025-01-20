import { Tile, useFloorStore } from "./../store/floor.store";
import { useTilesStore } from "./../store/tiles.store";
import React, { useEffect } from "react";
import FloorTilesPair from "./FloorTilesPair";
import FloorBorderTopBottom from "./border/FloorBorderTopBottom";
import FloorBorderCorner from "./border/FloorBorderCorner";
import FloorBorderLeftRight from "./border/FloorBorderLeftRight";
import FloorSecondSvgComponent from "./FloorSecondSvgComponent";

interface FloorSecondProps {
  tileSvgString: string;
  borderCornerSvgString: string;
  borderTopBottomSvgString: string;
  borderSideSvgString: string;
}

export default function FloorSecond() {
  const tiles = useFloorStore((state) => state.tiles);
  const floorColumn = useFloorStore((state) => state.floorColumn);
  const gridLayout = useFloorStore((state) => state.gridLayout);

  return (
    <div className="relative">
      {/* <div className="absolute left-[-25px]">
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
      </div> */}

      {/* <div className={`grid  grid-cols-5`}>
        {tiles.map((tiles, index) => (
          <div key={index}>
            <FloorTilesPair
              index={index}
              svgString={tileSvgString}
              tilesData={tiles}
            />
          </div>
        ))}
      </div> */}

      <div>
        {gridLayout.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((tile, colIndex) => {
              if (tile && "svgString" in tile) {
                return (
                  <FloorSecondSvgComponent
                    key={`${rowIndex}-${colIndex}`}
                    svgString={tile.svgString}
                    height={tile.height} // Adjust the height and width as needed
                    width={tile.width}
                    color={tile.color}
                    rotation={tile.rotation}
                    indexRow={rowIndex}
                    indexCol={colIndex}
                  />
                );
              }
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#f0f0f0",
                  }} // Empty tile placeholder
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* <div className="absolute left-[-25px]">
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
      /> */}
    </div>
  );
}
