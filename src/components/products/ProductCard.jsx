"use client";
import React, { useState } from "react";
import RightArrow from "../../../public/icons/RightArrow";
import Image from "next/image";
import Remix from "../../../public/icons/remix";

const ProductCard = ({ Product }) => {
  const [selectImg, setselectImg] = useState(Product?.tiles[0]);
  return (
    <div className=" border md:border-b-[1px] px-[20px] md:px-[12%]  3xl:px-[15%] 3xl:h-[931px]">
      <p className="mt-[52px] mb-[18px] text-xl normal-text font-medium tracking-[0.4px]">
        BFT + Designer 2
      </p>
      <div className="3xl:w-[28.9rem] 3xl:h-[473px] w-full mx-auto  md:w-auto md:h-[350px]">
        <Image
          alt="img"
          className=" w-full h-full  object-cover"
          src={selectImg}
        />
      </div>
      <div className="flex ">
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
      <div className="flex normal-text  flex-col   h-[200px] md:h-[250px] 3xl:h-[322px] justify-between">
        <div className="mt-[53px]  flex justify-between gap-14 3xl:gap-[91px]">
          <div className=" flex flex-col text-[9px] sm:text-[12px] 3xl:text-base gap-2 3xl:gap-3">
            <p className="font-semibold ">Size</p>
            <p>20 cm x 20 cm</p>
          </div>
          <div className=" flex flex-col text-[9px] sm:text-[12px] 3xl:text-base gap-2 3xl:gap-3">
            <p className="font-semibold ">Thickness</p>
            <p>Flooring - 23mm - 25mm</p>
            <p>Flooring - 23mm - 25mm</p>
          </div>
        </div>
        <div className="flex font-semibold text-[12px]  3xl:text-base justify-between pb-[20px] sm:pb-[45px] 3xl:pb-[56px]">
          <p className=" cursor-pointer flex items-center gap-2">
            Remix in Workbench <Remix size={20} />
          </p>
          <p className=" flex gap-2 cursor-pointer  items-center ">
            View collection{" "}
            <RightArrow
              size={20}
              className="w-[15px] h-[15px] 3xl:w-[20px] 3xl:h-[20px]"
              color="black"
            ></RightArrow>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
