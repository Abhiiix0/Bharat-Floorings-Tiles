"use client";
import Header from "../../app/components/Header";
import PImage from "../../../public/images/products/product.jpg";
import tiles1 from "../../../public/images/products/Stiles1.png";
import tiles2 from "../../../public/images/products/Stiles2.jpg";
import Image from "next/image";
import { useState } from "react";
import Remix from "../../../public/icons/remix";
import ImageGallery from "../components/ImageGallery";
import ImageGallery2 from "../components/ImageGallery2";
import ProductCard from "../components/products/ProductCard";
import tilsDesign from "../../../public/images/product-details/tiles.png";
import kitchen from "../../../public/images/product-details/kitchen.jpg";
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

  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredSubLink, setHoveredSubLink] = useState(null);

  const titles = [
    {
      name: "Designer tiles 7",
      links: [
        {
          name: "BFT + Designer",
          url: "https://www.google.com",
          links: [
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
          ],
        },
        {
          name: "Heritage collection",
          url: "https://www.google.com",
          links: [
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
          ],
        },
        { name: "Heritage collection", url: "https://www.google.com" },
        { name: "Centenary Range ", url: "https://www.google.com" },
        { name: "Made in India", url: "https://www.google.com" },
        { name: "International Range", url: "https://www.google.com" },
        { name: "Unitinta", url: "https://www.google.com" },
        { name: "Borders", url: "https://www.google.com" },
      ],
    },

    {
      name: "Terrazo 73",
      links: [],
    },
    {
      name: "MICRO-CEMENT",
      links: [],
    },
    {
      name: "EPOXY TERRAZO",
      links: [],
    },
    {
      name: "WALL TILES 4",
      links: [],
    },
    {
      name: "OUTDOOR FLOORING 7",
      links: [],
    },
    {
      name: "BFT SURFACES 2",
      links: [],
    },
    {
      name: "tile 3",
      links: [
        { name: "link 3", url: "https://www.google.com" },
        { name: "link 4", url: "https://www.google.com" },
      ],
    },
  ];

  const toggleLinks = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [menuBtn, setmenuBtn] = useState(false);
  const [Inquery, setInquery] = useState(true);
  return (
    <div>
      <section className=" relative">
        <Header textColor="text-black" iconsColor="black"></Header>
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px]  top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>

        <section
          onMouseLeave={() => setmenuBtn(false)}
          className={`${
            !menuBtn && " left-[-100%]"
          } absolute top-0 left-0 w-full transition-all  duration-1000 ease-in-out sm:w-[400px] lg:w-[600px] border pt-40 lg:pt-72 h-full bg-white`}
        >
          <div className=" relative z-[1400] px-5 lg:pl-[100px]  lg:pr-0 h-fit  border-red-400">
            <div className=" w-full sm:w-[310px] 3xl:w-[380px] mt 3xl:mt-[45px] pr-5  lg:ml-[12px]">
              {titles.map((t, i) => (
                <div key={i} className="border-b-2 border-black">
                  <p
                    onClick={() => toggleLinks(i)}
                    className=" h-[50px] 3xl:h-[70px] flex uppercase justify-between items-center cursor-pointer font-Inter text-xl font-semibold"
                  >
                    {t.name}
                    {t?.links?.length > 0 && (
                      <span>{openIndex === i ? "-" : "+"}</span>
                    )}
                  </p>
                  {openIndex === i && t.links?.length > 0 && (
                    <ul className=" mt-[18px] mb-[58px]">
                      {t.links.map((link, j) => (
                        <li
                          key={j}
                          className="  "
                          onMouseEnter={() => setHoveredSubLink(j)}
                          onMouseLeave={() => setHoveredSubLink(null)}
                        >
                          <a
                            className="h-9 flex items-center  text-lg uppercase font-medium"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                          {hoveredSubLink === j && link.links?.length > 0 && (
                            <ul className=" bg-white mt-1 mb-[50px] text-black ">
                              {link.links.map((sublink, k) => (
                                <li key={k} className="mb-1">
                                  <a
                                    className=" text-[13px] leading-4 font-semibold text-decoration-none no-underline "
                                    href={sublink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {sublink.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          onMouseLeave={() => setInquery(true)}
          className={`${
            Inquery && " right-[-100%]"
          } absolute top-0 right-0 z-[151] w-full transition-all  duration-1000 ease-in-out sm:w-[558px] border h-full bg-[#2A2523]`}
        >
          <div className=" grid grid-cols-4 grid-rows-2">
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
            <Image
              className=" h-[141px] w-[141px] object-cover"
              src={tilsDesign}
              alt="img"
            ></Image>
          </div>
          <div className=" normal-text px-10 pt-10">
            <div className=" flex items-start justify-between">
              <p className=" text-3xl md:text-[2.5rem] leading-[48pz] pb-[52px] normal-text text-white">
                Contemporary <br /> Terrazo
              </p>
              <Remix color="white" className=" h-[43px] w-[40px]"></Remix>
            </div>
            <div className=" font-medium leading-[35px] flex gap-4 text-white">
              <p>Tile size</p>
              <p>20cm x 20cm</p>
            </div>
            <div className=" font-medium leading-[35px] flex gap-4 text-white">
              <p className=" text-white/30">Starts from</p>
              <p className="text-[#8FDEAA]">600 per sqft.</p>
            </div>
            <div className=" flex w-full flex-col sm:flex-row mt-12">
              <div className=" flex w-full flex-col  ">
                <label
                  htmlFor=""
                  className=" font-medium normal-text leading-[35px] text-white  sm:border-b-2 border-white"
                >
                  TOTAL AREA IN SQFT
                </label>
                <input
                  type="text"
                  className=" text-xl h-[52px] border-b-2 bg-transparent text-white outline-none"
                />
              </div>
              <div className=" w-full flex flex-col">
                <label
                  htmlFor=""
                  className=" font-medium normal-text leading-[35px] text-white  sm:border-b-2 border-white"
                >
                  ESTIMATED COST
                </label>
                <input
                  type="text"
                  className=" text-xl h-[52px] pl-2 border-b-2 bg-transparent text-white outline-none"
                />
              </div>
            </div>
            <div className=" w-[197px] text-white/30 mt-3 mb-[56px]">
              12 Tiles are required to cover this area
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 items-start">
              <input
                type="text"
                placeholder="Full name"
                className=" bg-transparent border-b-2 outline-none text-[20px]  text-white pt-[31px]  "
              />
              <input
                type="text"
                placeholder="Phone"
                className=" bg-transparent border-b-2 outline-none text-[20px]  text-white pt-[31px]  "
              />
              <input
                type="text"
                placeholder="email"
                className=" bg-transparent  text-[20px] outline-none text border-b-2 pt-[31px] text-white "
              />
              <input
                type="text"
                placeholder="City"
                className=" bg-transparent border-b-2 outline-none text-[20px]  text-white pt-[31px]  "
              />
            </div>
            <div className=" w-full pt-[59px]  flex flex-col gap-7 justify-center items-center mb-[19px]">
              <button className=" bg-white   h-[64px] flex justify-between align-self-center  items-center w-full">
                <p className=" mx-auto font-medium">Get a quote</p>
              </button>
              <p className=" text-center text-xl font-Inter leading-[32px] text-white">
                Cancel
              </p>
            </div>
            <p className=" mt-[69px] font-Inter text-white/30">
              Estimated cost has been calculated based on the square footage
              provided. A final quotation will be provided once we have detailed
              information.
            </p>
          </div>
        </section>
        <div
          onMouseEnter={() => setmenuBtn(true)}
          className=" absolute top-0 left-0 w-[210px] h-[100vh] md:h-[150vh] "
        ></div>
        <div className="  px-5 lg:px-[88px] mt-[30px] md:mt-[60px] lg:mt-[128px]">
          <div className=" flex lg:hidden gap-2 text-[8px] md:text-sm font-semibold text-gray-500 mb-[25px]">
            <p>DESIGNER TILES</p>
            {">"}
            <p>BFT+DESIGNER</p> {">"}
            <p>VIRTUOSO</p>
            {">"} <p className=" text-black">CONTEMPORARY TERRAZO</p>
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
                    className="h-[55px] cursor-pointer w-[55px] lg:w-[45px] lg:h-[45px] 2xl:h-[85px] 2xl:w-[85px] object-cover"
                    src={tile}
                    onClick={() => setSelectedImg(imgs)}
                    //   onClick={() => setSelectedImg(tile)}
                    alt="Image"
                  ></Image>
                ))}
                <div className="group border ml-[10px] hover:bg-[#516756] relative z-[800] cursor-pointer border-black flex justify-center items-center h-[55px] w-[55px] lg:w-[45px] lg:h-[45px] 2xl:h-[85px] 2xl:w-[85px]">
                  {/* Black Remix (default state) */}
                  <Remix
                    size={40}
                    color="black"
                    className="lg:w-[25px] h-[40px] w-[40px] text-black lg:h-[25px] 2xl:h-[40px] 2xl:w-[40px] group-hover:hidden"
                  />
                  {/* White Remix (hover state) */}
                  <Remix
                    size={40}
                    color="white"
                    className="lg:w-[25px] h-[40px] w-[40px] text-white lg:h-[25px] 2xl:h-[40px] 2xl:w-[40px] hidden group-hover:block"
                  />
                </div>
              </div>
              <p className=" normal-text text-sm md:text-xl mt-5 md:mt-[42px]">
                Extra information +
              </p>
            </div>
            <div className="">
              <div className=" hidden lg:flex gap-2 text-sm xl:text-base font-semibold text-gray-500 mb-0 sm:mb-[48px]">
                <p>DESIGNER TILES</p>
                {">"}
                <p>BFT+DESIGNER</p> {">"}
                <p>VIRTUOSO</p>
                {">"} <p className=" text-black">CONTEMPORARY TERRAZO</p>
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
          <div className=" flex relative z-[150] pb-14 md:pb-24 lg:pb-[150px] xl:pb-[208px]">
            <div className="  hidden lg:block w-[33.3%] lg:h-[246px]  "></div>
            <div className=" w-full lg:w-[66.6%] lg:border  h-fit sm::h-[150px] lg:h-[246px] flex items-center gap-4  lg:pl-[30px] 2xl:pl-[240px]">
              <button
                onClick={() => {
                  setInquery(false);
                }}
                className=" h-[50px] cursor-pointer sm:h-[64px] text-white normal-text  px-[15px] lg:px-[32px] flex justify-center text-sm md:text-xl items-center bg-[#2A2523]"
              >
                Get a quote
              </button>
              <button className="h-[50px] cursor-pointer  sm:h-[64px] normal-text px-[15px] lg:px-[32px] flex gap-2 justify-center border-2 border-black text-sm md:text-xl items-center ">
                Remix in Workbench{" "}
                <Remix size={31} className="h-4 w-4 md:h-8 md:w-8" />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-row items-center gap-3 md:gap-7 px-5 mb-14 md:mb-24 lg:mb-[150px] xl:mb-[233px] lg:px-[100px]">
          <Image
            alt="Image"
            src={kitchen}
            className=" h-[250px] md:h-[450px] lg:h-[650px] xl:h-[884px] w-[50%] object-cover"
          ></Image>
          <Image
            alt="Image"
            src={kitchen}
            className=" h-[120px] md:h-[250px] lg:h-[360px] xl:h-[512px] w-[50%] object-cover"
          ></Image>
        </div>
        <ImageGallery2 images={imgArray} />
        <div className=" lg:px-[88px] px-[20px] ">
          <p className=" mt-16 md:mt-44 mb-12 text-3xl sm:text-[45px] xl:text-[70px] heading-gloock">
            COMPLEMENTING PATTERNS
          </p>
          <div className=" grid grid-cols-1 place-content-center md:grid-cols-2 xl:grid-cols-3   pb-[200px]  w-full">
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
