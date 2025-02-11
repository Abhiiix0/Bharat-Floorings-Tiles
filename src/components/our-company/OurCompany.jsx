"use client";
import { useEffect, useState, useRef } from "react";
import OurJourneyCard from "../our-company/OurJourneyCard";
import ManagementCard from "./ManagementCard";
import AwardsCard from "./AwardsCard";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import PressCard from './PressCard'
import LatestEvents from './LatestEvents'


const OurCompany = ({ journey, management, awards, press, events }) => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) setCurrentYearIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "-10px 0px 0px 0px",
      threshold: 0,
    });

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const progressWidth = (
    (currentYearIndex / (journey.length - 1)) *
    100
  ).toFixed(2);

  useEffect(() => {
    // Calculate row spans dynamically based on height
    const calculateRowSpans = () => {
      sectionRefs.current.forEach((item) => {
        if (item) {
          const height = item.offsetHeight;
          const rowHeight = 10; // Match CSS grid row height
          const span = Math.ceil(height / rowHeight);
          item.style.gridRowEnd = `span ${span}`;
        }
      });
    };

    calculateRowSpans();
    window.addEventListener("resize", calculateRowSpans);

    return () => window.removeEventListener("resize", calculateRowSpans);
  }, []);

  return (
    <section className="relative">
      <div className="absolute hidden w-full h-full px-[4px] lg:px-[88px] z-[11] top-0 left-0  justify-between">
        <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
      </div>
      <div className="lg:px-[100px] px-[20px] lg:pt-[59px] lg:pb-44 pt-16 pb-8 bg-[#fefef2] relative">
      <div className='lg:flex hidden justify-between items-center font-Inter'>
          <span>Who we are</span> <span>100 years old</span>
        </div>
        <h1 className="2xl:text-[100px] 2xl:leading-[100px] md:text-5xl sm:text-4xl text-[34px] xl:text-7xl lg:text-6xl font-Gloock font-normal 2xl:mt-[121px] xl:mt-16 lg:mt-14 md:mt-10">
          Our Journey
        </h1>
        <p className="2xl:text-[30px] font-Inter font-medium xl:mt-10 lg:mb-16 lg:mt-8 mb-6 mt-4  xl:leading-[42px] 2xl:w-[50%] xl:w-[70%] lg:font-2xl lg:w-4/5 md:text-xl md:leading-[34px] md:w-full sm:pr-0 pr-16">
          For over a century, Bharat Floorings & Tiles has been the epitome of
          quality in handmade tile manufacturers in India.
        </p>
        <div className="flex lg:flex-row flex-col justify-between 2xl:gap-[77px] xl:gap-8 lg:gap-6 gap-0 xl:mb-40 lg:mb-32 mb-20">
          <p className="para-small 3xl:w-[32%] 3xl:pr-3 w-auto pr-0">
            The Bharat Floorings Group, an ISO 9001:2015 Certified Company,
            boasts a century-long legacy as the foremost provider of top-tier
            cement floorings. Our journey commenced in 1922 when Bharat
            pioneered the cement tiles industry in India during the Swadeshi
            movement, aligning with India's quest for economic independence. Our
            mission: to produce world-class tiles that could replace imports and
            meet the highest international standards.
          </p>
          <p className="para-small 3xl:w-[32%] 3xl:pr-4 w-auto pr-0">
            To fulfill this vision, we harnessed the best European technologies,
            tailoring them to suit the unique demands of Indian conditions. We
            realized that the key to exceptional flooring lay not only in
            superior products but also in their expert installation and diligent
            maintenance. To ensure this, we established sister companies
            specializing in high-quality flooring installation, civil work,
            floor maintenance, and general cleaning.
          </p>
          <p className="para-small 3xl:w-[36%] 3xl:pr-20 w-auto pr-0">
            Throughout the decades, Bharat has left its indelible mark by
            installing some of the most iconic floors in India's architectural
            landscape. Our craftsmanship graces the palaces of Maharajas, Raj
            Bhavans, distinguished residences, prestigious hotels, vital
            hospitals, vibrant clubs, bustling offices, bustling factories,
            cooperative housing societies, esteemed educational and religious
            institutions, as well as busy airports and railway stations. Our
            legacy is etched in the very fabric of India's architectural
            marvels.
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] lg:px-[100px] px-5">
        {/* Progress Bar */}
        <div className="  hidden lg:block z-[100]   mb-20 xl:mb-36 bg-white pt-6 pb-[18px] sticky top-0">
          <div className=" border-t border-black">
            <div
              className="bg-black h-[3px]  transition-all duration-300"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center bg-white  h-[52px]">
            {journey.map((res, i) => (
              <span
                key={res.year}
                className={` font-Inter  xl:text-xl leading-8 ${currentYearIndex === i ? "font-bold text-black" : ""
                  }`}
              >
                {res.year}
              </span>
            ))}
          </div>
        </div>

        {/* Journey Timeline Section with Masonry */}
        <div className=" mx-auto w-fit relative mt-10 lg:mt-0 pb-20 md:pb-48 lg:pb-[259px] flex">
          <div className=" hidden lg:flex justify-center pt-5 absolute top-0 z-[9] w-full ">
            <h3 className=" font-Inter text-[25rem] 3xl:text-[556px] text-[#F5F5F5] ">
              {journey[0].year}
            </h3>
          </div>
          <div className="flex   lg:hidden  relative z-10 flex-col gap-16">
            {journey.map((res, i) => (
              <div
                key={res.id}
                ref={(el) => (sectionRefs.current[i] = el)}
                className=""
              >
                <OurJourneyCard
                  year={res.year}
                  heading={res.heading}
                  para={res.para}
                  image={res.image}
                  sectionLeft={res.sectionLeft}
                />
              </div>
            ))}
          </div>
          <div className=" hidden lg:flex relative z-10 flex-col gap-32 2xl:gap-[204px]">
            {journey.map((res, i) => {
              if ((i + 1) % 2 !== 0) {
                return (
                  <div
                    key={res.id}
                    ref={(el) => (sectionRefs.current[i] = el)}
                    className={` pr-7 2xl:pr-[38px] ${i % 2 === 0 ? "" : ""}`} // Adjust margin for staggered effect
                  >
                    <OurJourneyCard
                      year={res.year}
                      heading={res.heading}
                      para={res.para}
                      image={res.image}
                      sectionLeft={res.sectionLeft}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className=" hidden lg:flex flex-col relative z-10 mt-96 2xl:mt-[580px] gap-32 2xl:gap-[204px]">
            {journey.map((res, i) => {
              if ((i + 1) % 2 === 0) {
                return (
                  <div
                    key={res.id}
                    ref={(el) => (sectionRefs.current[i] = el)}
                    className={` pl-7 2xl:pl-[38px] ${i % 2 === 0 ? "" : ""}`} // Adjust margin for staggered effect
                  >
                    <OurJourneyCard
                      year={res.year}
                      heading={res.heading}
                      para={res.para}
                      image={res.image}
                      sectionLeft={res.sectionLeft}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="lg:px-[100px] pl-[20px] pr-0 bg-[#fefef2] 3xl:pt-11 lg:pt-9 md:pt-7 sm:pt-28 pt-24 3xl:pb-[195px] xl:pb-44 lg:pb-40 md:pb-32 pb-28">
       <div className="md:flex items-center justify-between hidden">
       <span>Chairperson</span>
       <span>Vice Chairman</span>
       <span>CEO</span>
       </div>
        <h1 className="small-heading 2xl:mt-[119px] lg:mt-24 md:mt-20 mt-0 2xl:mb-24 lg:mb-20 md:mb-16 sm:mb-14 mb-12">
          Management
        </h1>
        <div className="flex 2xl:gap-6 xl:gap-5 md:gap-5 sm:gap gap-[14px] lg:overflow-hidden overflow-x-scroll scroll">
          {management.map((res) => (
            <ManagementCard
              key={res.id}
              image={res.image}
              name={res.name}
              designation={res.designation}
              info={res.info}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#F4F4F4] lg:pl-[100px] px-[20px] 3xl:pt-[46px] 3xl:pb-60 xl:pt-10 xl:pb-52 lg:pt-9 lg:pb-40 md:pt-7 md:pb-32 sm:pt-6 sm:pb-24 pt-5 pb-20">
        <div className="lg:pr-[100px] lg:flex hidden justify-between items-center font-Inter">
         <span>6 awards</span>
         <span>DNA EDIDA UNESCO</span>
         <span>2013 2014 2015 2017</span>
        </div>
        <h1 className="small-heading 3xl:mt-[119px] 3xl:mb-28 xl:mt-24 xl:my-20 lg:mt-20 lg:mb-16 md:mt-16 md:mb-12 sm:mt-14 sm:mb-7 mt-11 mb-5 text-center 2xl:pr-[10%] pr-[15%]">
          Awards
        </h1>
        <div className="flex overflow-x-scroll 2xl:gap-[27px] xl:gap-6 lg:gap-5 gap-4 scroll">
          {awards.map((res) => (
            <AwardsCard
              key={res.id}
              image={res.image}
              date={res.date}
              awardedFor={res.awardedFor}
              awardName={res.awardName}
            />
          ))}
          {awards.map((res) => (
            <AwardsCard
              key={res.id}
              image={res.image}
              date={res.date}
              awardedFor={res.awardedFor}
              awardName={res.awardName}
            />
          ))}
        </div>
      </div>
      <div className="relative lg:px-[100px] pl-[20px] pr-0 3xl:pt-[46px] 3xl:pb-60 xl:pt-10 xl:pb-52 lg:pt-9 lg:pb-40 md:pt-7 md:pb-32 sm:pt-6 sm:pb-24 pt-5 pb-[60px]">
       <div className="flex items-center justify-between font-Inter">
        <span>ELLE</span>
        <span>DEC 2023</span>
       </div>
        <div className="flex sm:flex-row flex-col lg:items-center justify-between 3xl:mt-[119px] 3xl:mb-28 xl:mt-24 xl:my-20 lg:mt-20 lg:mb-16 md:mt-16 md:mb-12 sm:mt-14 sm:mb-7 mt-11 mb-5">
          <h1 className="small-heading">
            Latest press releases
          </h1>
          <div className="lg:relative absolute bottom-16 left-5 flex justify-end">
            <Link
              href="/press"
              className="border-black border-[1px] w-[239px] h-[59px] px-5 font-Inter flex items-center gap-2"
            >
              View all press releases
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="flex lg:gap-6 gap-5 3xl:mb-24 lg:mb-20 mb-[73px] lg:overflow-hidden overflow-x-scroll scroll">
            {press.slice(0, 4).map((res) => (
              <PressCard
                key={res.id}
                pressImg={res.pressImg}
                pressDate={res.pressDate}
                pressName={res.pressName}
              />
            ))}
        </div>
      </div>
      <div className="relative 3xl:pt-[201px] 3xl:pb-[276px] xl:pt-40 xl:pb-56  lg:pt-32 lg:pb-44 md:pt-24 md:pb-36 sm:pt-16 sm:pb-24 pt-12 pb-[59px] lg:px-[100px] px-[20px] bg-[#304941] text-white">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className="flex justify-start sm:w-auto w-full">
            <h1 className="small-heading">Latest events</h1>
          </div>
          <div className="flex justify-end sm:w-auto w-full">
            <Link
              href="events"
              className="lg:relative absolute bottom-[59px] left-5 border-white border-[1px] w-[179px] px-5 font-Inter flex items-center h-14 gap-2"
            >
              View all events
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="flex lg:gap-6 gap-5  lg:overflow-hidden overflow-x-scroll 2xl:mt-14 xl:mt-12 lg:mt-10 mt-8 xl:mb-16 lg:mb-14 mb-12 scroll">
            {events.slice(0, 4).map((res) => (
              <LatestEvents
                key={res.id}
                eventDate={res.eventDate}
                eventImg={res.eventImg}
                eventName={res.eventName}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
