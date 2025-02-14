import { useFloorStore } from "./../store/floor.store";
import React, { useEffect } from "react";
import FloorSecondSvgComponent from "./FloorSecondSvgComponent";
import grainEffect from "../../public/images/tiles/grains.png"
export default function FloorSecond() {
  const gridLayout = useFloorStore((state) => state.gridLayout);

  return (
    <div className="relative">
      <div className="">
        {gridLayout.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((tile, colIndex) => {
              if (tile && "svgString" in tile) {
                return (
                  <div  key={`${rowIndex}-${colIndex}-${JSON.stringify(tile.color)}`} className="relative" >

                  <FloorSecondSvgComponent  
                  svgString={tile.svgString}
                  height={tile.height} 
                  width={tile.width}
                  color={tile.color}
                  rotation={tile.rotation}
                  indexRow={rowIndex}
                  indexCol={colIndex}
                    />
                    
                     {/* Global Grain Effect Overlay */}
      <div
        className="absolute top-0 left-0 w-full opacity-60 h-full "
        style={{
          backgroundImage: `url('${grainEffect?.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity",
          zIndex: 10,
        }}/>
                    
                  </div>
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
