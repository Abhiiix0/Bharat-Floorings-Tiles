"use client";
import BorderTilesPair from "../../components/border/BorderTilesPair";
// import ColorPalette from "../../components/ColorPalett.js";
import Floor from "../../components/Floor";
import TilesPair from "../../components/TilesPair";
import { Button } from "../../components/ui/button";
import { Tiles1, Tiles2 } from "../../data/svg";
import { Tile, useFloorStore } from "../../store/floor.store";
import { Room, useFloorVisualizerStore } from "../../store/floorVisualizer.store";
import { useTilesStore } from "../../store/tiles.store";
import {
  addDataConnectToSvg,
  createMainFloorCanvas,
  createMainFloorSvg,
  createPngFromGridLayout,
} from "../../fllor-it-utils";
import { useRouter } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { boorderTilesSvg } from "../../data/borders";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useCallback, useEffect, useState } from "react";
import FloorSecond from "../../components/FloorSecond";
import { useTilesBorderStore } from "../../store/tilesBorder.store";
import TopBar from "../../components/floor-visualizer/TopBar";
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
export default function Home() {
  const router = useRouter();
  const [browser,setBrowser] = useState(false);

  const tile = Tiles[0];

  useEffect(()=>{
    setBrowser(true)
  },[])

  const manipulatedResults = useTilesStore((state) => state.manipulatedResults);
  const setTileSize = useTilesStore((state) => state.setTileSize);
  const setTiles = useFloorStore((state) => state.setTiles);
  

  const floorRow = useFloorStore((state) => state.floorRow);
  const floorColumn = useFloorStore((state) => state.floorColumn);
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

  // const handleButtonClick = () => {
  //   setShowFloor(true);

  //   const initialTiles: Tile[] = [];
  //   const totalCell = floorRow * floorColumn;

  //   for (let i = 0; i < 25; i++) {
  //     initialTiles.push({
  //       topLeft: {
  //         rotation: manipulatedResults.topLeft.rotation,
  //         color: manipulatedResults.topLeft.color,
  //       },
  //       topRight: {
  //         rotation: manipulatedResults.topRight.rotation,
  //         color: manipulatedResults.topRight.color,
  //       },
  //       bottomLeft: {
  //         rotation: manipulatedResults.bottomLeft.rotation,
  //         color: manipulatedResults.bottomLeft.color,
  //       },
  //       bottomRight: {
  //         rotation: manipulatedResults.bottomRight.rotation,
  //         color: manipulatedResults.bottomRight.color,
  //       },
  //     });
  //   }

  //   setTiles(initialTiles);
  // };

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

    // console.log("floorRowPage", floorRow);
    // console.log("floorColumnPage", floorColumn);

    calculateGridLayout(
      borderSVGs,
      newManupulatedresults
      // floorRow,
      // floorColumn
    );
  };

  const handleVisualizeClick = async () => {
    const tiles = useFloorStore.getState().tiles;
    const tileSize = 106; // Define the tile size
    const gridSize = 5; // Define the grid size
    const width = 50; // Define the width of individual tiles
    const height = 50; // Define the height of individual tiles

    // const floorImageUrl = await createMainFloorCanvas(
    //   Tiles1,
    //   tiles,
    //   tileSize,
    //   gridSize,
    //   width,
    //   height
    // );

    // const floorImageUrl = await createMainFloorSvg(
    //   Tiles1,
    //   tiles,
    //   tileSize,
    //   gridSize,
    //   width,
    //   height
    // );

    if (!gridLayout) return;

    const floorImageUrl = await createPngFromGridLayout(gridLayout, 100, 100);

    setFloor(floorImageUrl);

    setIsTilesVisualizer(true);
    // router.push("/floor-visualizer");
  };
  useEffect(() => {
    handleButtonClickGrid(tile.image, tile.size)
  
  
  }, [])
  
  const [TileColorPannelBtn, setTileColorPannelBtn] = useState(false)
  return (
    <DndProvider backend={HTML5Backend}>
      {browser &&
        <main className=" bg-yellow-100 relative h-screen">

          <div className={`${TileColorPannelBtn ? " opacity-100" : " opacity-0"} absolute top-0 left-0 w-full h-full bg-gray-400/30 z-[50] `} >
            <div className=" absolute left-[28%] gap-5 w-fit h-fit px-0 overflow-hidden">
              <div className=" bg-white pb-4 h-[560px] flex flex-col justify-between">
                
             
              <div>

                  <SingleTile height={500} width={500} svgString={tile.image} />
              </div>
              <div className=" mt-0">

            <ColorPalette />
                </div>
                </div>
              <div className=" flex mt-6 gap-3">
              <button className=" border-[5px] h-20 w-20 rounded-full border-white bg-black flex justify-center items-center">

<CircleRight color="white" className=""/>
                </button>
                <button className=" border-[5px] h-20 w-20 rounded-full border-white bg-black flex justify-center items-center">

<CircleBack color="white" className=""/>
  </button>
                <button onClick={()=>setTileColorPannelBtn(false)} className=" border-[5px] h-20 w-20 rounded-full border-white bg-black flex justify-center items-center">

              <CircleClose size={38} color="white" className=""/>
                </button>
              </div>
</div>
          </div>

          {/* bottom bar  */}
          <div className=" h-[100px] w-full z-50   absolute bottom-0 left-0">
            <div className=" h-[87px] flex justify-between rounded-md mx-28 bg-white border">
              <div className=" flex items-center gap-[60px] ml-12">
                <button>Rotate</button>
                <button onClick={()=>setTileColorPannelBtn(true)}>Colors</button>
                <span>Zoom</span>
              </div>
              <div className=" h-full flex items-center mr-3">
                <button  className=" py-4 px-8  ">Save image</button>
                <button className=" py-4 px-8 border border-black ">Visualise</button>
                <button className=" py-4 px-8 border border-black text-white bg-black">Get a quote</button>
              </div>
 </div>
          </div>
          {!isTilesVisualizer && (
            <div className="flex relative z-10 gap-10">
              {/* <div>
                <ColorPalette />
                <div className="flex flex-col justify-center">
                  <TilesPair svgString={tile.image} />
                  <Button
                    onClick={() => handleButtonClickGrid(tile.image, tile.size)}
                    variant="outline"
                  >
                    Lay the Tiles
                  </Button>
                  <BorderTilesPair
                    svgStringCorner={boorderTilesSvg.corner}
                    svgStringTopBottom={boorderTilesSvg.topBottom}
                    svgStringLeftRight={boorderTilesSvg.leftRight}
                  />
                </div>
              </div> */}
              {showFloor && (
                <div className="flex relative z-10 flex-col ite  w-full items-center justify-center gap-10">
                  {/* <div className="flex items-center justify-center gap-10">
                    <Select
                      value={floorRow.toString()}
                      onValueChange={handleRowChange}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select rows" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Row</SelectLabel>
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
                  {/* <Floor
                tileSvgString={Tiles1}
                borderCornerSvgString={boorderTilesSvg.corner}
                borderTopBottomSvgString={boorderTilesSvg.topBottom}
                borderSideSvgString={boorderTilesSvg.leftRight}
              /> */}
                  <FloorSecond />
                  {/* <Button onClick={handleVisualizeClick} variant="outline">
                    Visualize
                  </Button> */}
                </div>
              )}
            </div>
          )}

          {isTilesVisualizer && (
            <div>
              <TopBar rooms={rooms} />
              <RoomPhotoPannel />
            </div>
          )}
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
