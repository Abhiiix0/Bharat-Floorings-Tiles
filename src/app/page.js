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

import workbench1 from "../../public/images/home/workbench1.jpg";
import workbench2 from "../../public/images/home/workbench2.jpg";

//products
import product1 from "../../public/images/home/product1.jpg";
import ProductCard from "./components/home/ProductCard";
import Manufacture from "./components/home/Manufracture";
import RotatingTextEffect from "./components/home/RotatingTextEffect";

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
          <div className="    h-full flex flex-col justify-center md:justify-end pb-[50px] lg:pb-[70px]  3xl:pb-[214px]   border-red-400 text-center md:text-start">
            <p className=" heading-text mb-1 text-[1.6rem] sm:text-[2rem]  md:text-[5.5vw] 2xl:text-[87px] ">
              {project?.year}
            </p>
            <RotatingTextEffect words={project?.titles} />
          </div>
          <div className=" normal-text mb-6  lg:mb-10   flex w-full">
            <div className=" gap-2 md:gap-7 3xl:gap-9 flex flex-col w-full ">
              <div className=" flex gap-5">
                {project?.tilesImg.map((img, i) => (
                  <Image
                    src={img}
                    key={i}
                    alt=" img"
                    className=" h-6 w-6 md:w-[30px] md:h-[30px] 3xl:w-[60px] 3xl:h-[60px] "
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

            <p className=" text-[10px] sm:text-[12px] lg:text-base  md:w-full w-[180px] text-right gap-2 md:gap-4 flex justify-end items-end">
              View Projects{" "}
              <RightArrow
                size={20}
                color="white"
                className=" w-4 h-4 md:h-5 md:w-5"
              />
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
        <div className=" md:text-base text-[12px]   md:pt-14  flex justify-between items-start  md:items-start side-padding">
          <div className="  w-full text-start">
            <p>{project?.location}</p>
            <p>{project?.designBy}</p>
            <div className=" flex gap-4 mt-5">
              {project?.tilesImg.map((img, i) => (
                <Image
                  alt="img"
                  className=" h-6 w-6 md:w-[30px] md:h-[30px] 3xl:w-[60px] 3xl:h-[60px] "
                  src={img}
                  key={i}
                ></Image>
              ))}
            </div>
          </div>
          <p className="  w-full text-center hidden lg:block">
            {project?.featured}
          </p>
          <a className="  w-[150px] mb-4   md:w-full text-end" href="">
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

      <section className=" bg-[#F4F4F4] relative">
        <div className="absolute hidden z-10 lg:flex w-full h-full px-[4px] lg:px-[88px] top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className=" md:side-padding ">
          <div className="side-padding ">
            <p className=" heading-text text-[40px] lg:text-[100px] leading-[40px] lg:leading-[100px] lg:text-center pt-20 lg:pt-32 pb-2">
              Workbench
            </p>
            <p className=" text-xl lg:text-3xl lg:leading-[42px] normal-text lg:text-center max-w-[1180px] mx-auto">
              We encourage our customers to look at our designer tile
              collections, play with the colours and patterns, and come up with
              unique handmade tile selections.
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
            <div className="  md:p-4 xl:pl-[50px] flex md:block justify-between items-center 3xl:pl-[80px] xl:w-[860px] normal-text   xl:pr-[60px] 3xl:pr-[103px] h-full">
              <div className=" hidden md:flex gap-16 justify-between xl:mt-[121px]">
                <p>Anulom (Type D)</p>
                <p className=" w-[389px]">
                  Anulom is our stunning hexagonal rhythm 3D Tile Collection,
                  where the artistry of design meets the allure of
                  dimensionality, creating a mesmerizing visual experience for
                  your spaces.
                </p>
              </div>
              <Image
                src={workbench2}
                alt="img"
                className=" md:mt-10 md:mx-auto h-[150px] w-[150px] md:w-fit md:h-[572px]"
              ></Image>
              <div className="hidden md:flex justify-between xl:justify-start mt-14 gap-44">
                <p>
                  Size <br /> 20 cm x 20 cm
                </p>
                <p>
                  Thickness <br /> Flooring - 23mm - 25mm <br /> Cladding - 16mm
                  - 18mm
                </p>
              </div>
              <p className=" md:hidden normal-font font-medium text-sm sm:text-base mr-5 flex items-center justify-end gap-3">
                Continue on Workshop <RightArrow color="black"></RightArrow>
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
            <p className=" w-full hidden lg:flex normal-font font-medium text-sm sm:text-base mr-5  items-center justify-end gap-3">
              Continue on Workshop <RightArrow size={16}></RightArrow>
            </p>
          </div>
        </div>
      </section>
      <section className=" relative">
        <div className="absolute hidden z-10 lg:flex w-full h-full px-[4px] lg:px-[88px]   top-0 left-0  justify-between">
          <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
          <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
        </div>
        <div className=" side-padding relative  z-20">
          <div className=" hidden md:flex pt-[45px] pb-28  justify-between font-Inter font-medium">
            <p>60 Products</p>
            <p>30 colors</p>
            <p>100 Years</p>
          </div>
          <div className=" flex gap-9 2xl:gap-[70px] flex-col xl:flex-row">
            <p className=" pt-[74px] md:pt-0 text-[40px] leading-[40px] lg:text-[100px] 3xl:w-full lg:leading-[100px] font-Gloock">
              Products
            </p>
            <div className=" w-full flex items-start justify-between">
              <p className=" leading-6 w-[550px]   text-base ">
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
                  View Projects<RightArrow color="black" />
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
              View Projects <RightArrow color="black" />
            </a>
          </p>
        </div>
      </section>
      {/* <div className="relative">
        <div className="pt-[45px] px-[104px] bg-[#2A2523] sticky top-0">
          <div className="flex text-[#F6F5EC] justify-between">
            <p>6 steps</p>
            <p>4 hours</p>
            <p>Handmade</p>
          </div>
          <div className="mt-[120px]">
            <h3 className="3xl:text-[100px] text-[70px] font-Gloock text-[#8FDEAA] max-w-[690px] 3xl:max-w-[890px] leading-[100%]">
              Manufacturing process
            </h3>
            <div className=" mt-[30px] 3xl:mt-[66px] text-[#F6F5EC] flex gap-[13%]">
              <p className="max-w-[640px]">
                Output is a beautiful tile that lasts forever Over the decades
                Bharat has laid some of the best-known floors in India’s
                landmark buildings: from palaces of Maharajas and Raj Bhavans to
                prominent residences, hotels, hospitals, clubs, offices,
                factories, co-operative housing societies, educational and
                religious institutions, airports, railways etc.
              </p>
              <p className="max-w-[640px]">
                Each step has to be done well The best European technologies
                were brought and modified to create a unique product suited to
                Indian conditions. Recognising that a good floor is only
                achieved with a good product that is installed correctly and
                maintained properly, the company has sister companies which do
                high quality installation of all types of floorings, a range of
                civil work, floor maintenance and general cleaning.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[152px] pb-[200px] ps-[104px] bg-[#2A2523]">
          <div className="flex flex-col gap-y-[50px] h-[4200px]">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div
                key={idx}
                className={
                  "flex sticky top-[500px] 3xl:top-[600px] overflow-hidden"
                }
                style={{
                  marginLeft: idx === 0 ? 0 : ` ${145 * (idx - 1)}px`,
                }}
              >
                {idx !== 0 && (
                  <div className="min-w-[146px] h-auto bg-[#2A2523] opacity-[0.8] shrink-0" />
                )}
                <div className="flex border-t-[1px] border-[#8FDEAA] bg-[#2A2523] shrink-0">
                  <p className="text-green text-[#8FDEAA] w-[145px] pt-[110px] relative border-t-[4px] border-[#8FDEAA]">
                    <span className="absolute top-[55px] left-0 text-[30px] font-medium text-[#8FDEAA]">
                      {idx + 1}
                    </span>
                    Bending
                  </p>
                  <p className="text-[#F6F5EC] leading-[160%] max-w-[511px] pt-[110px] shrink-0">
                    The pigment composition is a mixture of high quality white
                    Portland cement, marble powder and natural mineral colour
                    pigments. The ingredients are blended together carefully
                    over a period of 3-4 hours to produce the final colours.
                  </p>
                </div>
                <div className="bg-[#2A2523] ps-[68.1px] shrink-0">
                  <Image
                    src={manufracture1}
                    alt="manufracture1"
                    width={705}
                    height={495}
                    className="w-[705px] h-[495px] rounded-[20px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[1086px] absolute bottom-0">
          <div
            style={{}}
            className="rounded-t-[80px] manufractureImg w-full h-full pt-[46px] px-[104px] pb-[100px] flex flex-col justify-between"
          >
            <div className="flex text-[#F6F5EC] justify-between">
              <p>6 steps</p>
              <p>4 hours</p>
              <p>Handmade</p>
            </div>
            <p className="font-Gloock text-[80px] text-[#F6F5EC]">BFT Home</p>
          </div>
        </div>
      </div> */}
      <Manufacture />
    </div>
  );
};
export default page;
