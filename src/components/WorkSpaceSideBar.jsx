"use client";
import React, { useState } from "react";
import { TilesData } from "./../data/TilesData.js";
import Image from "next/image.js";
import cornerT from "../../public/bordersSvg/Tile1-Corner.svg";
import cornerlr from "../../public/bordersSvg/Tile1-Horizontal.svg";
import cornerTb from "../../public/bordersSvg/Tile1-Vertical.svg";
import corner2T from "../../public/bordersSvg/Tile2-Corner.svg";
import corner2lr from "../../public/bordersSvg/Tile2-Horizontal.svg";
import corner2Tb from "../../public/bordersSvg/Tile2-Vertical.svg";
import { useFloorStore } from "../store/floor.store";
const borders = [
  {
    thumbnail: cornerT,
    tilesPath: {
      corner: "/bordersSvg/Tile1-Corner.svg",
      TopBottom: "/bordersSvg/Tile1-Vertical.svg",
      LeftRight: "/bordersSvg/Tile1-Horizontal.svg",
    },
  },
  {
    thumbnail: cornerlr,
    tilesPath: {
      corner: "/bordersSvg/Tile1-Corner.svg",
      TopBottom: "/bordersSvg/Tile1-Vertical.svg",
      LeftRight: "/bordersSvg/Tile1-Horizontal.svg",
    },
  },
  {
    thumbnail: cornerTb,
    tilesPath: {
      corner: "/bordersSvg/Tile1-Corner.svg",
      TopBottom: "/bordersSvg/Tile1-Vertical.svg",
      LeftRight: "/bordersSvg/Tile1-Horizontal.svg",
    },
  },
  {
    thumbnail: corner2T,
    tilesPath: {
      corner: "/bordersSvg/Tile2-Corner.svg",
      TopBottom: "/bordersSvg/Tile2-Vertical.svg",
      LeftRight: "/bordersSvg/Tile2-Horizontal.svg",
    },
  },
  {
    thumbnail: corner2lr,
    tilesPath: {
      corner: "/bordersSvg/Tile2-Corner.svg",
      TopBottom: "/bordersSvg/Tile2-Vertical.svg",
      LeftRight: "/bordersSvg/Tile2-Horizontal.svg",
    },
  },
  {
    thumbnail: corner2Tb,
    tilesPath: {
      corner: "/bordersSvg/Tile2-Corner.svg",
      TopBottom: "/bordersSvg/Tile2-Vertical.svg",
      LeftRight: "/bordersSvg/Tile2-Horizontal.svg",
    },
  },
  {
    thumbnail: cornerT,
    tilesPath: {
      corner: "/bordersSvg/Tile1-Corner.svg",
      TopBottom: "/bordersSvg/Tile1-Vertical.svg",
      LeftRight: "/bordersSvg/Tile1-Horizontal.svg",
    },
  },
  {
    thumbnail: cornerlr,
    tilesPath: {
      corner: "/bordersSvg/Tile1-Corner.svg",
      TopBottom: "/bordersSvg/Tile1-Vertical.svg",
      LeftRight: "/bordersSvg/Tile1-Horizontal.svg",
    },
  },
  {
    thumbnail: cornerTb,
    tilesPath: {
      corner: "/bordersSvg/Tile1-Corner.svg",
      TopBottom: "/bordersSvg/Tile1-Vertical.svg",
      LeftRight: "/bordersSvg/Tile1-Horizontal.svg",
    },
  },
];
const WorkSpaceSideBar = ({ open, close, selectTiles }) => {
  console.log("workspace");
  const [tilesBorderBtn, settilesBorderBtn] = useState("tiles");
  const [levelOne, setlevelOne] = useState("");
  const [levelTwo, setlevelTwo] = useState("");
  const [levelThree, setlevelThree] = useState("");
  const HandelSelectTileBorder = (type) => {
    settilesBorderBtn(type);
  };
  const setBorderTiles = useFloorStore((state) => state.setBorderTiles);
  function SvgToImg(data) {
    return `data:image/svg+xml;base64,${btoa(data)}`;
  }

  const fetchData = async (data) => {
    const resp = await fetch(data); // Adjust path as needed
    const svgTexts = await resp.text();
    return svgTexts;
  };
  const fetchSvgStringAndSet = async (corner, topBottom, leftRight) => {
    try {
      const co = await fetchData(corner);
      const TB = await fetchData(topBottom);
      const LR = await fetchData(leftRight);
      setBorderTiles(co, LR, TB);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div
        className={`${
          open ? "left-0" : " left-[-120%] md:left-[-100%]"
        } transition-all duration-500 bg-transparent ease-in-out flex items-start  absolute top-0 left-0 w-fit h-screen z-[112]`}
      >
        <div className=" bg-white h-full md:h-[550px] 3xl:h-[70vh] md:mt-12 md:rounded-tr-md md:rounded-br-md w-[100vw] md:w-[25rem]  3xl:w-[529px]">
          <button
            className=" mx-3 mt-4 md:px-5  flex justify-between items-center md:pt-6 lg:pb-2 lg:pt-0 lg:px-0"
            onClick={() => close(false)}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="34"
              viewBox="0 0 68 34"
              fill="none"
              className=" h-7 w-11 md:w-[68px] md:h-[34px]"
            >
              <path
                d="M15.2929 15.7929C14.9024 16.1834 14.9024 16.8166 15.2929 17.2071L21.6569 23.5711C22.0474 23.9616 22.6805 23.9616 23.0711 23.5711C23.4616 23.1805 23.4616 22.5474 23.0711 22.1569L17.4142 16.5L23.0711 10.8431C23.4616 10.4526 23.4616 9.81946 23.0711 9.42893C22.6805 9.03841 22.0474 9.03841 21.6569 9.42893L15.2929 15.7929ZM48 15.5L16 15.5L16 17.5L48 17.5L48 15.5Z"
                fill="#2A2523"
              />
            </svg>
          </button>
          <div className="md:mx-7 mx-5 h-12 3xl:h-14 flex rounded-md overflow-hidden">
            <button
              onClick={() => HandelSelectTileBorder("tiles")}
              className={`${
                tilesBorderBtn === "tiles"
                  ? " bg-black text-white"
                  : "bg-[#D9D9D9] text-black"
              }   h-full w-full`}
            >
              TILES
            </button>
            <button
              onClick={() => HandelSelectTileBorder("borders")}
              className={`${
                tilesBorderBtn === "borders"
                  ? " bg-black text-white"
                  : "bg-[#D9D9D9] text-black"
              } h-full w-full`}
            >
              Borders
            </button>
          </div>

          <div className=" h-[calc(100%-160px)] bg-white pb-2  mt-7 3xl:mt-16   overflow-y-scroll">
            {tilesBorderBtn === "tiles" && (
              <div className=" px-7 flex flex-col gap-4">
                {TilesData?.map((Tdata, i) => (
                  <div key={i}>
                    <h3
                      onClick={() => setlevelOne(Tdata?.name)}
                      className=" cursor-pointer text-black uppercase text-lg font-Inter font-medium"
                    >
                      {Tdata?.name}
                    </h3>

                    {levelOne === Tdata?.name && Tdata?.menu.length !== 0 && (
                      <div className="flex flex-col gap-4 mt-4 ">
                        {Tdata?.menu?.map((TdataLvl2, j) => (
                          <div key={TdataLvl2?.id} className=" ">
                            <h3
                              onClick={() => setlevelTwo(TdataLvl2?.name)}
                              className=" cursor-pointer font-semibold text-black  uppercase font-Inter"
                            >
                              {TdataLvl2?.name}
                            </h3>
                            {levelTwo === TdataLvl2?.name &&
                              TdataLvl2?.menu.length !== 0 && (
                                <div className=" flex flex-col mt-4 gap-4">
                                  {TdataLvl2?.menu?.map((TdataLvl3) => (
                                    <div key={TdataLvl3?.id}>
                                      <h3
                                        onClick={() =>
                                          setlevelThree(TdataLvl3?.name)
                                        }
                                        className=" text-[13px] cursor-pointer font-semibold uppercase  leading-4 text-black"
                                      >
                                        {TdataLvl3?.name}
                                      </h3>
                                      {TdataLvl3?.tiles?.length !== 0 &&
                                        levelThree === TdataLvl3?.name && (
                                          <div className=" flex overflow-x-scroll gap-3 mt-4">
                                            {TdataLvl3?.tiles?.map((tiles) => (
                                              <Image
                                                key={tiles.name}
                                                src={SvgToImg(tiles.image)}
                                                alt="tiles"
                                                onClick={() =>
                                                  selectTiles(tiles)
                                                }
                                                width={100}
                                                height={100}
                                                className=" cursor-pointer h-24 w-24"
                                              />
                                            ))}
                                          </div>
                                        )}
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {tilesBorderBtn === "borders" && (
              <div className="  mx-auto w-fit grid grid-cols-3 gap-7 3xl:gap-14 items-center">
                {borders?.map((b, i) => (
                  <Image
                    onClick={() => {
                      fetchSvgStringAndSet(
                        b.tilesPath.corner,
                        b.tilesPath.TopBottom,
                        b.tilesPath.LeftRight
                      );
                    }}
                    className=" cursor-pointer h-24 w-24 object-cover"
                    src={b.thumbnail}
                    key={i}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceSideBar;
