"use client";
import Header from "../../components/Header";
import PImage from "../../../public/svgs/tile1.svg";
import tiles1 from "../../../public/svgs/tile2.svg";
import tiles2 from "../../../public/svgs/tile2.svg";
import Image from "next/image";
import { useState } from "react";
import Remix from "../../../public/icons/remix";
import ImageGallery from "../../components/ImageGallery";
import ImageGallery2 from "../../components/ImageGallery2";
import ProductCard from "../../components/products/ProductCard";
import tilsDesign from "../../../public/images/product-details/tiles.png";
import kitchen from "../../../public/images/product-details/kitchen.jpg";
import { useRouter } from "next/navigation";
import { useFloorVisualizerStore } from "../../store/floorVisualizer.store";
import GetAQuery from "../../components/GetAQuery";
import GetASample from "../../components/GetASample";
import imagess from "../../../public/images/products/headerbg.jpg";
import CustomHeader from "../../components/CustomHeader";

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
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
            { name: "sublink 1", url: "https://www.google.com" },
            { name: "sublink 2", url: "https://www.google.com" },
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

  const openQuote = () => {
    setInquery(false);
    const bodyDiv = document.getElementsByTagName("body");
    bodyDiv[0].style.overflow = "hidden";
  };
  const openSample = () => {
    setSampleSider(false);
    const bodyDiv = document.getElementsByTagName("body");
    bodyDiv[0].style.overflow = "hidden";
  };

  const [menuBtn, setmenuBtn] = useState(false);
  const [Inquery, setInquery] = useState(true);
  const [productInfo, setproductInfo] = useState(false);
  const [SampleSider, setSampleSider] = useState(true);
  const handelProductInfo = () => {
    if (productInfo) {
      setproductInfo(false);
    } else {
      setproductInfo(true);
    }
  };
  const router = useRouter();
  const [whoInfo, setwhoInfo] = useState(false);
  const [loading, setloading] = useState(false);
  const setTileData = useFloorVisualizerStore((state) => state.setTileData);
  const ViewOnWorkShop = async () => {
    const response = await fetch(SelectedImg?.src); // Adjust path as needed
    const svgText = await response.text();
    setTileData({
      id: 0,
      name: "Tiles One",
      image: svgText,
      size: "10*10",
    });
    router.push("/workspace");
  };
  const [extraInfo, setextraInfo] = useState(false);

  return (
    <div>
      <section className=" relative">
        <CustomHeader title="Designer Tiles" bgImg={imagess?.src}>
          <Header textColor="text-white" />
        </CustomHeader>
        {/* <Header textColor="text-black" iconsColor="black"></Header> */}
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px] z-[-1]  top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>

        <section
          onMouseLeave={() => setmenuBtn(false)}
          className={`${
            !menuBtn && " left-[-100%]"
          } absolute top-0 left-0 w-full z-[1500] transition-all  duration-1000 ease-in-out sm:w-[400px] lg:w-[600px] border pt-40 lg:pt-72 h-full bg-white`}
        >
          <div className=" relative z-[100] px-5 lg:pl-[100px]  lg:pr-0 h-fit  border-red-400">
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
        <GetAQuery
          open={Inquery}
          onClose={setInquery}
          tilsDesign={SelectedImg}
        />
        <GetASample
          open={SampleSider}
          onClose={setSampleSider}
          tilsDesign={SelectedImg}
        />
        <div
          onMouseEnter={() => setmenuBtn(true)}
          className=" absolute top-0 left-0 w-[210px] h-[100vh] md:h-[150vh] "
        ></div>
        <div className="  px-5 lg:px-[88px] mt-[30px] md:mt-[60px] lg:mt-[128px]">
          <div className=" flex lg:flex-row flex-col gap-12 md:gap-8 lg:gap-12 2xl:gap-16 3xl:gap-[90px]">
            <div className="  lg:ml-[12px] 2xl:ml-[100px] 3xl:ml-[157px]">
              <Image
                className=" lg:w-[400px] w-full 2xl:h-[558px] 2xl:w-[558px] object-cover"
                src={SelectedImg}
                alt="Image"
              ></Image>
              <div className="  border-red-400 flex mt-[10px]">
                {products.tiles.map((tile, index) => (
                  <Image
                    key={index}
                    className=" w-[25%] sm:h-[55px]  z-[20] cursor-pointer sm:w-[55px] lg:w-[45px] lg:h-[45px] 2xl:h-[85px] 2xl:w-[85px] object-cover"
                    src={tile}
                    onClick={() => setSelectedImg(tile)}
                    //   onClick={() => setSelectedImg(tile)}
                    alt="Image"
                  ></Image>
                ))}
                <div className="group hidden border hover:border-[#516756] ml-[10px] hover:bg-[#516756] relative z-[800] cursor-pointer border-black lg:flex justify-center items-center h-[55px] w-[55px] lg:w-[45px] lg:h-[45px] 2xl:h-[85px] 2xl:w-[85px]">
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
              <p
                onClick={() => setextraInfo(!extraInfo)}
                className={`  cursor-pointer normal-text hidden lg:block text-sm md:text-xl mt-5 md:mt-[42px]`}
              >
                Extra information{" "}
                <span className=" rounded-full overflow-hidden ">
                  {!extraInfo ? "+" : "-"}
                </span>
              </p>
            </div>
            <div className=" ">
              <div className=" hidden lg:flex gap-2 text-sm xl:text-base font-Inter font-semibold text-gray-500 mb-0 sm:mb-[48px]">
                <p>DESIGNER TILES</p>
                {">"}
                <p>BFT+DESIGNER</p> {">"}
                <p>VIRTUOSO</p>
                {">"} <p className=" text-black">CONTEMPORARY TERRAZO</p>
              </div>
              <p className=" font-Gloock text-3xl sm:text-2xl md:text-4xl 3xl:text-[70px] 3xl:leading-[80px] lg:w-[150px]">
                {products.name}
              </p>
              <div className=" flex items-center font-Inter font-medium md:text-xl gap-2 sm:gap-5 mt-7 mb-6 md:mt-[37px] md:mb-[28px] lg:mb-[37px] lg:mt-[47]">
                <Image
                  src={products.tiles[3]}
                  alt="Image"
                  className=" h-[60px] object-cover border w-[60px] lg:h-[78px] lg:w-[78px] rounded-full"
                ></Image>
                Aniruddh Mehta
              </div>
              <div
                className={` normal-text w-full transition-all duration-300 ease-in-out lg:h-fit  overflow-hidden text-ellipsis whitespace-pre-line ${
                  productInfo && "h-[7.5rem] "
                } lg:max-w-[660px] 2xl:w-[658px]`}
              >
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
              <div className=" flex text-sm font-semibold py-5 lg:hidden font-Inter items-center border-b-black justify-between border-b ">
                READ MORE{" "}
                <span
                  className=" text-3xl font-normal"
                  onClick={handelProductInfo}
                >
                  {productInfo ? "+" : "-"}
                </span>
              </div>
              <div className=" flex uppercase text-sm font-semibold py-5 lg:hidden font-Inter items-center border-b-black justify-between border-b ">
                Extra Information{" "}
                <span
                  className=" text-3xl font-normal"
                  onClick={() => setextraInfo(!extraInfo)}
                >
                  {!extraInfo ? "+" : "-"}
                </span>
              </div>
              <div
                //
                className={` ${
                  !extraInfo ? " hidden opacity-0 " : " block opacity-100"
                }   lg:absolute lg:top-[896px] xl:top-[1026px] 2xl:top-[1236px] left-[99px] 2xl:left-[184px]  3xl:top-[1306px] 3xl:left-[240px]  font-inter  duration-200 transition-all ease-in-out rounded-md w-full mt-5 lg:mt-0 lg:w-[350px] xl:w-[370px] 3xl:max-w-[430px] `}
              >
                <p className=" font-Inter font-medium">Material</p>
                <div className=" font-Inter lg:text-sm 3xl:text-base">
                  <p>Topping - Topping - White or grey cement, pigment,</p>
                  <p>filler, marble, stone and glass chips</p>
                  <p>Backing - Backing - Grey cement, Stone grit/ Dust</p>
                </div>
                <div className=" flex flex-col gap-4 lg:gap-6 3xl:gap-8 items-start mt-6 lg:mt-9 3xl:mt-12">
                  <div>
                    <p className=" font-Inter font-medium">
                      Wet Transverse Strength
                    </p>
                    <p>Above 3N/ mm2</p>
                  </div>
                  <div>
                    <p className=" font-Inter font-medium">
                      Wet Transverse Strength
                    </p>
                    <p>Above 3N/ mm2</p>
                  </div>
                  <div>
                    <p className=" font-Inter font-medium">
                      Wet Transverse Strength
                    </p>
                    <p>Above 3N/ mm2</p>
                  </div>
                  <div>
                    <p className=" font-Inter font-medium">
                      Wet Transverse Strength
                    </p>
                    <p>Above 3N/ mm2</p>
                  </div>
                  <div>
                    <p className=" font-Inter font-medium">
                      Wet Transverse Strength
                    </p>
                    <p>Above 3N/ mm2</p>
                  </div>
                  <div>
                    <p className=" font-Inter font-medium">
                      Wet Transverse Strength
                    </p>
                    <p>Above 3N/ mm2</p>
                  </div>
                </div>
              </div>
              <div className=" mt-10 md:mt-[50px] lg:mt-24 3xl:mt-[135px] pb-14 sm:pb-[20px]  lg:pb-[77px]">
                <div className=" flex flex-col sm:flex-row font-Inter  gap-3  sm:gap-16">
                  <p className=" text-sm font-bold sm:font-normal h-9 sm:h-fit flex items-center   md:text-lg max-w-[133px]">
                    Color
                  </p>
                  <div className=" flex gap-5">
                    <div className=" h-[33px] w-[33px] rounded-full bg-red-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-green-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-blue-400"></div>
                    <div className=" h-[33px] w-[33px] rounded-full bg-yellow-400"></div>
                  </div>
                </div>
                <div className=" sm:flex gap-16  font-Inter mt-[33px] md:mt-[39px]">
                  <p className=" text-sm font-bold sm:font-normal h-9 sm:h-fit flex items-center   md:text-lg max-w-[133px]">
                    Tile size
                  </p>
                  <div className=" sm:font-semibold text-sm sm:text-lg md:text-xl">
                    20cm x 20cm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex relative z-[150] pb-28 md:pb-24 lg:pb-[120px] xl:pb-[150px] 3xl:pb-[208px]">
            <div className="  hidden lg:block w-[33.3%] lg:h-[246px]  "></div>
            <div className=" w-full lg:w-[66.6%] lg:border  h-fit sm:h-[150px]  lg:h-48 3xl:h-[246px] sm:flex items-center gap-[0.65rem]  lg:pl-[30px] 2xl:pl-[240px]">
              <button
                onClick={() => {
                  openQuote();
                }}
                className=" w-full sm:w-fit cursor-pointer hover:bg-[#516756] h-[64px] font-medium text-white normal-text  px-[15px] lg:px-[32px] flex justify-center  md:text-xl items-center bg-[#2A2523]"
              >
                Get a quote
              </button>
              <button
                onClick={() => {
                  openSample();
                }}
                className=" w-full sm:w-fit cursor-pointer hover:bg-[#516756] h-[64px] font-medium border normal-text  px-[15px] lg:px-[32px] flex justify-center hover:text-white border-black  3xl:text-xl items-center"
              >
                Get a sample
              </button>
              <button
                onClick={ViewOnWorkShop}
                className="w-full sm:w-fit cursor-pointer   group h-[64px] normal-text px-[15px] lg:px-[32px] flex gap-2 justify-center  md:text-xl items-center "
              >
                Remix in Workbench{" "}
                <Remix
                  size={31}
                  color="black"
                  className="h-4 w-4  md:h-8 md:w-8"
                />
                {/* <Remix
                  size={31}
                  color="white"
                  className="h-4 w-4 md:h-8 md:w-8"
                /> */}
              </button>
            </div>
          </div>
        </div>
        <div
          className={` ${
            extraInfo && " 2xl:mt-[139px] 3xl:mt-16"
          } flex flex-col sm:flex-row transition-all duration-200 ease-in-out items-center gap-3 md:gap-7 px-5 mb-14 md:mb-24 lg:mb-[150px] xl:mb-[233px] lg:px-[100px]`}
        >
          <Image
            alt="Image"
            src={kitchen}
            className=" h-[370px] md:h-[450px] lg:h-[650px] xl:h-[884px] w-full sm:w-[50%] object-cover"
          ></Image>
          <Image
            alt="Image"
            src={kitchen}
            className=" h-[219px] md:h-[250px] lg:h-[360px] xl:h-[512px] w-full sm:w-[50%] object-cover"
          ></Image>
        </div>
        <ImageGallery2 images={imgArray} />
        <div className=" lg:px-[88px] px-[20px] ">
          <p className=" mt-16 md:mt-44 mb-12 text-3xl sm:text-[45px] xl:text-[70px] heading-gloock">
            COMPLEMENTING PATTERNS
          </p>
          <div className="flex gap-3 overflow-x-auto sm:grid z-[100] relative grid-cols-1 place-content-center md:grid-cols-2 xl:grid-cols-3 pb-[200px] w-full snap-x snap-mandatory">
            {productsArray.map((prd, i) => (
              <div key={i} className="snap-start min-w-[80%] sm:min-w-0">
                <ProductCard border={false} Product={prd} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
