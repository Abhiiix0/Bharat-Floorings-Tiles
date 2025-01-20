import {
  SizeItem,
  useFloorVisualizerStore,
} from "../../store/floorVisualizer.store";
import Image, { StaticImageData } from "next/image";
import FloorImage from "../../components/images/floor/floorCanvas.png";
import FloorImageMiddleDesign from "../../components/images/floor/Mediamodifier-Design.svg";
import { useTilesStore } from "../../store/tiles.store";

export default function RoomPhotoPannel() {
  const floor = useFloorVisualizerStore((state) => state.floor);
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
    <div className="h-[calc(100vh-154px)] flex justify-center items-center p-2">
      <div className="w-[1000px] h-[562px] relative overflow-hidden">
        <Image src={layer} fill alt="" style={{zIndex:9}} className="object-cover" />
        <Image
          src={floor}
          fill
          alt=""
          className="z-1 object-contain absolute"
          // style={{
          //   transform: "perspective(315px) rotateX(78deg) rotateY(0deg)",
          //   top: "104px",
          //   left: "-18px",
          //   scale: "2.1",
          //   imageRendering: "pixelated",
          // }}
          style={{
            transform: `perspective(${CSSProperty?.properties.perspective}px) rotateX(${CSSProperty?.properties.rotateX}deg)`,
            top: `${CSSProperty?.properties.top}px`,
            left: `${CSSProperty?.properties.left}px`,
            scale: `${CSSProperty?.properties.scale}`,
            imageRendering: "pixelated",
          }}
          unoptimized
        />
        {/* <Image
          src={FloorImageMiddleDesign}
          fill
          alt=""
          className="z-1 object-contain absolute"
          style={{
            transform: "perspective(315px) rotateX(84deg)",
            top: "72px",
            left: "-18px",
            scale: "3.3",
            imageRendering: "pixelated",
            backfaceVisibility: "hidden",
          }}
          unoptimized
        /> */}
        {/* <div
          style={{
            position: "absolute",
            top: "72px",
            left: "-18px",
            transform: "perspective(315px) rotateX(84deg) scale(3.3)",
            zIndex: 1,
          }}
          className="object-contain"
        >
          <Image
            className="object-contain"
            src={FloorImageMiddleDesign}
            fill
            alt=""
            unoptimized
          />
        </div> */}
        {/* <div
          className="absolute inset-0  object-contain z-[-1]"
          style={{
            transform: "perspective(182px) rotateX(78deg) rotateY(0deg)",
            top: "171px",
            left: "238px",
            scale: "2.6",
          }}
          dangerouslySetInnerHTML={{ __html: floor }}
        /> */}

        {/* transform: perspective(230px) rotateX(81deg) rotateY(0deg);
    top: 152px;
    left: 243px;
    scale: 2.2; */}
      </div>
    </div>
  );
}
