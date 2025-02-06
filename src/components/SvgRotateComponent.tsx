"use client";

import { TilePosition, useTilesStore } from "./../store/tiles.store";
import { useRef } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { addDataConnectToSvg, addDataConnectToSvgWithGrainEffect } from "../fllor-it-utils";
import grainsEffect from "../../public/images/tiles/grains.png"



interface SvgComponentProps {
  svgString: string;
  height: number;
  width: number;
  position: TilePosition;
  rotation: number;
  color: {
    [id: number]: string;
  };
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

// Example usage within a React component
export default function SvgRotateComponent({
  svgString,
  height,
  width,
  position,
  color,
  rotation,
  onClick,
}: SvgComponentProps) {
  const selectedColor = useTilesStore((state) => state.selectedColor);
  const manipulatedResults = useTilesStore((state) => state.manipulatedResults);
  const setManipulatedResult = useTilesStore(
    (state) => state.setManipulatedResult
  );
  const modifiedSvgString = addDataConnectToSvgWithGrainEffect(
    svgString,
    height,
    width,
    rotation,
    color,
    grainsEffect
  );

  const dragPreviewModifiedSvgString = addDataConnectToSvgWithGrainEffect(
    svgString,
    50,
    50,
    rotation,
    color,
    grainsEffect
  );

  const handleElementClick = (event: React.MouseEvent<HTMLElement>) => {
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

  const [{ isDragging }, drag, preview] = useDrag({
    type: "tiles",
    item: { color, rotation },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);
  drag(ref);

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src={`data:image/svg+xml;base64,${btoa(dragPreviewModifiedSvgString)}`}
      />
      <div ref={ref}>
        <div
          dangerouslySetInnerHTML={{ __html: modifiedSvgString }}
          onClick={handleElementClick}
        />
      </div>
    </>
  );
}
