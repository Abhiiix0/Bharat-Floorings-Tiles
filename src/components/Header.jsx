"use client";
import Image from "next/image";
import Logo from "../../public/svgs/headerLogo.svg";
import Menu from "../../public/icons/menu";
import BftLogo from "../../public/icons/bftLogo";
// import vds from "../../public/videos/headerBgVd.mp4";
import { useState } from "react";
import LinesComp from "./LinesComp";
const Header = ({ textColor, iconsColor, lines }) => {
  const navlinks = [
    {
      name: "Product",
      links: [
        [
          {
            name: "Designer tiles 7",
            links: [
              {
                name: "BFT + Designer",
                qty: 7,
                link: "/home",
                img: "../../../public/images/headerlinkimg1.jpg",
              },
              { name: "Heritage collection", link: "/home" },
              { name: "Centenary Range", link: "/home" },
              { name: "Made in India", link: "/home" },
              { name: "International Range", link: "/home" },
              { name: "Unitinta", link: "/home" },
              { name: "Borders", link: "/home" },
              { name: "Other Shapes", link: "/home" },
            ],
          },
          { name: "tarrazzo tiles", link: "/home" },
          { name: "micro cement", link: "/home" },
          { name: "Epoxy Terrazzo", link: "/home" },
        ],
        [
          {
            name: "Wall Tiles 4",
            qty: 4,
            links: [
              { name: "Alfresco Terrazzo", link: "/home" },
              { name: "Checkered tiles", link: "/home" },
              { name: "Anti slip Tiles", link: "/home" },
              { name: "Cement stamps", link: "/home" },
            ],
          },
          { name: "Outdoor Flooring", link: "/home" },
          {
            name: "BFT Surfaces",
            qty: 2,
            links: [
              { name: "BFT Subway Tiles 11", link: "/home" },
              { name: "Wallpapers", link: "/home" },
            ],
          },
          { name: "BFT Home", link: "/home" },
        ],
      ],
    },
    { name: "Service", link: "/about" },
    {
      name: "About",
      links: [
        { name: "About us", link: "/about" },
        { name: "Our Team", link: "/about" },
        { name: "Our Story", link: "/about" },
        { name: "Contact us", link: "/about" },
      ],
    },
    {
      name: "inspiration",
      link: "/inspiration",
    },
  ];
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentSubLinks, setCurrentSubLinks] = useState([]);
  const [hoverLinkImg, sethoverLinkImg] = useState("");
  // Function to show overlay
  const showOverlay = (HName, links = []) => {
    const bodys = document.getElementsByTagName("body");
    //scroll to top
    window.scrollTo(0, 0);
    bodys[0].style.overflow = "hidden";
    setOverlayVisible(true);
    setHoveredLink(HName);
    setCurrentSubLinks(links);
  };

  // Function to hide overlay
  const hideOverlay = () => {
    const bodys = document.getElementsByTagName("body");

    bodys[0].style.overflow = "auto";
    setCurrentSubLinks([]);
    setOverlayVisible(false);
    setHoveredLink("");
  };
  return (
    <header
      className={`max-w-[1920px]  border-black  h-fit mx-auto bg-cover flex flex-col justify-between bg-center overflow-hidden relative`}
    >
      {/* Background Video */}
      {isOverlayVisible && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[2000]"
          // src={require("../../public/videos/headerBgVd.mp4")}
          autoPlay
          muted
          loop
        />
      )}

      {lines ? <LinesComp /> : null}
      <div className={`${"pl-[20px] lg:pl-[100px]"} `}>
        {isOverlayVisible && (
          <div
            className="fixed top-0 left-0 w-full h-full  pointer-events-auto z-[2000]"
            onClick={hideOverlay} // Click on overlay hides it
          >
            <div className="max-w-[1920px] h-full relative flex-col pt-[180px] hidden lg:flex items-end justify-between  mx-auto">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-30"
                src={require("../../public/videos/headerBgVd.mp4")}
                autoPlay
                muted
                loop
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
              {currentSubLinks.length > 0 ? (
                <ul className=" relative z-[2150] flex justify-between flex-col lg:w-[800px] xl:w-[945px] 3xl:w-[1215px] pr-[20px] lg:pr-[100px] items-center ">
                  {currentSubLinks?.map((row, idx) => (
                    <div
                      key={idx}
                      className={`flex mb-  ${
                        idx === 0 && "border-b-[1px] pb-[20px] 3xl:pb-[52px]"
                      } border-white 3xl:mb-[52px] mb-[20px] h-full justify-between w-full`}
                    >
                      {Array?.isArray(row) ? (
                        row?.map((link, subIdx) => (
                          <li key={subIdx} className=" flex flex-col  gap-5">
                            <a
                              href={link?.link}
                              className="text-white   text-base xl:text-lg 3xl:text-xl uppercase font-semibold font-Inter hover:underline"
                              onClick={hideOverlay}
                            >
                              {link?.name}
                            </a>
                            {link?.links && (
                              <ul className=" ">
                                {link?.links?.map((sublink, subLinkIdx) => (
                                  <li
                                    key={subLinkIdx}
                                    onMouseEnter={() =>
                                      sethoverLinkImg(sublink?.img || "")
                                    }
                                  >
                                    <a
                                      href={sublink.link}
                                      className=" text-base 3xl:text-lg font-medium mb-1 text-white  hover:underline"
                                    >
                                      {sublink.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))
                      ) : (
                        <a
                          href=""
                          className="  header-about-links pl-[420px] xl:pl-[520px] 3xl:pl-[700px] h-fit uppercase text-lg text-white font-semibold"
                        >
                          {row?.name}
                        </a>
                      )}
                    </div>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No additional links available.</p>
              )}
              <div className=" text-white lg:w-[800px]  relative z-[50] xl:w-[945px] 3xl:w-[1215px] h-[80px]">
                <ul className=" flex justify-between mr-[411px]">
                  <li>Contact</li>
                  <li>T&Cs</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <nav className=" flex justify-between">
          <div className=" lg:bg-black w-fit z-[2200] lg:pt-[36px] lg:pb-[19px] lg:px-[16px]">
            <Image
              onClick={hideOverlay}
              src={Logo}
              alt=" Bft logo"
              className="hidden z-[2200] lg:block"
            ></Image>
            <BftLogo
              color={iconsColor}
              onClick={hideOverlay}
              size={46}
              className=" h-[46px] w-[46px] lg:hidden md:h-20 md:w-20 mt-5 md:mt-8"
            />
          </div>
          <div className="z-[2100]">
            <ul
              className={` ${
                isOverlayVisible && " border-b-2 border-white"
              }  ${textColor} z-[120]  h-[89px] font-Inter  font-semibold mt-[2rem] items-center hidden lg:flex `}
            >
              {navlinks?.map((nlink) => (
                <li
                  key={nlink.name}
                  onMouseEnter={() =>
                    showOverlay(nlink.name, nlink.links || [])
                  }
                  className={`${
                    hoveredLink === nlink?.name && "border-b-4 border-white"
                  }  h-full ${
                    nlink.name === navlinks[navlinks.length - 1].name
                      ? " pr-[20px] lg:pr-[100px]"
                      : " lg:pr-[150px] xl:pr-[200px] 3xl:pr-[290px]"
                  } flex  items-center ${
                    isOverlayVisible && "text-white"
                  } ${textColor} `}
                >
                  <a href="#">{nlink?.name}</a>
                </li>
              ))}
            </ul>
            <div className=" mt-[2.36rem] md:mt-10 lg:hidden">
              <Menu
                color={iconsColor}
                size={40}
                className=" w-[24px] h-[24px] mr-5 md:w-[40px] md:h-[40px]"
              ></Menu>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
