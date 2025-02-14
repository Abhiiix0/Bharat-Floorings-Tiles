import bgImg from "../../public/images/home/home-page-bg.jpg";
import Header from "../components/Header";
import Image from "next/image";
import ImageGallery from "../components/ImageGallery";
import tiles1 from "../../public/images/tiles/tiles1.jpg";
import tiles2 from "../../public/images/tiles/tiles2.jpg";
import tiles3 from "../../public/images/tiles/tiles3.jpg";
import years100 from "../../public/images/home/100years.jpg";
import RightArrow from "../../public/icons/RightArrow";
import WorkBench from "../components/home/WorkBench";
import ProductSlider from "../components/home/ProductSlider";
import VideoSection from "../components/home/VideoSection";
//products
import product1 from "../../public/images/home/product1.jpg";
import Manufacture from "../components/home/Manufracture";
import RotatingTextEffect from "../components/home/RotatingTextEffect";

const page = () => {
  const project = {
    year: "100 years of",
    titles: ["Innovation", "CRAFTMANSHIP", "Tradition"],
    featured: "Featured in Vogue magazine, Feb 2023",
    location: "LUXOTEL, Art Gallery Goa",
    designBy: "Designed by Xyz, Firdaus Designer",
    tilesImg: [tiles1, tiles2, tiles3],
  };

  const imgArray = [
    "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726221618316-ea7b80ca135e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1733259782090-d33273213e83?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 20px 20px 200px rgba(0, 0, 0, 1)", // Inner shadow
        }}
        className=" h-screen"
      >
        <Header textColor="text-white"></Header>
        <section className=" text-white side-padding   h-[calc(100vh-90px)]  flex flex-col justify-between  ">
          <div className="   h-full flex flex-col justify-center xl:justify-end pb-[50px] lg:pb-[70px]  3xl:pb-[200px] text-center xl:text-start">
            <p className=" heading-text mb-1 text-[1.6rem] sm:text-[2rem]  md:text-[4rem] 3xl:text-[87px] ">
              {project?.year}
            </p>
            <RotatingTextEffect words={project?.titles} />
          </div>
          <div className=" normal-text mb-6   lg:mb-10   flex w-full">
            <div className=" gap-2 md:gap-7 3xl:gap-9 flex flex-col-reverse md:flex-col w-full ">
              <div className=" flex gap-5">
                {project?.tilesImg.map((img, i) => (
                  <Image
                    src={img}
                    key={i}
                    alt=" img"
                    className=" h-[50px] rounded overflow-hidden w-[50px] md:w-[30px] md:h-[30px] 3xl:w-[60px] 3xl:h-[60px] "
                  ></Image>
                ))}
              </div>
              <div className="  border-red-400 lg:text-base text-[10px] sm:text-[12px]    w-full">
                <p>{project.location}</p>
                <p>{project.designBy}</p>
              </div>
            </div>

            <p className=" w-full hidden md:flex text-[12px] lg:text-base text-center justify-center items-end ">
              {project.featured}
            </p>

            <div className=" flex mb-3 md:mb-0  justify-end md:w-full  w-[180px]">
              <p className=" text-sm cursor-pointer  w-[125px] lg:w-[150px]  hover:gap-6 transition-all duration-200 ease-in-out md:text-[12px] lg:text-base  text-right gap-2 md:gap-4 flex justify-start items-end">
                View Projects{" "}
                <RightArrow
                  size={20}
                  color="white"
                  className=" w-4 h-4 md:h-5 md:w-5"
                />
              </p>
            </div>
          </div>
        </section>
      </section>
      <VideoSection />

      <ImageGallery images={imgArray} />
      <section className="relative font-Inter pt-9 pb-[96px]">
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px] z-[-1]  top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className=" md:text-base text-[12px]   md:pt-14  flex justify-between items-end   md:items-start side-padding">
          <div className="  w-full text-start">
            <p>{project?.location}</p>
            <p>{project?.designBy}</p>
            <div className=" flex gap-4 mt-5">
              {project?.tilesImg.map((img, i) => (
                <Image
                  alt="img"
                  className=" w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] "
                  src={img}
                  key={i}
                ></Image>
              ))}
            </div>
          </div>
          <p className="  w-full text-center hidden lg:block">
            {project?.featured}
          </p>
          <a
            className="  w-[180px] text-sm md:text-base  mb-4 text  flex gap-2 justify-end items-center  md:w-full text-end"
            href=""
          >
            View Projects <RightArrow size={16} color="black" />
          </a>
        </div>
        <div className=" mt-[105px] lg:mt-56  side-padding ">
          <p className=" leading-10  font-Gloock text-[2.1rem] md:text-5xl lg:text-7xl 3xl:text-[100px] lg:leading-[100px] text-start  md:text-center text-[#304941]">
            We blend computer-aided design with craftsmanship and the end result
            is a tailor-made custom tile which will last for generations.
            Already 100 years and counting...
          </p>
          <Image
            alt="img"
            className=" mx-auto   w-[10rem] lg:w-24 mt-16 lg:mt-[72px]"
            src={years100}
          ></Image>
          <div className=" hidden lg:flex justify-between mt-[135px]">
            <p>4899 projects</p>
            <p>+3 million tiles placed</p>
            <p>100 years, 7 months, 6 days, 12 hours and 13 minutes</p>
          </div>
        </div>
      </section>

      <WorkBench />
      <ProductSlider />
      <ImageGallery images={imgArray} />
      <section className="relative font-Inter pt-9 md:pt-0 pb-24 xl:pb-[199px]">
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px] z-[-1] top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className=" md:text-base text-[12px]  md:pt-14  flex justify-between items-end md:items-start side-padding">
          <div className="  w-full text-start">
            <p>{project?.location}</p>
            <p>{project?.designBy}</p>
            <div className=" flex gap-4 mt-5">
              {project?.tilesImg.map((img, i) => (
                <Image alt="img" src={img} key={i}></Image>
              ))}
            </div>
          </div>
          <p className="  w-full text-center hidden lg:block">
            {project?.featured}
          </p>
          <p className="  w-[260px] mb-4 flex   md:items-start justify-end  md:w-full">
            <a
              className=" md:border  justify-center items-center flex gap-3 border-black text-[14px] md:text-base  md:w-fit md:px-5 md:py-[15px] "
              href="#"
            >
              View Projects <RightArrow size={16} color="black" />
            </a>
          </p>
        </div>
      </section>

      <Manufacture />
    </div>
  );
};
export default page;
