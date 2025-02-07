"use client";
import React, { useState } from "react";
import { TilesData } from "./../data/TilesData.js";
import Image from "next/image.js";
const WorkSpaceSideBar = ({ open, close, selectTiles }) => {
  const [tilesBorderBtn, settilesBorderBtn] = useState("tiles");
  const HandelSelectTileBorder = (type) => {
    settilesBorderBtn(type);
  };

  const [levelOne, setlevelOne] = useState("");
  const [levelTwo, setlevelTwo] = useState("");
  const [levelThree, setlevelThree] = useState("");

  function SvgToImg(data) {
    return `data:image/svg+xml;base64,${btoa(data)}`;
  }
  return (
    <div>
      <div
        className={`${
          open ? "left-0" : " left-[-120%] md:left-[-100%]"
        } transition-all duration-500 bg-transparent ease-in-out flex items-start  absolute top-0 left-0 w-fit h-screen z-[112]`}
      >
        <div className=" bg-white h-full md:h-[550px] 3xl:h-[70vh] md:mt-12 md:rounded-tr-md md:rounded-br-md w-[100vw] md:w-[25rem]  3xl:w-[529px]">
          <button
            className=" mx-3 mt-4 md:px-5 flex justify-between items-center md:pt-6"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceSideBar;
