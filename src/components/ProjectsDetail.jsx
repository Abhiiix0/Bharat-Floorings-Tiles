"use client";
import { DESIGNER_IMAGES } from "../utils";
import Link from "next/link";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import tajLogo from "../../public/svgs/tajLogo.svg";
import Intro from "./Intro";
import product from "../../public/images/gallery/galleryImg-1.jpg";
import LinesComp from "./LinesComp";

const ProjectsDetail = () => {
  return (
    <section className="relative overflow-hidden">
      <LinesComp />
      <div className="lg:px-[100px] px-[20px] relative">
        <h1 className="big-heading 3xl:mt-[143.4px] 3xl:mb-[124px] 2xl:mt-20 2xl:mb-36 xl:mt-16 xl:mb-28 lg:mb-24 md:mt-14 md:mb-20 mt-14 mb-16">
          Project
        </h1>
        <div className="flex items-center justify-between 2xl:mb-[15px]">
          <div
            onClick={() => history.back()}
            className="w-32 xl:w-36 2xl:w-40 flex gap-1 items-center 2xl:text-base xl:text-sm text-xs cursor-pointer link"
          >
            <RiArrowLeftLine className="arrow-left" />
            Back to projects
          </div>
          <Link
            href="about/press"
            className="w-40 xl:w-[180px] 2xl:w-52  flex  gap-1 items-center 2xl:text-base xl:text-sm text-xs link"
          >
            up next: HOTEL NAHAR
            <RiArrowRightLine className="arrow" />
          </Link>
        </div>
        <div className="2xl:mb-[54px]">
          <h2 className="3xl:text-[38.347px] 3xl:leading-[84.843px] 2xl:text-3xl 2xl:leading-[64px] lg:text-2xl lg:leading-[50px] text-xl leading-[40px] font-Inter font-medium">
            Fabien Charuau
          </h2>
          <h2 className="3xl:text-[38.347px] 3xl:leading-[84.843px] 2xl:text-3xl 2xl:leading-[64px] lg:text-2xl lg:leading-[50px] text-xl leading-[40px] font-Inter font-medium">
            Les Bouchons
          </h2>
          <p className="font-Inter xl:text-base xl:leading-[25.6px] text-sm leading-[22px] 3xl:w-[30%] lg:w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div>
        <Intro
          intro1={"1998"}
          intro2={"3 products"}
          intro3={"client TAJ HOTELS"}
        />
      </div>

      <div
        style={{
          backgroundImage: `url(${product.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="3xl:h-[1265px] 2xl:h-[950px] xl:h-[800px] lg:h-[700px] h-screen w-full relative"
      >
        <img
          className="absolute top-[20%] left-1/4 2xl:h-[104px] border-4 border-white xl:h-24 lg:h-20 md:h-16 h-14 2xl:w-[104px] xl:w-24 lg:w-20 md:w-16 w-14"
          src={DESIGNER_IMAGES[1].image.src}
        />
        <img
          className="absolute top-[80%]  2xl:h-[104px] border-4 border-white xl:h-24 lg:h-20 md:h-16 h-14 2xl:w-[104px] xl:w-24 lg:w-20 md:w-16 w-14 left-[18%]"
          src={DESIGNER_IMAGES[0].image.src}
        />
        <img
          className="absolute top-2/4 2xl:h-[104px] border-4 border-white xl:h-24 lg:h-20 md:h-16 h-14 2xl:w-[104px] xl:w-24 lg:w-20 md:w-16 w-14 left-[70%]"
          src={DESIGNER_IMAGES[2].image.src}
        />
      </div>
    </section>
  );
};

export default ProjectsDetail;
