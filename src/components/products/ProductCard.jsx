"use client";
import React, { useState } from "react";
import RightArrow from "../../../public/icons/RightArrow";
import Image from "next/image";
import Remix from "../../../public/icons/remix";
import { useFloorVisualizerStore } from "../../store/floorVisualizer.store";
import { useRouter } from "next/navigation";
import LoadingUi from "../LoadingUi";
const ProductCard = ({ Product, border = true }) => {
  const router = useRouter();
  const [whoInfo, setwhoInfo] = useState(false);
  const [loading, setloading] = useState(false);
  const [selectImg, setselectImg] = useState(Product?.tiles[0]);
  const setTileData = useFloorVisualizerStore((state) => state.setTileData);
  const ViewOnWorkShop = async () => {
    setloading(true);
    const response = await fetch(selectImg?.src); // Adjust path as needed
    const svgText = await response.text();
    setTileData({
      id: 0,
      name: "Tiles One",
      image: svgText,
      size: "10*10",
    });
    router.push("/workspace");
    setloading(false);
  };
  return (
    <div
      className={` relative ${
        border && "xl:border-b-[1px] border"
      }   md:px-[5%] lg:px-[12%]  3xl:px-[15%] 3xl:h-[931px] flex flex-col-reverse md:flex-col `}
    >
      <LoadingUi LoadingUi={loading} />
      <p className=" pt-6 relative z-20 bg-white  md:mt-6 md:mb-[18px] text-xl normal-text font-semibold md:font-medium tracking-[0.4px]">
        BFT + Designer 2
      </p>
      <div className=" 3xl:h-[473px] w-[100%] h-[100%] mx-auto  md:w-auto xl:h-[350px]">
        <Image
          alt="img"
          onClick={() => setwhoInfo(true)}
          className=" w-[650px] h-full  object-cover"
          src={selectImg}
        />
      </div>
      <div className=" hidden md:flex ">
        {Product?.tiles?.map((imgs, i) => (
          <Image
            src={imgs}
            className=" cursor-pointer w-[45px] h-[45px]"
            alt="img"
            key={i}
            onClick={() => setselectImg(imgs)}
          ></Image>
        ))}
      </div>
      <div
        onClick={() => setwhoInfo(false)}
        className={` absolute bg-black/50 border-white border md:bg-transparent ${
          !whoInfo ? "hidden md:flex" : "flex"
        } text-white md:text-black pt-10 md:p-0 px-5 pb-11 duration-200 transition-all ease-in-out  md:relative   normal-text  flex-col   h-full w-full md:h-fit 3xl:h-[322px] justify-between`}
      >
        <div className=" md:mt-[53px]  flex flex-col md:flex-row justify-between gap-1 md:gap-14 3xl:gap-[91px]">
          <div className=" flex flex-col text-[12px] font-medium md:font-normal gap-1 3xl:text-base md:gap-2 3xl:gap-3">
            <p className=" md:font-semibold ">Size</p>
            <p>20 cm x 20 cm</p>
          </div>
          <div className=" flex flex-col text-[12px] font-medium md:font-normal gap-1 3xl:text-base md:gap-2 3xl:gap-3">
            <p className="md:font-semibold ">Thickness</p>
            <p>Flooring - 23mm - 25mm</p>
            <p>Flooring - 23mm - 25mm</p>
          </div>
        </div>
        <div className="flex font-semibold  py-8  lg:text-[12px] 3xl:text-base flex-col md:flex-row gap-5 md:gap-0 justify-between xl:pb-[45px] 3xl:pb-[56px]">
          <p
            onClick={() => ViewOnWorkShop()}
            className=" cursor-pointer flex items-center gap-2"
          >
            Remix in Workbench <Remix size={20} className=" hidden md:block" />{" "}
            <Remix size={20} className=" md:hidden" color="white" />
          </p>
          <p className=" flex gap-2 cursor-pointer  items-center ">
            View collection{" "}
            <RightArrow
              size={20}
              className="w-[15px] h-[15px] 3xl:w-[20px] 3xl:h-[20px] hidden md:block"
              color="black"
            ></RightArrow>
            <RightArrow
              size={20}
              className="w-[15px] h-[15px] 3xl:w-[20px] 3xl:h-[20px] md:hidden"
              color="white"
            ></RightArrow>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
