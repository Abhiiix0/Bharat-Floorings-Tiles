import Image from "next/image";
import React from "react";
import workbench1 from "../../../public/images/home/workbench1.jpg";
import workbench2 from "../../../public/images/home/workbench2.jpg";
import RightArrow from "../../../public/icons/RightArrow";
const WorkBench = () => {
  return (
    <section className=" bg-[#F4F4F4] relative">
      <div className="absolute hidden z-10 lg:flex w-full h-full px-[4px]   lg:px-[88px] top-0 left-0  justify-between">
        <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
      </div>
      <div className=" md:side-padding relative z-20 ">
        <div className="side-padding ">
          <p className=" heading-text text-[40px] lg:text-[100px] leading-[40px] lg:leading-[100px] lg:text-center pt-20 lg:pt-32 pb-2">
            Workbench
          </p>
          <p className=" text-xl lg:text-3xl lg:leading-[42px] normal-text lg:text-center max-w-[1180px] mx-auto">
            We encourage our customers to look at our designer tile collections,
            play with the colours and patterns, and come up with unique handmade
            tile selections.
          </p>
          <p className=" normal-text md:hidden block text-sm font-medium underline mt-16 mb-3">
            Change tile
          </p>
        </div>
        <div className="  bg-white   relative z-20  lg:mx-[100px]  md:mt-[84px] flex xl:flex-row flex-col-reverse ">
          <div className="   xl:w-[860px]">
            <Image
              src={workbench1}
              className=" w-full h-[508px] md:h-[876px]  xl:w-[860px] xl:h-[1167px] object-cover"
              alt="img"
            ></Image>
          </div>
          <div className="   md:p-4 xl:pl-[50px] 3xl:pl-[80px] flex md:block justify-between items-center  xl:w-[860px] normal-text   xl:pr-[60px] 3xl:pr-[103px] h-full">
            <div className=" hidden md:flex gap-16 justify-between xl:mt-[121px]">
              <p>Anulom (Type D)</p>
              <p className=" w-[389px]">
                Anulom is our stunning hexagonal rhythm 3D Tile Collection,
                where the artistry of design meets the allure of dimensionality,
                creating a mesmerizing visual experience for your spaces.
              </p>
            </div>
            <Image
              src={workbench2}
              alt="img"
              className=" md:mt-10  h-[150px] w-[150px] object-cover lg:w-fit lg:h-[572px]"
            ></Image>
            <div className="hidden md:flex justify-between xl:justify-start mt-14 gap-44">
              <p className="flex flex-col gap-4">
                Size
                <span>20 cm x 20 cm</span>
              </p>
              <p className=" flex flex-col gap-4">
                Thickness
                <span>Flooring - 23mm - 25mm</span>
                <span>Cladding - 16mm - 18mm</span>
              </p>
            </div>
            <p className=" md:hidden cursor-pointer normal-font font-medium text-sm sm:text-base mr-5 flex items-center justify-end gap-3">
              Continue on Workshop{" "}
              <RightArrow size={16} color="black"></RightArrow>
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex  mt-12  side-padding items-start justify-between">
          <div className=" w-full flex pb-[196px]">
            <div className=" bg-[#236A9A] w-[70px] h-[18px]"></div>
            <div className=" bg-[#DF998F] w-[70px] h-[18px]"></div>
            <div className=" bg-[#5BA9C9] w-[70px] h-[18px]"></div>
            <div className=" bg-white w-[70px] h-[18px]"></div>
            <div className=" bg-red-400 w-[70px] h-[18px]"></div>
          </div>
          <p className=" w-full text-center  underline font-mediumfont-medium normal-text">
            Change tile
          </p>
          <a
            href="/workspace"
            className=" cursor-pointer w-full hidden lg:flex normal-font font-medium text-sm sm:text-base mr-5  items-center justify-end gap-3"
          >
            Continue on Workshop <RightArrow size={16}></RightArrow>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkBench;
