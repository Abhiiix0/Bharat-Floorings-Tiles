"use client";
import { OUR_SERVICES_PAGE } from "../utils";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import LinesComp from "./LinesComp";

const OurServices = () => {
  const [layout, setLayout] = useState(OUR_SERVICES_PAGE[0]);
  return (
    <section className="relative overflow-hidden">
      <LinesComp />
      <div className="relative lg:px-[100px] px-[20px]">
        <h1 className="big-heading 3xl:mt-[275.4px] 3xl:mb-[82px] 2xl:mt-52 2xl:mb-16 xl:mt-40 xl:mb-14 lg:mb-12 md:mt-28 md:mb-10 mt-20 mb-10">
          Our Services
        </h1>
        <div className=" rounded-t-md lg:rounded-none  grid-cols-1 lg:grid-cols-3 bg-[#EBEBEB] h-10 cursor-pointer relative grid">
          <div
            className={`effect hidden xl:block absolute bg-black w-1/3 z-0 h-full ${
              layout.designType === "CUSTOM TILE DESIGN"
                ? "ml-[33.33%]"
                : layout.designType === "TILE INSTALLATION SERVICES"
                ? "ml-[67%]"
                : layout.designType === "FLOOR DESIGN LAYOUTS"
                ? "ml-0"
                : null
            }`}
          ></div>
          <div
            onClick={() => setLayout(OUR_SERVICES_PAGE[0])}
            className={`flex text-[13px] font-medium md:text-base rounded-t-lg lg:rounded-none  h-10 items-center justify-center z-10 ${
              layout.designType === "FLOOR DESIGN LAYOUTS"
                ? "text-white bg-black"
                : "text-black bg-gray-200"
            }`}
          >
            {" "}
            FLOOR DESIGN LAYOUTS
          </div>
          <div
            onClick={() => setLayout(OUR_SERVICES_PAGE[1])}
            className={`flex items-center text-[13px] font-medium md:text-base  h-10 justify-center z-10 ${
              layout.designType === "CUSTOM TILE DESIGN"
                ? "text-white bg-black"
                : "text-black bg-gray-200"
            }`}
          >
            {" "}
            CUSTOM TILE DESIGN{" "}
          </div>
          <div
            onClick={() => setLayout(OUR_SERVICES_PAGE[2])}
            className={`flex  items-center text-[13px]  rounded-b-md lg:rounded-none font-medium md:text-base h-10 justify-center z-10 ${
              layout.designType === "TILE INSTALLATION SERVICES"
                ? "text-white bg-black"
                : "text-black bg-gray-200"
            }`}
          >
            {" "}
            TILE INSTALLATION SERVICES{" "}
          </div>
        </div>
        <div className="h-auto flex mt-[140px] lg:flex-row flex-col justify-between 3xl:mt-[103px] 2xl:mt-20 xl:mt-14 3xl:mb-[191px] 2xl:mb-36 xl:mb-28 lg:mt-10 lg:mb-20 mb-10">
          <div className="xl:py-10 lg:py-8 py-6">
            <h1 className="2xl:text-[100px] 2xl:leading-[100px] md:text-5xl text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal">
              {layout.designType
                .toLowerCase()
                .split("  ")
                .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
                .join(" ")}
            </h1>
            <p className="para-big xl:mt-10 xl:mb-20 lg:mt-7 lg:mb-14 mt-5 mb-10 lg:pr-28">
              Customized flooring solutions: <br /> Where your vision meets our
              expertise
            </p>
            {layout.designInfo.map((el) => (
              <p key={el.id} className="para-medium lg:pr-28">
                {el.info}
              </p>
            ))}
            <Link
              href="/service"
              className="border-black border-[1px] justify-center w-full sm:w-72 2xl:mt-16 xl:mt-12 lg:mt-8 mt-6 xl:pl-3 pl-3 2xl:pl-7 link link-el"
            >
              Start your floor journey now!{" "}
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
          <img
            alt={`${layout.designType} image`}
            className="3xl:h-[1008px] 2xl:h-[850px] xl:h-[700px] lg:h-[600px] 3xl:min-w-[848px] 2xl:min-w-[650px] xl:min-w-[500px] lg:min-w-96 w-full object-cover md:h-[500px] rounded-md h-[335px]"
            src={layout.image.src}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
