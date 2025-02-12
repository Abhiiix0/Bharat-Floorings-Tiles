"use client";
import { DESIGNER_IMAGES } from "../../utils";
import Link from "next/link";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import tajLogo from "../../../public/svgs/tajLogo.svg";
import bftLogoX from  '../../../public/svgs/bftLogo-x.svg'
import design1 from '../../../public/svgs/design-1.svg'
import design3 from '../../../public/svgs/design-3.svg'
import product from "../../../public/images/gallery/galleryImg-1.jpg";
import LinesComp from "../LinesComp";

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
       <div className="mt-[52px] flex justify-between relative lg:px-[100px] px-[20px]">
       <div className="flex 3xl:gap-[52px] xl:gap-11 lg:gap-9 gap-8 2xl:h-[60] xl:h-14 lg:h-12 h-10 ">
          <div className="h-full flex xxl:gap-[14px] lg:gap-3 gap-2  items-center">
           <img src={design1.src} className="h-full xl:w-14 lg:w-12 w-10" alt="design-1" />
           <span className="title-el">Anulom Type A</span>
          </div>
          <div className="h-full flex 2xl:gap-[14px] lg:gap-3 gap-2 items-center">
           <img src={design3.src} className="h-full xl:w-14 lg:w-12 w-10" alt="design-3" />
           <span className="title-el">The CrossGrain</span>
          </div>
       </div>
       <div className="flex 3xl:gap-7 2xl:gap-5 xl:gap-4 lg:gap-3 gap-2 3xl:h-[66px] xl:h-14 lg:h-12  h-10  ">
        <img src={bftLogoX.src} alt="Bft logo" className="h-full lg:w-12  3xl:w-[66px] w-10 xl:w-14 " />
        <img src={tajLogo.src} alt="Taj logo" className="h-full lg:w-12  3xl:w-[66px] w-10 xl:w-14 " />
       </div>
       </div>
      <div className="lg:flex hidden justify-between items-center lg:px-[100px] px-[20px] 2xl:mt-[58px] xl:mt-12 lg:mt-10 mt-8 2xl:mb-[33px] xl:mb-7 mb-6">
        <span>1998</span>
        <span>3 products</span>
        <span>client Taj HOTELS</span>
      </div>

      <div
        style={{
          backgroundImage: `url(${product.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: 'cover'
        }}
        className="3xl:h-[1265px] h-screen w-full relative"
      >
        <img
          className="absolute top-[20%] left-1/4 3xl:h-[104px] border-4 border-white xl:h-20 lg:h-16 md:h-12 h-10 3xl:w-[104px] xl:w-20 lg:w-16 md:w-12 w-10"
          src={DESIGNER_IMAGES[1].image.src}
        />
        <img
          className="absolute top-[80%]  3xl:h-[104px] border-4 border-white xl:h-20 lg:h-16 md:h-12 h-10 3xl:w-[104px] xl:w-20 lg:w-16 md:w-12 w-10 left-[18%]"
          src={DESIGNER_IMAGES[0].image.src}
        />
        <img
          className="absolute top-2/4 3xl:h-[104px] border-4 border-white xl:h-20 lg:h-16 md:h-12 h-10 3xl:w-[104px] xl:w-20 lg:w-16 md:w-12 w-10 left-[70%]"
          src={DESIGNER_IMAGES[2].image.src}
        />
      </div>
    </section>
  );
};

export default ProjectsDetail;
