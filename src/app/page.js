import bgImg from "../../public/images/home/home-page-bg.jpg";
import Header from "./components/Header";
import projectImg1 from "../../public/images/home/projectImg2.jpg";
import Image from "next/image";
import PlayBtn from "../../public/icons/playBtn";
import ImageGallery from "./components/ImageGallery";
import tiles1 from "../../public/images/tiles/tiles1.jpg";
import tiles2 from "../../public/images/tiles/tiles2.jpg";
import tiles3 from "../../public/images/tiles/tiles3.jpg";
import years100 from "../../public/images/home/100years.jpg";
import RightArrow from "../../public/icons/RightArrow";
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
        <Header textColor="text-white" iconsColor="text-black"></Header>
        <section className=" text-white side-padding h-[calc(100vh-65px)] md:h-[calc(100vh-112px)] lg:h-[calc(100vh-125px)]  flex flex-col  border-red-500 justify-between ">
          <div className="  pt-20 3xl:pt-64  h-full flex lg:block flex-col justify-center items-center  border-red-400 text-center md:text-start">
            <p className=" heading-text text-[2rem]  md:text-[5.5vw] 2xl:text-[87px] ">
              {project?.year}
            </p>
            <p className=" text-[2.6rem] md:text-[7.5vw] 2xl:text-[142px] lg:leading-[185px] font-Gloock uppercase">
              {project?.titles[1]}
            </p>
          </div>
          <div className=" normal-text mb-6  lg:mb-16  flex w-full">
            <div className="  border-red-400 md:text-base text-[12px]    w-full">
              <p>{project.location}</p>
              <p>{project.designBy}</p>
            </div>

            <p className=" w-full hidden md:flex text-center justify-center items-end ">
              {project.featured}
            </p>

            <p className=" text-[12px] md:text-base  md:w-full w-[110px] text-right flex justify-end items-end">
              View Projects
            </p>
          </div>
        </section>
      </section>
      <section className="relative ">
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px]  top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>

        <div className=" px-5 lg:px-[100px] font-Inter w-full ">
          <div className="  flex justify-between pt-10">
            <p className=" hidden md:block font-medium  leading-9">
              Who we are
            </p>
            <p className=" hidden md:block font-medium   leading-9">
              100 years old
            </p>
          </div>
          <div className="lg:flex gap-5 mt-[6.7rem] lg:pb-[186px] md:mt-[4.5rem] lg:mt-[7.5rem]">
            <div className=" w-full ">
              <p className=" heading-text text-[2.5rem] lg:text-[4.5rem] xl:text-[5.2rem] 3xl:text-[6.2rem] xl:w-[500px] md:leading-[100px]">
                Bharat Flooring and Tiles
              </p>
              <p className=" text-xl lg:text-[26px] 3xl:text-[30px] leading-7 lg:leading-10 mt-2 lg:mt-6 w-full 3xl:max-w-[680px]  ">
                For over a century, Bharat Floorings & Tiles has been the
                epitome of quality in handmade tile manufacturers in India.
              </p>
              <p className=" mt-8 lg:mt-16 mb-7 leading-7 lg:text-xl lg:max-w-[640px] lg:leading-8">
                Our dedicated commitment to innovation ensures you&apos;re
                choosing the best handcrafted cement tiles in the market.
                Heritage buildings and prestigious locations across the country
                boast Bharat Floorings & Tiles that have maintained their
                original charm despite decades of heavy use - a testament to our
                quality, durability and handmade tiles texture.
              </p>
            </div>
            <div className=" w-full text-right">
              <div className=" bg-red-400 md:mb-32 lg:mb-0 relative">
                <Image
                  src={projectImg1}
                  alt="project img"
                  className=" w-full lg:max-w-[859px]"
                ></Image>
                <PlayBtn
                  // color="black"
                  // size={61}
                  className=" h-[61px] w-[61px] md:w-9 md:h-9 absolute bottom-[42%] left-[42%] md:bottom-[30px]  md:left-[30px]"
                />
                <p className=" hidden md:block absolute bottom-0 left-20 text-white  text-[0.85rem] text-left h-[57px]  font-medium">
                  A century year old technique which is still relevant
                </p>
              </div>
              <p className=" mt-3 md:hidden text-[0.85rem] text-left h-[57px] mb-20 font-medium">
                A century year old technique which is still relevant
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery images={imgArray} />
      <section className="relative font-Inter pt-9 pb-10">
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px]  top-0 left-0  justify-between">
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
          <a className="  w-[150px] mb-4  md:w-full text-end" href="">
            View Projects
          </a>
        </div>
        <div className=" mt-[105px] lg:mt-56  side-padding ">
          <p className=" leading-10  font-Gloock text-[2.1rem] lg:text-[100px] lg:leading-[100px] text-start  md:text-center text-[#304941]">
            We blend computer-aided design with craftsmanship and the end result
            is a tailor-made custom tile which will last for generations.
            Already 100 years and counting...
          </p>
          <Image
            alt="img"
            className=" mx-auto w-40 mt-16 lg:mt-[72px]"
            src={years100}
          ></Image>
          <div className=" hidden lg:flex justify-between mt-[135px]">
            <p>4899 projects</p>
            <p>+3 million tiles placed</p>
            <p>100 years, 7 months, 6 days, 12 hours and 13 minutes</p>
          </div>
        </div>
      </section>

      <ImageGallery images={imgArray} />
      <section className="relative font-Inter pt-9 md:pt-0 pb-24 md:pb-[199px]">
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px]  top-0 left-0  justify-between">
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
              View Projects <RightArrow />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
export default page;

