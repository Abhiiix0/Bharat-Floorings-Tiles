import { useFloorStore } from "./../store/floor.store";
import React, { useEffect } from "react";
import FloorSecondSvgComponent from "./FloorSecondSvgComponent";

export default function FloorSecond() {
  const gridLayout = useFloorStore((state) => state.gridLayout);

  return (
    <div className="relative">
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
    </div>
  );
}
