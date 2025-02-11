import Image from "next/image";
import React from "react";
import Remix from "../../public/icons/remix";
import tils from "../../public/images/product-details/tiles.png";

const GetAQuery = ({ open, onClose, tilsDesign }) => {
  const closeQuote = () => {
    onClose(true);
    const bodyDiv = document.getElementsByTagName("body");
    bodyDiv[0].style.overflow = "auto";
  };
  return (
    <>
      <section
        onClick={() => closeQuote()}
        className={` ${
          !open ? "block" : "hidden"
        }  w-full h-full z-[2251] absolute top-0 left-0 bg-black/30`}
      >
        {" "}
      </section>
      <section
        onMouseLeave={() => closeQuote()}
        className={`${
          open && " right-[-100%]"
        }  fixed top-0 pb-14 right-0 z-[2251]  transition-all  duration-1000 ease-in-out w-full sm:w-[440px] 3xl:w-[558px]  h-screen overflow-y-scroll bg-[#2A2523]`}
      >
        <div className=" grid grid-cols-4 grid-rows-2">
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
          <Image
            className=" h-[110px] w-[110px] 3xl:h-[141px] 3xl:w-[141px] object-cover"
            src={tilsDesign || tils}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className=" normal-text px-7 3xl:px-10 pt-7 3xl:pt-10">
          <div className=" flex items-start justify-between mb-9 3xl:mb-[52px]">
            <p className=" text-3xl 3xl:text-[2.5rem] flex items-start leading-[48px]  normal-text text-white">
              Contemporary Terrazo
            </p>
            <Remix
              color="white"
              className=" h-[35px] w-[35px] 3xl:h-[43px] 3xl:w-[40px]"
            ></Remix>
          </div>
          <div className=" font-medium leading-[35px] flex gap-4 text-white">
            <p>Tile size</p>
            <p>20cm x 20cm</p>
          </div>
          <div className=" font-medium leading-[35px] flex gap-4 text-white">
            <p className=" text-white/30">Starts from</p>
            <p className="text-[#8FDEAA]">600 per sqft.</p>
          </div>
          <div className=" flex overflow-hidden w-full flex-col md:flex-row mt-8 3xl:mt-12">
            <div className=" flex w-full md:w-[50%] flex-col  ">
              <label
                htmlFor=""
                className=" flex items-center border-b  py-5 md:py-0 justify-between text-base font-medium normal-text leading-[35px] text-white  sm:border-b-2 border-white"
              >
                TOTAL AREA IN SQFT <span className=" block md:hidden">500</span>
              </label>
              <input
                type="text"
                className=" hidden md:block text-xl h-12 3xl:h-[52px] border-b-2 bg-transparent text-white outline-none"
              />
            </div>
            <div className=" w-full md:w-[50%] flex flex-col">
              <label
                htmlFor=""
                className=" flex items-center justify-between   border-b text-base py-5 md:py-0 sm:font-medium normal-text leading-[35px] text-white  sm:border-b-2 border-white"
              >
                ESTIMATED COST <span className=" block md:hidden">500</span>
              </label>
              <input
                type="text"
                className=" text-xl hidden md:block h-12 3xl:h-[52px] pl-2 border-b-2 bg-transparent text-white outline-none"
              />
            </div>
          </div>
          <div className=" w-[197px] text-white/30 mt-3 mb-8 3xl:mb-[56px]">
            12 Tiles are required to cover this area
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 items-start">
            <input
              type="text"
              placeholder="Full name"
              className=" bg-transparent border-b-2 outline-none  text-[20px]  text-white pt-[31px]  "
            />
            <input
              type="text"
              placeholder="Phone"
              className=" md:pl-2 bg-transparent border-b-2 outline-none text-[20px]  text-white pt-[31px]  "
            />
            <input
              type="text"
              placeholder="email"
              className=" bg-transparent  text-[20px] outline-none text border-b-2 pt-[31px] text-white "
            />
            <input
              type="text"
              placeholder="City"
              className=" md:pl-2 bg-transparent border-b-2 outline-none text-[20px]  text-white pt-[31px]  "
            />
          </div>
          <div className=" w-full pt-[59px] xl:text-xl font-Inter leading-[32px]  flex flex-col  justify-center items-center mb-[19px]">
            <button className=" bg-white   h-14 3xl:h-[64px] flex justify-between align-self-center  items-center w-full">
              <p className=" mx-auto font-medium">Get a quote</p>
            </button>
            <p
              onClick={closeQuote}
              className=" text-center py-4 w-full  border text-white"
            >
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
    </>
  );
};

export default GetAQuery;
