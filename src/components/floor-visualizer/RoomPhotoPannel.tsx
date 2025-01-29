import {
  SizeItem,
  useFloorVisualizerStore,
} from "../../store/floorVisualizer.store";
import Image, { StaticImageData } from "next/image";
import FloorImage from "../../components/images/floor/floorCanvas.png";
import FloorImageMiddleDesign from "../../components/images/floor/Mediamodifier-Design.svg";
import { useTilesStore } from "../../store/tiles.store";
import CircleClose from "../../../public/icons/CircleClose";
import { LuImageDown } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";
import FloorSecondSvgComponent from "../FloorSecondSvgComponent";
import { useFloorStore } from "../../store/floor.store";
import tilesfloors from "./../../app/workspace/tiles.jpg"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
export default function RoomPhotoPannel({handelRoomVisual, handleVisualizeClick}) {
  const floor = useFloorVisualizerStore((state) => state.floor); // image
  const selectedRoom = useFloorVisualizerStore((state) => state.selectedRoom);
  const gridLayout = useFloorStore((state) => state.gridLayout); // gris
  const tileSize = useTilesStore((state) => state.tileSize);
  const { layer, sizes } = selectedRoom;

  function filterBySize(
    sizes: SizeItem[],
    targetSize: string
  ): SizeItem | undefined {
    return sizes.find((sizeItem) => sizeItem.size === targetSize);
  }

  const CSSProperty = filterBySize(sizes, tileSize);
  // console.log("CSSProperty", CSSProperty)
  const floorRow = useFloorStore((state) => state.floorRow);
  const floorColumn = useFloorStore((state) => state.floorColumn);
  const handleRowChange = (value) => {
    console.log("row", value)
    setFloorRow(parseInt(value));
    // handleVisualizeClick()
  }
  const handleColumnChange = (value) => {
    setFloorColumn(parseInt(value));
    // handleVisualizeClick()
  }
  const setFloorColumn = useFloorStore((state) => state.setFloorColumn);
  const setFloorRow = useFloorStore((state) => state.setFloorRow);
  return (
    <div className="h-[calc(100vh] flex justify-center items-center p-2">
      <div className="w-[1000px] h-[562px] relative overflow-hidden">
        <div className=" absolute top-6 z-[1002] flex gap-2 items-center right-6">
        {/* <div className="flex items-center justify-center gap-10 relative z-[2008]">
        <select
              value={floorRow.toString()}
              onChange={(e)=>handleRowChange(e.target.value)}
                      // onValueChange={handleRowChange}
                    >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
                    </select>
                    <Select
                      value={floorColumn.toString()}
                      onValueChange={handleColumnChange}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Column</SelectLabel>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="11">11</SelectItem>
                          <SelectItem value="12">12</SelectItem>
                          <SelectItem value="13">13</SelectItem>
                          <SelectItem value="14">14</SelectItem>
                          <SelectItem value="15">15</SelectItem>
                          <SelectItem value="16">16</SelectItem>
                          <SelectItem value="30">30</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div> */}
          <div onClick={() => handelRoomVisual()} className=" cursor-pointer rounded-full h-16 w-16 border-[5px] grid place-content-center border-white bg-black hover:opacity-100 transition-opacity duration-200 ease-in-out opacity-40"><FiUpload  size={24} color="white" /></div>
          <div onClick={()=>handelRoomVisual()} className=" cursor-pointer rounded-full h-16 w-16 border-[5px] grid place-content-center border-white bg-black hover:opacity-100 transition-opacity duration-200 ease-in-out opacity-40"><LuImageDown size={24} color="white" /></div>
          <div onClick={()=>handelRoomVisual()} className=" cursor-pointer rounded-full h-16 w-16 border-[5px] grid place-content-center border-white bg-black hover:opacity-100 transition-opacity duration-200 ease-in-out opacity-40"><CircleClose size={24} color="white" className=""/></div>
        </div>
        <Image src={layer} fill alt="" style={{zIndex:9}} className="object-cover  " />
        <Image
          src={floor}
          fill
          alt=""
          className="z-1  object-contain absolute"
          style={{
            transform: `perspective(${CSSProperty?.properties.perspective}px) rotateX(${CSSProperty?.properties.rotateX}deg) translateZ(0)`,
            top: `${CSSProperty?.properties.top}px`,
            left: `${CSSProperty?.properties.left}px`,
            scale: `${CSSProperty?.properties.scale}`,
            backfaceVisibility: "hidden",
            willChange: "transform",
            imageRendering:"crisp-edges", // Fixes pixelation for images
            // imageRendering: "pixelated",
            // imageRendering: "auto", // Fixes pixelation for images
          }}
          unoptimized
        />
         
      </div>
    </div>
  );
}
