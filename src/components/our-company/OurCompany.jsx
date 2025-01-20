"use client";
import { useEffect, useState, useRef } from "react";
import Intro from "../Intro";
import OurJourneyCard from "../our-company/OurJourneyCard";
import ManagementCard from "./ManagementCard";
import AwardsCard from "./AwardsCard";
import PastEventsCard from "../PastEventsCard";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import PressReleasesCard from "../PressReleasesCard";

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
      <div className="absolute hidden lg:flex w-full h-full px-[4px] lg:px-[88px] z-[11] top-0 left-0  justify-between">
        <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
      </div>
      <div className="lg:px-[100px] px-[20px] py-10 bg-[#fefef2] relative">
        <Intro intro1={"Who we are"} intro3={"100 years old"} />
        <h1 className="2xl:text-[100px] 2xl:leading-[100px] md:text-5xl text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal 2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-10">
          Our Journey
        </h1>
        <p className="para-big xl:mt-10 lg:mb-16 lg:mt-8 mb-10 mt-6  xl:leading-[42px] 2xl:w-[60%] xl:w-[70%] lg:font-2xl lg:w-4/5 md:text-xl md:leading-[34px] md:w-full">
          For over a century, Bharat Floorings & Tiles has been the epitome of
          quality in handmade tile manufacturers in India.
        </p>
        <div className="flex lg:flex-row flex-col justify-between 2xl:gap-10 xl:gap-8 lg:gap-6 gap-5  xl:mb-40 lg:mb-32 mb-20">
          <p className="para-medium">
            The Bharat Floorings Group, an ISO 9001:2015 Certified Company,
            boasts a century-long legacy as the foremost provider of top-tier
            cement floorings. Our journey commenced in 1922 when Bharat
            pioneered the cement tiles industry in India during the Swadeshi
            movement, aligning with India's quest for economic independence. Our
            mission: to produce world-class tiles that could replace imports and
            meet the highest international standards.
          </p>
          <p className="para-medium">
            To fulfill this vision, we harnessed the best European technologies,
            tailoring them to suit the unique demands of Indian conditions. We
            realized that the key to exceptional flooring lay not only in
            superior products but also in their expert installation and diligent
            maintenance. To ensure this, we established sister companies
            specializing in high-quality flooring installation, civil work,
            floor maintenance, and general cleaning.
          </p>
          <p className="para-medium">
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
      <div className="lg:px-[100px] px-[20px]  bg-[#fefef2]">
        <Intro intro1={"Chairperson"} intro2={"vice Chairman"} intro3={"CEO"} />
        <h1 className="2xl:text-[100px] 2xl:leading-[100px] text-2xl  h-[181px] lg:text-5xl font-Gloock font-normal xl:text-7xl   md:text-6xl ">
          Management
        </h1>
        <div className="grid md:grid-cols-3 md:gap-x-9 gap-y-10 pb-[195px]  pt-[18px]">
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
      <div className="bg-[#F4F4F4] lg:pl-[100px] px-[20px] py-10">
        <div className="lg:pr-[100px]">
          <Intro
            intro1={"6 awards"}
            intro2={"DNA EDIDA UNESCO"}
            intro3={"2013 2014 2015 2017"}
          />
        </div>
        <h1 className="small-heading 2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-10 text-center 2xl:pr-[10%] pr-[15%]">
          Awards
        </h1>
        <div className="flex overflow-x-scroll 2xl:gap-[27px] xl:gap-6 lg:gap-5 gap-4 scroll xl:my-16 lg:y-12 md:my-9 my-7">
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
      <div className="lg:px-[100px] px-[20px]">
        <Intro intro1={'ELLE'} intro3={'Dec 2023'} />
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <h1 className="small-heading">
            Latest press releases
          </h1>
          <div className=" flex justify-end sm:w-auto w-full">
            <Link
              href="/press"
              className="link-el border-black border-[1px] w-[175px] xl:w-[200px] 2xl:w-56 xl:pl-3 pl-2 link"
            >
              View all press releases
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="xl:mt-20 xl:mb-36 lg:mt-16 lg:mb-28 md:mt-12 md:mb-20 mt-10 mb-16">
          <div className="hidden xl:grid xl:grid-cols-4 gap-4">
            {press.slice(0, 4).map((res) => (
              <PressReleasesCard
                key={res.id}
                pressImg={res.pressImg}
                pressDate={res.pressDate}
                pressName={res.pressName}
              />
            ))}
          </div>
          <div className="xl:hidden lg:grid hidden grid-cols-3 gap-4">
            {press.slice(0, 3).map((res) => (
              <PressReleasesCard
                key={res.id}
                pressImg={res.pressImg}
                pressDate={res.pressDate}
                pressName={res.pressName}
              />
            ))}
          </div>
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {press.slice(0, 2).map((res) => (
              <PressReleasesCard
                key={res.id}
                pressImg={res.pressImg}
                pressDate={res.pressDate}
                pressName={res.pressName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="2xl:py-44 xl:py-36 lg:py-28 py-24 lg:px-[100px] px-[20px] bg-[#304941] text-white">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className="2xl:my-6 flex justify-start sm:w-auto w-full">
            <h1 className="small-heading">Latest events</h1>
          </div>
          <div className=" flex justify-end sm:w-auto w-full">
            <Link
              href="events"
              className="link-el border-white border-[1px] w-[132px] xl:h-11 xl:w-[150px] 2xl:w-[179px] xl:pl-3 pl-3 2xl:pl-7 link"
            >
              View all events
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="2xl:mt-14 xl:mt-12 lg:mt-10 mt-8 xl:mb-16 lg:mb-14 mb-12">
          <div className="hidden xl:grid xl:grid-cols-4 gap-4">
            {events.slice(0, 4).map((res) => (
              <PastEventsCard
                key={res.id}
                eventDate={res.eventDate}
                eventImg={res.eventImg}
                eventName={res.eventName}
              />
            ))}
          </div>
          <div className="xl:hidden lg:grid hidden grid-cols-3 gap-4">
            {events.slice(0, 3).map((res) => (
              <PastEventsCard
                key={res.id}
                eventDate={res.eventDate}
                eventImg={res.eventImg}
                eventName={res.eventName}
              />
            ))}
          </div>
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {events.slice(0, 2).map((res) => (
              <PastEventsCard
                key={res.id}
                eventDate={res.eventDate}
                eventImg={res.eventImg}
                eventName={res.eventName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
