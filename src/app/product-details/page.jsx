"use client";
import Header from "../components/Header";
import PImage from "../../../public/images/products/product.jpg";
import tiles1 from "../../../public/images/products/Stiles1.png";
import tiles2 from "../../../public/images/products/Stiles2.jpg";
import Image from "next/image";
import { useState } from "react";
import Remix from "../../../public/icons/remix";
const page = () => {
  const products = {
    name: "Contemporary Terrazo ",
    link: "",
    tiles: [tiles1, tiles2, tiles1, PImage],
  };
  const [SelectedImg, setSelectedImg] = useState(products?.tiles[0]);
  return (
    <div>
      <section className=" relative">
        <Header textColor="text-black" iconsColor="black"></Header>
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px]  top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className="  px-5 lg:px-[88px] mt-[30px] md:mt-[60px] lg:mt-[128px]">
          <div className=" flex gap-2 text-[8px] xl:text-base mb-[25px]">
            <p>DESIGNER TILES</p>
            {">"}
            <p>BFT+DESIGNER</p> {">"}
            <p>VIRTUOSO</p>
            {">"} <p>CONTEMPORARY TERRAZO</p>
          </div>
          <div className=" flex lg:flex-row flex-col  gap-12 2xl:gap-16 3xl:gap-[90px]">
            <div className=" lg:ml-[12px] 2xl:ml-[100px] 3xl:ml-[157px]">
              <Image
                className=" lg:w-[400px] w-full 2xl:h-[558px] 2xl:w-[558px] object-cover"
                src={SelectedImg}
                alt="Image"
              ></Image>
              <div className=" flex mt-[10px]">
                {products.tiles.map((tile, index) => (
                  <Image
                    key={index}
                    className="h-[55px] w-[55px] lg:w-[45px] lg:h-[45px] 2xl:h-[85px] 2xl:w-[85px] object-cover"
                    src={tile}
                    onClick={() => setSelectedImg(imgs)}
                    //   onClick={() => setSelectedImg(tile)}
                    alt="Image"
                  ></Image>
                ))}
                <div className=" border ml-[10px] border-black flex justify-center items-center h-[55px] w-[55px] lg:w-[45px] lg:h-[45px] 2xl:h-[85px] 2xl:w-[85px]">
                  <Remix
                    size={40}
                    className="lg:w-[25px] h-[40px] w-[40px] lg:h-[25px] 2xl:h-[40px] 2xl:w-[40px]"
                  ></Remix>
                </div>
              </div>
              <p className=" normal-text text-xl mt-[42px]">
                Extra information +
              </p>
            </div>
            <div className="">
              <div className=" hidden md:flex gap-2 text-sm xl:text-base mb-[48px]">
                <p>DESIGNER TILES</p>
                {">"}
                <p>BFT+DESIGNER</p> {">"}
                <p>VIRTUOSO</p>
                {">"} <p>CONTEMPORARY TERRAZO</p>
              </div>
              <p className=" font-Gloock text-2xl md:text-4xl 3xl:text-[70px] 3xl:leading-[80px] lg:w-[150px]">
                {products.name}
              </p>
              <div className=" flex items-center font-medium text-xl gap-5 mt-[47px] mb-[37px]">
                <Image
                  src={products.tiles[3]}
                  alt="Image"
                  className=" h-[78px] w-[78px] rounded-full"
                ></Image>
                Aniruddh Mehta
              </div>
              <div className=" normal-text text-sm 2xl:text-base w-[550px] 2xl:w-[658px]">
                The classic Terrazzo tile is very reminiscent of Indian homes
                and often associated with nostalgia of an old ‘Bombay’. The
                reimagining of this tile in a modern and contemporary approach
                is an aim to reintroduce the terrazzo back into spaces, outside
                of homes and more in tuned with contemporary interior design and
                architecture - be it co-working spaces or restaurants. <br />{" "}
                The idea is to take the dispersed layout of the Terrazzo tile
                and apply a systematic yet playful, minimal and blocky order to
                its arrangement. The tile comes in a ‘Morning’ and ‘Evening’
                theme, suitable for a low-lit room or one which basks in the
                sunlight
              </div>
              <div className=" mt-[100px] lg:mt-[135px] pn-[20px]  lg:pb-[77px]">
                <div className=" flex gap-16">
                  <p className=" text-lg max-w-[133px]">Color</p>
                  <div className=" flex gap-5">
                    <div className=" h-[33px] w-[33px] rounded-full bg-red-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-green-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-blue-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-yellow-400"></div>
                  </div>
                </div>
                <div className=" flex gap-16 mt-[38px]">
                  <p className=" text-lg max-w-[133px]">Tile size</p>
                  <div className=" font-semibold text-xl">20cm x 20cm</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex pb-[208px]">
            <div className=" w-[33.3%] lg:h-[246px]  "></div>
            <div className=" w-[66.6%] lg:border-t h-[150px] lg:h-[246px] flex items-center gap-4  pl-[30px] 2xl:pl-[240px]">
              <button className=" h-[64px] text-white normal-text px-[32px] flex justify-center text-xl items-center bg-[#2A2523]">
                Get a quote
              </button>
              <button className=" h-[64px] normal-text px-[32px] flex justify-center border-2 border-black text-xl items-center ">
                Remix in Workbench <Remix size={31} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
