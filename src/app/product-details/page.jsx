"use client";
import Header from "../components/Header";
import PImage from "../../../public/images/products/product.jpg";
import tiles1 from "../../../public/images/products/Stiles1.png";
import tiles2 from "../../../public/images/products/Stiles2.jpg";
import Image from "next/image";
import { useState } from "react";
import Remix from "../../../public/icons/remix";
import ImageGallery from "../components/ImageGallery";
import ImageGallery2 from "../components/ImageGallery2";
import ProductCard from "../components/products/ProductCard";
const page = () => {
  const products = {
    name: "Contemporary Terrazo ",
    link: "",
    tiles: [tiles1, tiles2, tiles1, PImage],
  };
  const productsArray = [
    {
      name: "Terrazo 73",
      link: "",
      tiles: [tiles1, tiles2, tiles1, PImage],
    },
    {
      name: "Terrazo 73",
      link: "",
      tiles: [tiles1, tiles2, tiles1, PImage],
    },
    {
      name: "Terrazo 73",
      link: "",
      tiles: [tiles1, tiles2, tiles1, PImage],
    },
  ];
  const imgArray = [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
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
          <div className=" flex lg:hidden gap-2 text-[8px] md:text-sm mb-[25px]">
            <p>DESIGNER TILES</p>
            {">"}
            <p>BFT+DESIGNER</p> {">"}
            <p>VIRTUOSO</p>
            {">"} <p>CONTEMPORARY TERRAZO</p>
          </div>
          <div className=" flex lg:flex-row flex-col  gap-4 md:gap-8 lg:gap-12 2xl:gap-16 3xl:gap-[90px]">
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
              <p className=" normal-text text-sm md:text-xl mt-5 md:mt-[42px]">
                Extra information +
              </p>
            </div>
            <div className="">
              <div className=" hidden lg:flex gap-2 text-sm xl:text-base mb-0 sm:mb-[48px]">
                <p>DESIGNER TILES</p>
                {">"}
                <p>BFT+DESIGNER</p> {">"}
                <p>VIRTUOSO</p>
                {">"} <p>CONTEMPORARY TERRAZO</p>
              </div>
              <p className=" font-Gloock text-lg sm:text-2xl md:text-4xl 3xl:text-[70px] 3xl:leading-[80px] lg:w-[150px]">
                {products.name}
              </p>
              <div className=" flex items-center font-medium text md:text-xl gap-2 sm:gap-5 mt-5 mb-5 md:mt-[37px] md:mb-[28px] lg:mb-[37px] lg:mt-[47]">
                <Image
                  src={products.tiles[3]}
                  alt="Image"
                  className=" h-11 w-11 md:h-[60px] md:w-[60px] lg:h-[78px] lg:w-[78px] rounded-full"
                ></Image>
                Aniruddh Mehta
              </div>
              <div className=" normal-text text-sm md:text-lg lg:text-base 2xl:text-base w-full  lg:w-[550px] 2xl:w-[658px]">
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
              <div className=" mt-6 md:mt-[50px] lg:mt-[135px] pb-[20px]  lg:pb-[77px]">
                <div className=" flex gap-16">
                  <p className="  md:text-lg max-w-[133px]">Color</p>
                  <div className=" flex gap-5">
                    <div className=" h-[33px] w-[33px] rounded-full bg-red-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-green-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-blue-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-yellow-400"></div>
                  </div>
                </div>
                <div className=" flex gap-16 mt-[15px] md:mt-[38px]">
                  <p className=" md:text-lg max-w-[133px]">Tile size</p>
                  <div className=" font-semibold text-lg md:text-xl">
                    20cm x 20cm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex  pb-[208px]">
            <div className="  hidden lg:block w-[33.3%] lg:h-[246px]  "></div>
            <div className=" w-full lg:w-[66.6%] lg:border-t  h-fit sm::h-[150px] lg:h-[246px] flex items-center gap-4  lg:pl-[30px] 2xl:pl-[240px]">
              <button className=" h-[50px] sm:h-[64px] text-white normal-text  px-[15px] lg:px-[32px] flex justify-center text-sm md:text-xl items-center bg-[#2A2523]">
                Get a quote
              </button>
              <button className="h-[50px] sm:h-[64px] normal-text px-[15px] lg:px-[32px] flex gap-2 justify-center border-2 border-black text-sm md:text-xl items-center ">
                Remix in Workbench{" "}
                <Remix size={31} className="h-4 w-4 md:h-8 md:w-8" />
              </button>
            </div>
          </div>
        </div>
        <ImageGallery2 images={imgArray} />
        <div className=" lg:px-[100px] px-[20px] border">
          <p className="mt-44 mb-12 text-[45px] xl:text-[70px] heading-gloock">
            COMPLEMENTING PATTERNS
          </p>
          <div className=" grid grid-cols-1 place-content-center md:grid-cols-2 2xl:grid-cols-3   pb-[200px]  w-full">
            {productsArray.map((prd, i) => (
              <ProductCard key={i} Product={prd} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
