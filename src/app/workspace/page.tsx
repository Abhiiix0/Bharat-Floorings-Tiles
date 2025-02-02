"use client";
import { Tiles1, Tiles2 } from "../../data/svg";
import { Tile, useFloorStore } from "../../store/floor.store";
import { Room, useFloorVisualizerStore } from "../../store/floorVisualizer.store";
import { useTilesStore } from "../../store/tiles.store";
import {
  addDataConnectToSvg,
  createPngFromGridLayout,
} from "../../fllor-it-utils";
import SideBar from "../../components/floor-visualizer/SideBar"
import { useRouter } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { boorderTilesSvg } from "../../data/borders";
import { useCallback, useEffect, useRef, useState } from "react";
import FloorSecond from "../../components/FloorSecond";
import { useTilesBorderStore } from "../../store/tilesBorder.store";
import RoomPhotoPannel from "../../components/floor-visualizer/RoomPhotoPannel";
import roomImage1 from "../../components/images/roomThumbnails/Sample1.png";
import roomImage5 from "../../components/images/roomThumbnails/Sample5.png";
import roomImage2 from "../../components/images/roomThumbnails/Sample2.png";
import roomImage3 from "../../components/images/roomThumbnails/Sample3.png";
import roomImage4 from "../../components/images/roomThumbnails/Sample4.png";
import roomImage6 from "../../components/images/roomThumbnails/sample6.png";

