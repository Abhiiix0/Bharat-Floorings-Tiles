import {
  SizeItem,
  useFloorVisualizerStore,
} from "../../store/floorVisualizer.store";
import Image from "next/image";
import { useTilesStore } from "../../store/tiles.store";
import CircleClose from "../../../public/icons/CircleClose";
import { LuImageDown } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";
export default function RoomPhotoPannel({ handelRoomVisual }) {
  const setFloor = useFloorVisualizerStore((state) => state.setFloor);
  const floor = useFloorVisualizerStore((state) => state.floor); // image
  const selectedRoom = useFloorVisualizerStore((state) => state.selectedRoom);
  const tileSize = useTilesStore((state) => state.tileSize);
  const { layer, sizes } = selectedRoom;

  function filterBySize(
    sizes: SizeItem[],
    targetSize: string
  ): SizeItem | undefined {
    return sizes.find((sizeItem) => sizeItem.size === targetSize);
  }

  const CSSProperty = filterBySize(sizes, tileSize);
  return (
    <div className="h-[calc(100vh] flex justify-center items-center p-2">
      <div className="w-[1000px] h-[562px] relative overflow-hidden">
      {
        floor ?  <>
        <div className=" absolute top-6 z-[1002] flex gap-2 items-center right-6">
          <div onClick={() => handelRoomVisual()} className=" cursor-pointer rounded-full h-16 w-16 border-[5px] grid place-content-center border-white bg-black hover:opacity-100 transition-opacity duration-200 ease-in-out opacity-40"><FiUpload  size={24} color="white" /></div>
          <div onClick={()=>handelRoomVisual()} className=" cursor-pointer rounded-full h-16 w-16 border-[5px] grid place-content-center border-white bg-black hover:opacity-100 transition-opacity duration-200 ease-in-out opacity-40"><LuImageDown size={24} color="white" /></div>
              <div onClick={() => { handelRoomVisual(false)}} className=" cursor-pointer rounded-full h-16 w-16 border-[5px] grid place-content-center border-white bg-black hover:opacity-100 transition-opacity duration-200 ease-in-out opacity-40"><CircleClose size={24} color="white" className=""/></div>
        </div>
        <Image src={layer} fill alt="layer" style={{zIndex:9}} className="object-cover  " />
        <Image
          src={floor}
          fill
          alt="floor"
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
        />
         
        </> :
        <div className="flex items-center animate-pulse justify-center w-full h-[562px] bg-gray-300 rounded-sm dark:bg-gray-300">
        <svg className="w-40 h-30 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              
    </div>
     
      }
     </div> 
    </div>
  );
}
