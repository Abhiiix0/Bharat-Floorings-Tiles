"use client";
import { Tiles1, Tiles2 } from "../../data/svg";
import {  useFloorStore } from "../../store/floor.store";
import { useFloorVisualizerStore } from "../../store/floorVisualizer.store";
import { useTilesStore } from "../../store/tiles.store";
import {
  addDataConnectToSvg,
  addDataConnectToSvgWithGrainEffect,
  createPngFromGridLayout,
} from "../../fllor-it-utils";
import grainsEffect from "../../../public/images/tiles/grains.png"
import SideBar from "../../components/floor-visualizer/SideBar"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCallback, useEffect, useRef, useState } from "react";
import FloorSecond from "../../components/FloorSecond";
import { useTilesBorderStore } from "../../store/tilesBorder.store";
import RoomPhotoPannel from "../../components/floor-visualizer/RoomPhotoPannel";

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
import Remix from "../../../public/icons/remix";
import VisualiseIcon from "../../../public/icons/VisualiseIcon";
import RotateIcon from "../../../public/icons/RotateIcon"
import QuoteIcon from "../../../public/icons/QuoteIcon"
import { LuImageDown } from "react-icons/lu";
import { Modal, Switch } from "antd";
import GetAQuery from "../../components/GetAQuery";
import BorderTilesPair from "../../components/border/BorderTilesPair";
import {useShallow} from "zustand/shallow"
export default function Home() {
  const [borderHide, setborderHide] = useState(true)
  const [browser,setBrowser] = useState(false);
  const [tile, settile] = useState(Tiles[1])
  const [sideBarCloseOpenBtn, setsideBarCloseOpenBtn] = useState(false)
  const [RotateModal, setRotateModal] = useState(false)
 const [tilesLayoutModal, settilesLayoutModal] = useState(false)
  const [VisulazationModal, setVisulazationModal] = useState(false)
  const [borderColorModal, setborderColorModal] = useState(false)
  const [Inquery, setInquery] = useState(true);

  useEffect(() => {
    setBrowser(true)
    selectTiles(Tiles[1])
  }, [])

  
  const manipulatedResults = useTilesStore((state) => state.manipulatedResults);
  const setTileSize = useTilesStore((state) => state.setTileSize);  

  const isTilesVisualizer = useComponentStore(
    (state) => state.isTilesVisualizer
  );
  const setIsTilesVisualizer = useComponentStore(
    (state) => state.setIsTilesVisualizer
  );

  const setFloor = useFloorVisualizerStore((state) => state.setFloor);
  const borderCorner = useTilesBorderStore((state) => state.borderCorner);
  const borderLeftRight = useTilesBorderStore((state) => state.borderLeftRight);
  const borderTopBottom = useTilesBorderStore((state) => state.borderTopBottom);
  
  const { showFloor, setShowFloor, calculateGridLayout, gridLayout,borderTilesCorner, borderTilesTopBottom,borderTilesLeftRight } = useFloorStore(
    useShallow((state) => ({
      showFloor: state.showFloor,
      setShowFloor: state.setShowFloor,
      calculateGridLayout: state.calculateGridLayout,
      gridLayout: state.gridLayout,
      borderTilesCorner: state.corner,
      borderTilesTopBottom: state.topBottom,
      borderTilesLeftRight: state.leftRight
    }))
  );


  const handleButtonClickGrid = useCallback((svgString: string, size: string) => {
    setShowFloor(true);

    setTileSize(size);

    const borderSVGs = {
      corner: {
        color: borderCorner.color,
        svgString: borderTilesCorner,
      },
      top: {
        color: borderTopBottom.color,
        svgString: borderTilesTopBottom,
      },
      side: {
        color: borderLeftRight.color,
        svgString: borderTilesLeftRight,
      },
    };

    const { topLeft, topRight, bottomLeft, bottomRight } = manipulatedResults;

    const newManupulatedresults = {
      topLeft: {
        rotation: topLeft.rotation,
        color: topLeft.color,
        svgString: addDataConnectToSvgWithGrainEffect(
          svgString,
          100,
          100,
          topLeft.rotation,
          topLeft.color,
          grainsEffect
        ),
      },
      topRight: {
        rotation: topRight.rotation,
        color: topRight.color,
        // svgString: Tiles1,
        svgString: addDataConnectToSvgWithGrainEffect(
          svgString,
          100,
          100,
          topRight.rotation,
          topRight.color,
          grainsEffect
        ),
      },
      bottomLeft: {
        rotation: bottomLeft.rotation,
        color: bottomLeft.color,
        // svgString: Tiles1,
        svgString: addDataConnectToSvgWithGrainEffect(
          svgString,
          100,
          100,
          bottomLeft.rotation,
          bottomLeft.color,
          grainsEffect
        ),
      },
      bottomRight: {
        rotation: bottomRight.rotation,
        color: bottomRight.color,
        // svgString: Tiles1,
        svgString: addDataConnectToSvgWithGrainEffect(
          svgString,
          100,
          100,
          bottomRight.rotation,
          bottomRight.color,
          grainsEffect
        ),
      },
    };


    calculateGridLayout(
      borderSVGs,
      newManupulatedresults
    )
  },
    [borderCorner, borderLeftRight, borderTopBottom, manipulatedResults, setShowFloor, setTileSize, calculateGridLayout]
  );
  const divRef = useRef(null);
  const handleVisualizeClick = async () => {
    if (!gridLayout) return;
    const floorImageUrl = await createPngFromGridLayout(gridLayout, 100, 100, 5);
    setFloor(floorImageUrl);
    setIsTilesVisualizer(true);
    setVisulazationModal(false)
  };
  useEffect(() => {
    handleButtonClickGrid(tile?.image, tile?.size)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tile, borderHide, borderTilesCorner])
  
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
 

  
  const handelOpenClose = (value, setValue) => {
    if (value) {
      setValue(false)
    }else{
      setValue(true)
    }
  }
  const onChange = (checked) => {
    setborderHide(checked)
  };
  const selectTiles = (data:any) => {
    settile(data)
    }
  return (
   

    
    <DndProvider backend={HTML5Backend}>
      {browser &&
        <main className=" bg-yellow-100 font-Inter overflow-hidden relative h-screen">

         
          {/* sidebar button */}
          <Image onClick={() => setsideBarCloseOpenBtn(true)} src={svgAsDataUri} width={100} height={100} className="filter border-[6px] border-white grayscale contrast-200 cursor-pointer h-12 w-12 md:h-16 md:w-16 absolute top-5 left-5 md:top-12 md:left-0 z-[111]" alt="tile"></Image>
          <span className="z-[110] text-white absolute top-6 right-5 md:hidden bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="24" fill="white"/>
  <line x1="12" y1="31.5" x2="36" y2="31.5" stroke="#2A2523"/>
  <line x1="12" y1="24.5" x2="36" y2="24.5" stroke="#2A2523"/>
  <line x1="12" y1="17.5" x2="36" y2="17.5" stroke="#2A2523"/>
</svg>
            </span>
          <WorkSpaceSideBar open={sideBarCloseOpenBtn} selectTiles={selectTiles} close={setsideBarCloseOpenBtn} />
          

          {/* border color */}
          <Modal open={borderColorModal} onCancel={() => setborderColorModal(!borderColorModal)}>
            <div className=" scale-150 ml-[50px]   mb-[100px]">

          <BorderTilesPair
                    svgStringCorner={borderTilesCorner}
                    svgStringTopBottom={ borderTilesTopBottom}
                    svgStringLeftRight={borderTilesLeftRight}
                    />
                    </div>
             <ColorPalette />
        </Modal>
          

          {/* ColorPalate */}
          <div   className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 bg-black/50 ${
        TileColorPannelBtn ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}>
          
            <div className=" gap-5 w-fit  rounded-md h-fit px-0 overflow-hidden">
              <div className=" bg-[#2A2523] md:bg-white pb-3 p-2  rounded-md  h-fit flex flex-col justify-between">
              <div className=" 3xl:hidden">

<SingleTile height={250} width={250} svgString={tile.image} />
</div>
              <div className="hidden 3xl:block">

                  <SingleTile height={332} width={332} svgString={tile.image} />
              </div>
              <div className=" mt-1 relative">

                  <ColorPalette />
                  <button onClick={() => handleButtonClickGrid(tile.image, tile.size)} className=" bg-blue-400 absolute md:hidden bottom-0 right-2 z-[150] px-2 py-[2px] text-[11px] rounded-sm text-white">Save</button>
                </div>
                </div>
              <div className=" hidden md:flex mt-2 3xl:mt-6 gap-3">
              <button   onClick={() => handleButtonClickGrid(tile.image, tile.size)} className="border-[4px] 3xl:border-[5px] h-12 w-12 3xl:h-20 3xl:w-20 rounded-full border-white transition-all duration-200 ease-in-out hover:bg-[#35502F] bg-[#2A2523] flex justify-center items-center">

<CircleRight  color="white"  className=" h-6 w-6 3xl:h-9 3xl:w-9"/>
                </button>
                <button onClick={()=>setTileColorPannelBtn(false)} className=" border-[4px] 3xl:border-[5px] h-12 w-12 3xl:h-20 3xl:w-20 rounded-full border-white transition-all duration-200 ease-in-out hover:bg-black bg-[#2A2523] flex justify-center items-center">

              <CircleClose color="white" className=" h-6 w-6 3xl:h-9 3xl:w-9"/>
                </button>
              </div>
            </div>
          </div>

          {/* Rotate modal */}
          <div   className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 bg-black/50 ${
        RotateModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}>    
           <div className="gap-5 w-fit  rounded-md flex flex-col justify-between  ">
              <div className=" bg-white rounded-md p-2">
              <TilesRotatePair svgString={tile.image} /> 
             </div>
              <div className=" flex mt-2 3xl:mt-6 gap-3">
              <button   onClick={() => handleButtonClickGrid(tile.image, tile.size)} className="border-[4px] 3xl:border-[5px] h-12 w-12 3xl:h-20 3xl:w-20 rounded-full border-white transition-all duration-200 ease-in-out hover:bg-[#35502F] bg-[#2A2523] flex justify-center items-center">
<CircleRight  color="white"  className=" h-6 w-6 3xl:h-9 3xl:w-9"/>
                </button>
                <button onClick={()=>setRotateModal(false)} className=" border-[4px] 3xl:border-[5px] h-12 w-12 3xl:h-20 3xl:w-20 rounded-full border-white transition-all duration-200 ease-in-out hover:bg-black bg-[#2A2523] flex justify-center items-center">
              <CircleClose color="white" className=" h-6 w-6 3xl:h-9 3xl:w-9"/>
                </button>
              </div>
</div>
          </div>

          {/* bottom bar  */}
          <div className=" h-[100px] shadow-md w-full z-[150] lg:z-[126]   absolute bottom-0 left-0">
            <div className=" h-full xl:h-[87px] flex justify-between xl:rounded-md xl:mx-28 bg-white border">
              <div className=" flex items-center gap-5 lg:gap-9 xl:gap-[60px] ml-5 lg:ml-12">
                <button className=" "  onClick={()=>handelOpenClose(RotateModal, setRotateModal)}><RotateIcon size={31} color={ RotateModal ? "black" : "gray"} className=" lg:hidden "/> <span className="hidden lg:block">Rotate</span></button>
                <button className=" " onClick={() => handelOpenClose(TileColorPannelBtn, setTileColorPannelBtn)}><Remix className=" lg:hidden " color={TileColorPannelBtn ? "black" : "gray"} size={44} /> <span className="hidden lg:block">Colors</span></button>
                <button className=" hidden md:block" onClick={() => setborderColorModal(!borderColorModal)}><Remix className=" lg:hidden " color={ TileColorPannelBtn ? "black" : "gray"}  size={44} /> <span className="hidden lg:block">Border Colors</span></button>
                <LuImageDown size={36} color="gray" className=" lg:hidden" />
                <button className=" hidden lg:block" onClick={()=>handelOpenClose( tilesLayoutModal,settilesLayoutModal)}>Tiles Layout</button>
                <span className=" hidden lg:flex gap-2 items-center">Zoom
                  <button onClick={handleZoomOut} className="  border-2 border-black h-8 w-8 rounded-full flex justify-center items-center ">-</button>
                  <button onClick={handleZoomIn} className=" border-2 border-black h-8 w-8 rounded-full flex justify-center items-center ">+</button>
                </span>
              </div>
              <div className=" h-full flex gap-5 lg:gap-0 items-center mr-5 lg:mr-3">
           
                <div className=" flex flex-col mr-4">
<label htmlFor="border">border</label>
              <Switch defaultChecked onChange={onChange} />
                </div>
                {/* <button  onClick={handleDownloadImage} className=" py-4 px-8 Visualise ">Save image</button> */}
                <div className="  border-red-400 relative">
<div className={` ${ borderHide && "hidden"} absolute top-0 left-0 backdrop-blur-sm w-full h-full`}></div>
                <button onClick={() => handelOpenClose(VisulazationModal, setVisulazationModal)} className=" lg:py-4  lg:px-8 lg:border lg:border-black "><VisualiseIcon color={ VisulazationModal ? "black" : "gray"} className=" lg:hidden" size={44} /><span className=" hidden lg:block">Visualise</span></button>
                </div>
                <button onClick={() => { setInquery(true)}} className=" lg:py-4 lg:px-8 lg:border bg-transparent lg:border-black lg:text-white lg:bg-black"><QuoteIcon className=" lg:hidden" color="gray"/> <span className=" hidden lg:block">Get a quote </span></button>
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
                <FloorSecond/>
                </div>
              )}
              </motion.div>
          )}

          { VisulazationModal &&
            <SideBar close={setVisulazationModal} handleVisualizeClick={handleVisualizeClick} handelRoomVisual={setIsTilesVisualizer} />
        }
         
         
       
            <div className={` z-[1002] transition-all grid place-content-center overflow-hidden duration-300 ease-in-out h-screen  w-full fixed top-0  bg-red-100 ${isTilesVisualizer ? "right-0" :  " right-[-100%]"}`}>
              <RoomPhotoPannel  handelRoomVisual={setIsTilesVisualizer} />
            </div>
          {/* <div className=" bg-red-400"> */}
            <GetAQuery
          open={Inquery}
          onClose={setInquery}
          tilsDesign=""
          />
          
          {/* </div> */}
        </main>
      }
      </DndProvider>
  );
}


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
    size: "10*10",
  },
];


