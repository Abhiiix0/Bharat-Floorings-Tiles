import bgImg from "../../public/images/home/home-page-bg.jpg";
import Header from "../components/Header";
import projectImg1 from "../../public/images/home/projectImg2.jpg";
import Image from "next/image";
import PlayBtn from "../../public/icons/playBtn";
import ImageGallery from "../components/ImageGallery";
import tiles1 from "../../public/images/tiles/tiles1.jpg";
import tiles2 from "../../public/images/tiles/tiles2.jpg";
import tiles3 from "../../public/images/tiles/tiles3.jpg";
import years100 from "../../public/images/home/100years.jpg";
import RightArrow from "../../public/icons/RightArrow";
import WorkBench from "../components/home/WorkBench";

//products
import product1 from "../../public/images/home/product1.jpg";
import ProductCard from "../components/home/ProductCard";
import Manufacture from "../components/home/Manufracture";
import RotatingTextEffect from "../components/home/RotatingTextEffect";

// Manufracture
// import manufracture1 from "../../public/images/home/manufracture.jpg";
// import Manufacture from "./components/home/Manufracture";
// import RotatingTextEffect from "./components/home/RotatingTextEffect";
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

  const products = [
    {
      id: 1,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 2,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 3,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 4,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 5,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 6,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 7,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
    {
      id: 8,
      name: "Designer",
      color: 20,
      designs: 10,
      image: product1,
    },
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
        <section className=" text-white side-padding  h-[calc(100vh-70px)] md:h-[calc(100vh-120px)] lg:h-[calc(100vh-130px)]  flex flex-col justify-between   border-red-500  ">
          <div className="    h-full flex flex-col justify-center xl:justify-end pb-[50px] lg:pb-[70px]  3xl:pb-[214px]   border-red-400 text-center xl:text-start">
            <p className=" heading-text mb-1 text-[1.6rem] sm:text-[2rem]  md:text-[4rem] 3xl:text-[87px] ">
              {project?.year}
            </p>
            <RotatingTextEffect words={project?.titles} />
          </div>
          <div className=" normal-text mb-6  lg:mb-10   flex w-full">
            <div className=" gap-2 md:gap-7 3xl:gap-9 flex flex-col-reverse md:flex-col w-full ">
              <div className=" flex gap-5">
                {project?.tilesImg.map((img, i) => (
                  <Image
                    src={img}
                    key={i}
                    alt=" img"
                    className=" h-[50px] w-[50px] md:w-[30px] md:h-[30px] 3xl:w-[60px] 3xl:h-[60px] "
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

            <div className=" flex  justify-end md:w-full  w-[180px]">
              <p className=" text-[10px] cursor-pointer  w-[125px] lg:w-[150px]  hover:gap-6 transition-all duration-200 ease-in-out sm:text-[12px] lg:text-base  text-right gap-2 md:gap-4 flex justify-start items-end">
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
      <section className="relative ">
        <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px] z-[-1]  top-0 left-0  justify-between">
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
          <div className="lg:flex gap-5 mt-[6.7rem] lg:pb-[200px] md:mt-[4.5rem] lg:mt-[7.5rem]">
            <div className=" w-full ">
              <p className=" heading-text text-[2.5rem] lg:text-[4.5rem] xl:text-[5.2rem] 3xl:text-[6.3rem] xl:w-[500px] md:leading-[100px]">
                Bharat Flooring and Tiles
              </p>
              <p className=" text-xl lg:text-[26px] 3xl:text-[30px] leading-7 lg:leading-10 mt-2 lg:mt-6 w-full 3xl:max-w-[680px]  ">
                For over a century, Bharat Floorings & Tiles has been the
                epitome of quality in handmade tile manufacturers in India.
              </p>
              <p className=" mt-8 lg:mt-20 leading-7 lg:text-xl lg:max-w-[640px] lg:leading-8">
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
            className="  w-[150px] md:mb-4  flex gap-2 justify-end items-center  md:w-full text-end"
            href=""
          >
            View Projects <RightArrow size={16} color="black" />
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
            className=" mx-auto  h-[7.5rem] w-[5.66rem] mt-16 lg:mt-[72px]"
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
      <section className=" relative">
        <div className="absolute hidden z-10 lg:flex w-full h-full px-[4px] lg:px-[88px]   top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className=" relative  z-20">
          <div className=" hidden  side-padding md:flex pt-[45px] pb-28  justify-between font-Inter font-medium">
            <p>60 Products</p>
            <p>30 colors</p>
            <p>100 Years</p>
          </div>
          <div className="  side-padding flex gap-9 2xl:gap-[70px] flex-col xl:flex-row">
            <p className=" pt-[74px] md:pt-0 text-[40px] leading-[40px] lg:text-[100px] 3xl:w-full lg:leading-[100px] font-Gloock">
              Products
            </p>
            <div className=" w-full flex items-start justify-between">
              <p className=" leading-6 w-[550px] font-Inter  text-base ">
                From exquisite handcrafted cement tiles that bring timeless
                beauty to your space, to elegant terrazzo floors that exude
                grandeur, our collection of decorative concrete, outdoor floors,
                micro cement overlays, wallpapers, bespoke products, and more,
                offers limitless design possibilities. Let your imagination soar
                as you discover the perfect flooring solution that transforms
                ordinary spaces into extraordinary works of art.
              </p>
              <p className=" hidden w-fit mb-4 md:flex  md:items-start justify-end  ">
                <a
                  className=" border  justify-center items-center flex gap-3 border-black text-[14px] md:text-base  md:w-fit md:px-5 md:py-[15px] "
                  href="#"
                >
                  View Projects
                  <RightArrow color="black" />
                </a>
              </p>
            </div>
          </div>
          <div className=" pb-[97px] xl:pb-[200px]">
            <div className=" flex flex-row z-30 custom-scrollbar overflow-x-auto gap-5 lg:gap-8 whitespace-nowrap  pt-[65px] md:pt-[100px]">
              {products.map((product, index) => (
                <div className=" w-[573px]" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
