"use client";
import Image from "next/image";
import Logo from "../../public/svgs/headerLogo.svg";
import Menu from "../../public/icons/menu";
import BftLogo from "../../public/icons/bftLogo";
import PlusIcon from "../../public/icons/PlusIcon";
import MinusIcon from "../../public/icons/MinusIcon";
import { useState } from "react";
import LinesComp from "./LinesComp";
import { Drawer } from "antd";
import CircleClose from "../../public/icons/CircleClose";
import { AnimatePresence } from "framer-motion";
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
                img: "/images/header/headerlinkimg1.jpg",
              },
              {
                name: "Heritage collection",
                link: "/home",
                img: "/images/header/Subtract.png",
              },
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
        { name: "OUR COMPANY", link: "/about" },
        { name: "CLIENTS", link: "/about" },
        { name: "PRESS", link: "/about" },
        { name: "EVENTS", link: "/about" },
        { name: "RESOURCES", link: "/about" },
        { name: "CAREERS", link: "/about" },
        { name: "TESTIMONIALS", link: "/about" },
      ],
    },
    {
      name: "inspiration",
      link: "/inspiration",
    },
  ];
  const [openSection, setOpenSection] = useState(null);
  const [openSubSections, setOpenSubSections] = useState({});

  const handleToggle = (index) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  const handleSubToggle = (subIndex) => {
    setOpenSubSections((prev) => ({
      ...prev,
      [subIndex]: !prev[subIndex],
    }));
  };
  const AvailableLink = ["Products", "About"];
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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header
      className={`max-w-[1920px]   w-full h-[88px] mx-auto bg-cover flex flex-col justify-between bg-center  relative`}
    >
      {/* Background Video */}
      {isOverlayVisible && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[500]"
          autoPlay
          muted
          loop
        />
      )}

      {lines ? <LinesComp /> : null}
      <div className={`   pl-[20px] lg:pl-[100px] `}>
        {isOverlayVisible && (
          <div
            className="fixed hidden xl:block top-0 left-0 w-full h-full  pointer-events-auto z-[1000]"
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
              {hoverLinkImg && (
                <div className=" absolute  w-[350px] top-0 left-0 h-full z-[1260]">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src={hoverLinkImg?.toString()}
                      alt="hoverLinkImg"
                      className="w-full"
                    ></Image>
                    <Image
                      width={100}
                      height={100}
                      src={hoverLinkImg?.toString()}
                      alt="hoverLinkImg"
                      className="w-full"
                    ></Image>
                    <Image
                      width={100}
                      height={100}
                      src={hoverLinkImg?.toString()}
                      alt="hoverLinkImg"
                      className="w-full"
                    ></Image>
                  </div>
                </div>
              )}
              {hoveredLink === "Product" ? (
                <>
                  {currentSubLinks.length > 0 ? (
                    <ul className=" relative z-[1156] flex justify-between flex-col lg:w-[800px] xl:w-[945px] 3xl:w-[1215px] pr-[20px] lg:pr-[100px] items-center ">
                      {currentSubLinks?.map((row, idx) => (
                        <div
                          key={idx}
                          className={`flex mb-  ${
                            idx === 0 &&
                            "border-b-[1px] pb-[20px] 3xl:pb-[52px]"
                          } border-white 3xl:mb-[52px] mb-[20px] h-full justify-between w-full`}
                        >
                          {Array?.isArray(row) ? (
                            row?.map((link, subIdx) => (
                              <li
                                key={subIdx}
                                className=" flex flex-col  gap-5"
                              >
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
                                        onMouseEnter={() => {
                                          console.log(sublink?.img);
                                          sethoverLinkImg(sublink?.img || "");
                                        }}
                                        onMouseLeave={() => sethoverLinkImg("")}
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
                    <p className="text-gray-500">
                      No additional links available.
                    </p>
                  )}
                </>
              ) : (
                <div className=" w-[370px] xl:w-[420px] 3xl:w-[510px]  relative z-[2150]">
                  <div className=" flex flex-col gap-4">
                    {currentSubLinks?.map((row, idx) => (
                      <a
                        href={row?.link}
                        key={idx}
                        className={`text-white   text-base xl:text-lg 3xl:text-xl uppercase font-semibold font-Inter hover:underline`}
                      >
                        {row?.name}
                      </a>
                    ))}
                  </div>
                </div>
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
        {isOverlayVisible && (
          <span
            className=" cursor-pointer z-[2503] fixed top-2 right-2"
            onClick={hideOverlay}
          >
            <CircleClose />
          </span>
        )}
        <nav className=" flex justify-between">
          <div
            className={` lg:bg-black w-fit ${
              !hoverLinkImg && "z-[1102]"
            }  lg:pt-[36px] lg:pb-[19px] lg:px-[16px]`}
          >
            <Image
              onClick={hideOverlay}
              src={Logo}
              alt=" Bft logo"
              className="hidden lg:block"
            ></Image>
            <BftLogo
              color={iconsColor}
              onClick={hideOverlay}
              size={46}
              className=" h-[46px] w-[46px] lg:hidden md:h-20 md:w-20 mt-5 md:mt-8"
            />
          </div>
          <div className="z-[1105] relative">
            <ul
              className={` ${
                isOverlayVisible && " border-b-2 border-white"
              }  ${textColor} z-[1105] relative h-[89px] font-Inter  font-semibold mt-[2rem] items-center hidden xl:flex `}
            >
              {navlinks?.map((nlink) => (
                <li
                  key={nlink.name}
                  onMouseEnter={() =>
                    showOverlay(nlink.name, nlink.links || [])
                  }
                  className={`${
                    hoveredLink === nlink?.name && "border-b-2 border-white"
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
            {!open && (
              <div
                onClick={showDrawer}
                className=" mt-[2.36rem] relative z-50 md:mt-10 xl:hidden"
              >
                <Menu
                  color={iconsColor}
                  size={40}
                  className=" w-[24px] h-[24px]  mr-5 md:w-[40px] md:h-[40px]"
                ></Menu>
              </div>
            )}
          </div>
        </nav>
      </div>
      <Drawer
        open={open}
        closeIcon={false}
        className=""
        headerStyle={{ border: "none" }}
        title={
          <div className=" flex justify-between items-center">
            <BftLogo
              color="black"
              onClick={hideOverlay}
              size={46}
              className=" h-[46px] w-[46px]"
            />
            <div className=" h-fit w-fit" onClick={onClose}>
              <CircleClose color="black" size={24} />
            </div>
          </div>
        }
        onClose={onClose}
      >
        <div className="pt-4">
          {navlinks?.map((link, i) => (
            <div key={i}>
              {/* Main Section */}
              <div
                className="capitalize border-b-2 border-black font-Inter font-semibold text-[#2A2523] py-5 cursor-pointer flex flex-col w-full justify-between items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="w-full">
                  <span className="w-full flex justify-between items-center">
                    {link?.name}
                    {link?.links && (
                      <span>
                        {openSection === i ? (
                          <MinusIcon size={22} />
                        ) : (
                          <PlusIcon size={22} />
                        )}
                      </span>
                    )}
                  </span>
                  {openSection === i && link?.links && (
                    <div className="pl-4 mt-2 w-full">
                      {link.links.flat().map((sublink, subIndex) => (
                        <div key={subIndex} className="py-3 border-b">
                          {/* Subsection Header */}
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing the main section
                              handleSubToggle(`${i}-${subIndex}`);
                            }}
                          >
                            <a
                              href={sublink.link}
                              className="font-semibold font-Inter uppercase text-[#2A2523] w-full"
                            >
                              {sublink.name}
                            </a>
                            {sublink?.links && (
                              <span>
                                {openSubSections[`${i}-${subIndex}`] ? (
                                  <MinusIcon size={16} />
                                ) : (
                                  <PlusIcon size={16} />
                                )}
                              </span>
                            )}
                          </div>

                          {/* Sub-sub-links */}
                          {openSubSections[`${i}-${subIndex}`] &&
                            sublink?.links && (
                              <div className="pl-4 mt-2">
                                {sublink.links.map(
                                  (subSubLink, subSubIndex) => (
                                    <a
                                      key={subSubIndex}
                                      href={subSubLink.link}
                                      className="block py-2 text-[#2A2523] font-medium"
                                    >
                                      {subSubLink.name}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </span>
              </div>

              {/* Subsection Rendering */}
            </div>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