import roomLayer1 from "../../components/images/roomsLayersCutout/sample1.png";
import roomLayer5 from "../../components/images/roomsLayersCutout/Sample5.png";
import roomLayer2 from "../../components/images/roomsLayersCutout/sample2.png";
import roomLayer3 from "../../components/images/roomsLayersCutout/sample3.png";
import roomLayer4 from "../../components/images/roomsLayersCutout/Sample4.png";
import roomLayer6 from "../../components/images/roomsLayersCutout/sample6.png";
import { useComponentStore } from "../../store/component.store";
import ColorPalette from "../../components/ColorPalette";
import SingleTile from "../../components/SingleTile";
import CircleClose from "../../../public/icons/CircleClose"
import CircleRight from "../../../public/icons/CircleRight"
import CircleBack from "../../../public/icons/CircleBack"
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import WorkSpaceSideBar from "./../../components/WorkSpaceSideBar"
import TilesRotatePair from "../../components/TilesRotatePair";
import { toPng } from "html-to-image";
import TilesLayoutModal from "../../components/workshop/TilesLayoutModal"
export default function Home() {
  const router = useRouter();
  const [browser,setBrowser] = useState(false);
  const [tile, settile] = useState(Tiles[1])
  const selectTiles = (data:any) => {
  settile(data)
}
  useEffect(() => {
    selectTiles(Tiles[0])
    setBrowser(true)
  },[])

  const manipulatedResults = useTilesStore((state) => state.manipulatedResults);
  const setTileSize = useTilesStore((state) => state.setTileSize);  
  const setFloorRow = useFloorStore((state) => state.setFloorRow);
  const setFloorColumn = useFloorStore((state) => state.setFloorColumn);
  const showFloor = useFloorStore((state) => state.showFloor);
  const setShowFloor = useFloorStore((state) => state.setShowFloor);
  const isTilesVisualizer = useComponentStore(
    (state) => state.isTilesVisualizer
  );
  const setIsTilesVisualizer = useComponentStore(
    (state) => state.setIsTilesVisualizer
  );

  const calculateGridLayout = useFloorStore(
    (state) => state.calculateGridLayout
  );

  const setFloor = useFloorVisualizerStore((state) => state.setFloor);

  const gridLayout = useFloorStore((state) => state.gridLayout);

  const handleRowChange = useCallback(
    (value: string) => {
      setFloorRow(parseInt(value));
    },
    [setFloorRow]
  );

  const handleColumnChange = useCallback(
    (value: string) => {
      setFloorColumn(parseInt(value));
    },
    [setFloorColumn]
  );

  const borderCorner = useTilesBorderStore((state) => state.borderCorner);
  const borderLeftRight = useTilesBorderStore((state) => state.borderLeftRight);
  const borderTopBottom = useTilesBorderStore((state) => state.borderTopBottom);

  

  const handleButtonClickGrid = (svgString: string, size: string) => {
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
        // svgString: Tiles1,
        svgString: addDataConnectToSvg(
          svgString,
          100,
          100,
          bottomRight.rotation,
          bottomRight.color
        ),
      },
    };


    calculateGridLayout(
      borderSVGs,
      newManupulatedresults
    );
  };
  const divRef = useRef<HTMLDivElement>(null);
  const handleVisualizeClick = async () => {
    if (!gridLayout) return;
    const floorImageUrl = await createPngFromGridLayout(gridLayout, 100, 100, 5);
    setFloor(floorImageUrl);
    setIsTilesVisualizer(true);
  };
  useEffect(() => {
    handleButtonClickGrid(tile?.image, tile?.size)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tile])
  
  const [TileColorPannelBtn, setTileColorPannelBtn] = useState(false)
  const [scale, setScale] = useState(1.7);

  // Handlers to zoom in and out
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3)); // Limit zoom-in to 3x
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5)); // Limit zoom-out to 0.5x
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const width = typeof window !== "undefined" ? window.innerWidth : 0;
  const height = typeof window !== "undefined" ? window.innerHeight : 0;

  const wrapX = useTransform(x, (value) => {
    if (value > width / 2) return -width / 2;
    if (value < -width / 2) return width / 2;
    return value;
  });

  const wrapY = useTransform(y, (value) => {
    if (value > height / 2) return -height / 2;
    if (value < -height / 2) return height / 2;
    return value;
  });
  const svgAsDataUri = `data:image/svg+xml;base64,${btoa(tile?.image)}`;
  const [sideBarCloseOpenBtn, setsideBarCloseOpenBtn] = useState(false)

  const [RotateModal, setRotateModal] = useState(false)

 const [tilesLayoutModal, settilesLayoutModal] = useState(false)

  const handleDownloadImage = async () => {
    if (divRef.current) {
      try {
        const dataUrl = await toPng(divRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "Tiles.jpg";
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };
  const [VisulazationModal, setVisulazationModal] = useState(false)
  const handelRoomSideBar = () => {
   if (VisulazationModal) {
    setVisulazationModal(false)
   } else {
    setVisulazationModal(true)
   }
 }
  return (
   

    
    <DndProvider backend={HTML5Backend}>
      {browser &&
        <main className=" bg-yellow-100 font-Inter overflow-hidden relative h-screen">

         
          {/* sidebar button */}
          <Image onClick={()=>setsideBarCloseOpenBtn(true)} src={svgAsDataUri} width={100} height={100} className="filter border-[6px] border-white grayscale contrast-200 cursor-pointer h-16 w-16 absolute top-12 left-0 z-[111]" alt="tile"></Image>
          <WorkSpaceSideBar open={sideBarCloseOpenBtn} selectTiles={selectTiles} close={setsideBarCloseOpenBtn}/>
        
          

          {/* ColorPalate */}
          <div className={`${TileColorPannelBtn ? " block" : " hidden"} transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full bg-gray-400/30 z-[50] `} >
            <div className=" absolute left-[28%] top-4  gap-5 w-[330px] 3xl:w-fit h-fit px-0 overflow-hidden">
              <div className=" bg-white pb-4 h-[450px] 3xl:h-[560px] flex flex-col justify-between">
                
              <div className=" 3xl:hidden border ml-[-2px] mt-[18px]">

                  <SingleTile height={332} width={332} svgString={tile.image} />
              </div>
              <div className=" hidden 3xl:block">

                  <SingleTile height={500} width={500} svgString={tile.image} />
              </div>
              <div className=" mt-0">

            <ColorPalette />
                </div>
                </div>
              <div className=" flex mt-3 3xl:mt-6 gap-3">
              <button   onClick={() => handleButtonClickGrid(tile.image, tile.size)} className="border-[4px] 3xl:border-[5px] h-16 w-16 3xl:h-20 3xl:w-20 rounded-full border-white bg-black flex justify-center items-center">

<CircleRight  color="white" className=""/>
                </button>
                <button className=" border-[4px] 3xl:border-[5px] h-16 w-16 3xl:h-20 3xl:w-20 rounded-full border-white bg-black flex justify-center items-center">

<CircleBack color="white" className=""/>
  </button>
                <button onClick={()=>setTileColorPannelBtn(false)} className=" border-[4px] 3xl:border-[5px] h-16 w-16 3xl:h-20 3xl:w-20 rounded-full border-white bg-black flex justify-center items-center">

              <CircleClose size={38} color="white" className=""/>
                </button>
              </div>
</div>
          </div>

           {/* Rotate modal */}
           <div className={`${RotateModal ? " block" : " hidden"} transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full bg-gray-400/30 z-[50] `} >
           <div className=" absolute left-[28%] top-4  gap-5 w-[342px] flex flex-col justify-between  ">
              <div className=" bg-white">
                
              <TilesRotatePair svgString={tile.image} /> 
             </div>
             
              <div className=" flex mt-2 3xl:mt-6 gap-3">
              <button  onClick={() => handleButtonClickGrid(tile.image, tile.size)}   className="border-[4px] 3xl:border-[5px] h-16 w-16 3xl:h-20 3xl:w-20 rounded-full border-white bg-black flex justify-center items-center">

<CircleRight  color="white" className=""/>
                </button>
                <button className=" border-[4px] 3xl:border-[5px] h-16 w-16 3xl:h-20 3xl:w-20 rounded-full border-white bg-black flex justify-center items-center">

<CircleBack color="white" className=""/>
  </button>
                <button onClick={()=>setRotateModal(false)} className=" border-[4px] 3xl:border-[5px] h-16 w-16 3xl:h-20 3xl:w-20 rounded-full border-white bg-black flex justify-center items-center">

              <CircleClose size={38} color="white" className=""/>
                </button>
              </div>
</div>
          </div>

          {/* bottom bar  */}
          <div className=" h-[100px] shadow-md w-full z-50   absolute bottom-0 left-0">
            <div className=" h-[87px] flex justify-between rounded-md mx-28 bg-white border">
              <div className=" flex items-center gap-[60px] ml-12">
                <button  onClick={()=>setRotateModal(true)}>Rotate</button>
                <button onClick={() => setTileColorPannelBtn(true)}>Colors</button>
                <button onClick={()=>settilesLayoutModal(true)}>Tiles Layout</button>
                <span className=" flex gap-2 items-center">Zoom
                  <button onClick={handleZoomOut} className="  border-2 border-black h-8 w-8 rounded-full flex justify-center items-center ">-</button>
                  <button onClick={handleZoomIn} className=" border-2 border-black h-8 w-8 rounded-full flex justify-center items-center ">+</button>
                </span>
              </div>
              <div className=" h-full flex items-center mr-3">
                <button  onClick={handleDownloadImage} className=" py-4 px-8  ">Save image</button>
                <button onClick={()=>    handelRoomSideBar()} className=" py-4 px-8 border border-black ">Visualise</button>
                <button className=" py-4 px-8 border border-black text-white bg-black">Get a quote</button>
              </div>
 </div>
          </div>
         
            <TilesLayoutModal tile={tile} open={tilesLayoutModal} closeModal={settilesLayoutModal} />

          
          {!isTilesVisualizer && (
           <motion.div
           className="flex items-center justify-center  cursor-grab"
           drag
           whileTap={{ cursor: "grabbing" }}
           dragMomentum={false} // Disable momentum for precise control
           style={{
             x: wrapX,
             y: wrapY,
             scale, // Apply zoom scale
           }} 
         >   
              {showFloor && ( 
                <div ref={divRef} className="">
                <FloorSecond />
                </div>
              )}
              </motion.div>
          )}

          { VisulazationModal &&
            <SideBar rooms={rooms} handleVisualizeClick={handleVisualizeClick} handelRoomVisual={setIsTilesVisualizer} />
        }
       
            <div className={` z-[1002] transition-all grid place-content-center duration-300 ease-in-out h-screen  w-full fixed top-0  bg-red-100 ${isTilesVisualizer ? "right-0" :  " right-[-100%]"}`}>
             
              <RoomPhotoPannel handleVisualizeClick={handleVisualizeClick} handelRoomVisual={setIsTilesVisualizer} />
            </div>
         
        </main>
      }
      </DndProvider>
  );
}

const rooms: Room[] = [
  {
    id: 1,
    image: roomImage1,
    layer: roomLayer1,
    name: "Room 1",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  {
    id: 2,
    image: roomImage5,
    layer: roomLayer5,
    name: "Room 2",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  {
    id: 3,
    image: roomImage2,
    layer: roomLayer2,
    name: "Room 3",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 84,
          left: -48,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  {
    id: 4,
    image: roomImage3,
    layer: roomLayer3,
    name: "Room 4",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 54,
          left: -18,
          perspective: 600,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  {
    id: 4,
    image: roomImage4,
    layer: roomLayer4,
    name: "Room 5",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 54,
          left: -18,
          perspective: 600,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  {
    id: 4,
    image: roomImage6,
    layer: roomLayer6,
    name: "Room 6",
    sizes: [
      {
        size: "10*10",
        properties: {
          top: 104,
          left: -18,
          perspective: 315,
          rotateX: 78,
          scale: 2.1,
        },
      },
      {
        size: "12*12",
        properties: {
          top: 54,
          left: -18,
          perspective: 600,
          rotateX: 78,
          scale: 2.1,
        },
      },
    ],
  },
  // {
  //   id: 5,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   image: roomImage5,
  //   layer: roomLayer1,
  //   name: "Room 5",
  //   sizes: [
  //     {
  //       size: "10*10",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //     {
  //       size: "12*12",
  //       properties: {
  //         top: 104,
  //         left: -18,
  //         perspective: 315,
  //         rotateX: 78,
  //         scale: 2.1,
  //       },
  //     },
  //   ],
  // },
];

const Tiles = [
  {
    id: 0,
    name: "Tiles One",
    image: Tiles1,
    size: "10*10",
  },
  {
    id: 1,
    name: "Tiles Two",
    image: Tiles2,
    size: "12*12",
  },
];
