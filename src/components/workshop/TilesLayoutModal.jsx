import React from "react";
import { useFloorStore } from "../../store/floor.store";
import {
  addDataConnectToSvg,
  createPngFromGridLayout,
} from "../../fllor-it-utils";
import { useFloorVisualizerStore } from "../../store/floorVisualizer.store";
import { useTilesStore } from "../../store/tiles.store";
import { useTilesBorderStore } from "../../store/tilesBorder.store";
import { boorderTilesSvg } from "../../data/borders";

const TilesLayout = ({ tile, closeModal, open }) => {
  const floorRow = useFloorStore((state) => state.floorRow);
  const floorColumn = useFloorStore((state) => state.floorColumn);
  const setFloorRow = useFloorStore((state) => state.setFloorRow);
  const setFloorColumn = useFloorStore((state) => state.setFloorColumn);

  // function to handel the select
  const handleRowChange = (value) => {
    setFloorRow(parseInt(value));
  };
  const handleColumnChange = (value) => {
    setFloorColumn(parseInt(value));
  };
  const calculateGridLayout = useFloorStore(
    (state) => state.calculateGridLayout
  );
  const manipulatedResults = useTilesStore((state) => state.manipulatedResults);
  const borderLeftRight = useTilesBorderStore((state) => state.borderLeftRight);
  const borderTopBottom = useTilesBorderStore((state) => state.borderTopBottom);
  const borderCorner = useTilesBorderStore((state) => state.borderCorner);
  const setTileSize = useTilesStore((state) => state.setTileSize);
  const setShowFloor = useFloorStore((state) => state.setShowFloor);
  const handleButtonClickGrid = (svgString, size) => {
    setShowFloor(true);

    setTileSize(size);

    const borderSVGs = {
      corner: {
        color: borderCorner.color,
        svgString: boorderTilesSvg.corner,
      },
      top: {
        color: borderLeftRight.color,
        svgString: boorderTilesSvg.topBottom,
      },
      side: {
        color: borderTopBottom.color,
        svgString: boorderTilesSvg.leftRight,
      },
    };

    const { topLeft, topRight, bottomLeft, bottomRight } = manipulatedResults;

    const newManupulatedresults = {
      topLeft: {
        rotation: topLeft.rotation,
        color: topLeft.color,
        // svgString: Tiles1,
        svgString: addDataConnectToSvg(
          svgString,
          100,
          100,
          topLeft.rotation,
          topLeft.color
        ),
      },
      topRight: {
        rotation: topRight.rotation,
        color: topRight.color,
        // svgString: Tiles1,
        svgString: addDataConnectToSvg(
          svgString,
          100,
          100,
          topRight.rotation,
          topRight.color
        ),
      },
      bottomLeft: {
        rotation: bottomLeft.rotation,
        color: bottomLeft.color,
        // svgString: Tiles1,
        svgString: addDataConnectToSvg(
          svgString,
          100,
          100,
          bottomLeft.rotation,
          bottomLeft.color
        ),
      },
      bottomRight: {
        rotation: bottomRight.rotation,
        color: bottomRight.color,
        svgString: addDataConnectToSvg(
          svgString,
          100,
          100,
          bottomRight.rotation,
          bottomRight.color
        ),
      },
    };
    calculateGridLayout(borderSVGs, newManupulatedresults);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-black/50 ${
        open ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className=" rounded-lg relative bg-white w-52 h-fit p-4 flex flex-col gap-2">
        <div className=" flex gap-1 flex-col">
          <label htmlFor="rows" className=" text-sm">
            Rows
          </label>
          <select
            value={floorRow.toString()}
            onChange={(e) => handleRowChange(e?.target?.value)}
            name="Rows"
            className=" border-2 px-2 py-2 w-full rounded"
            id="rows"
          >
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className=" flex gap-1 flex-col">
          <label className=" text-sm" htmlFor="Columns">
            Columns
          </label>
          <select
            value={floorColumn}
            onChange={(e) => handleColumnChange(e?.target?.value)}
            name="Columns"
            className=" border-2 p-2 w-full rounded"
            id="Columns"
          >
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className=" flex gap-2 mt-1">
          <button
            className=" h-10 w-full rounded bg-gray-400 hover:bg-gray-500 text-white"
            onClick={() => closeModal(false)}
          >
            close
          </button>
          <button
            onClick={() => handleButtonClickGrid(tile.image, tile.size)}
            className=" h-10 w-full rounded bg-blue-400 hover:bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TilesLayout;
