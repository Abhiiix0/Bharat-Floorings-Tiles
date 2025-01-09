"use client";
import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import bgImg from "../../../public/images/products/headerbg.jpg";
import RightArrow from "../../../public/icons/RightArrow";
import ProductCard from "../components/products/ProductCard";
import PImage from "../../../public/images/products/product.jpg";
import tiles1 from "../../../public/images/products/Stiles1.png";
import tiles2 from "../../../public/images/products/Stiles2.jpg";
const Page = () => {
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

  const products = [
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
    {
      name: "Terrazo 73",
      link: "",
      tiles: [tiles1, tiles2, tiles1, PImage],
    },
  ];
  const toggleLinks = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" 3xl:h-[435px] h-[360px]"
      >
        <Header textColor="text-white" />
      </section>
      <section className="relative">
        <div className="absolute hidden lg:flex w-full h-full px-[20px] lg:px-[88px] top-0 left-0 justify-between">
          <div className="w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className="w-full border border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className="w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className="flex flex-col  px-[20px] lg:px-[88px]  relative z-[20]">
          <div className=" border-b w-full h-[455px] flex lg:px-[12px]">
            <div className=" w-[33.3%] border-t pt-[120px] ">
              <p className=" text-[80px] 3xl:text-[100px] heading-gloock leading-[100px]">
                Designer Tiles
              </p>
            </div>
            <div className=" w-[64.6%]  pt-[120px] pl-[68px]">
              <p className="max-w-[648px] w-[648px] 3xl:max-w-[848px] 3xl:w-[848px]">
                For over a century, Bharat Floorings & Tiles has been the
                epitome of quality in handmade tile manufacturers in India. Our
                dedicated commitment to innovation ensures you&apos;re choosing
                the best handcrafted cement tiles in the market. Heritage
                buildings and prestigious locations across the country boast
                Bharat Floorings & Tiles that have maintained their original
                charm despite decades of heavy use - a testament to our quality,
                durability and handmade tiles texture.
              </p>
            </div>
          </div>
          <div className="flex relative z-[20] ">
            {/* Left Sidebar */}
            <div className=" w-[33.3%] sticky top-4 z-[99] h-fit  border-red-400">
              <p className="font-Inter text-[13px]  lg:pl-[12px] flex items-center  h-[121px]">
                COLLECTIONS
              </p>
              <div className=" w-[310px] 3xl:w-[412px] mt 3xl:mt-[45px]  lg:ml-[12px]">
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

            {/* Right Section */}
            <div className="w-[66.6%] grid grid-cols-2  border-red-400">
              <div className="h-[122px] col-span-2 border-y flex items-center px-[6%] 3xl:px-[8%]">
                <p className="text-[13px] font-semibold normal-text tracking-wide">
                  DESIGNER TILES
                </p>
              </div>
              {products.map((prd, i) => (
                <ProductCard key={i} Product={prd} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
