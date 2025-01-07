import bgImg from "../../public/images/home/home-page-bg.jpg";
import Header from "./components/Header";
import projectImg1 from "../../public/images/home/projectImg2.jpg";
import Image from "next/image";
import PlayBtn from "../../public/icons/playBtn";
const page = () => {
  const project = {
    year: "100 years of",
    titles: ["Innovation", "CRAFTMANSHIP", "Tradition"],
    featured: "Featured in Vogue magazine, Feb 2023",
    location: "LUXOTEL, Art Gallery Goa",
    designBy: "Designed by Xyz, Firdaus Designer",
    tilesImg: [],
  };
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
            <div className=" text-[12px]   border-red-400 md:text-base  w-full">
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
    </div>
  );
};
export default page;

const page = () => {
  return <div>Home page</div>;
};

export default page;
