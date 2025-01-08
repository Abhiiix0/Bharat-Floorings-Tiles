"use client";
import Link from "next/link";
import Intro from "./Intro";
import PastEventsCard from "./PastEventsCard";
import PressReleasesCard from "./PressReleasesCard";
import AwardsCard from "./AwardsCard";
import ManagementCard from "./ManagementCard";
import OurJourneyCard from "./OurJourneyCard";
import { RiArrowRightLine } from "react-icons/ri";
import { useEffect, useRef } from "react";

const OurCompany = ({ journey, management, awards, press, events }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          if (rect.top <= 0) {
            sectionRef.current.style.overflowY = "scroll";
          } else if (rect.top > 0) {
            sectionRef.current.style.overflow = "hidden";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="relative overflow-y-scroll scroll">
      <div className="lg:px-[100px] px-[20px] py-10 bg-[#fefef2]">
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
            movement, aligning with India&apos;s quest for economic
            independence. Our mission: to produce world-class tiles that could
            replace imports and meet the highest international standards.
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
            installing some of the most iconic floors in India&apos;s
            architectural landscape. Our craftsmanship graces the palaces of
            Maharajas, Raj Bhavans, distinguished residences, prestigious
            hotels, vital hospitals, vibrant clubs, bustling offices, bustling
            factories, cooperative housing societies, esteemed educational and
            religious institutions, as well as busy airports and railway
            stations. Our legacy is etched in the very fabric of India&apos;s
            architectural marvels.
          </p>
        </div>
      </div>
      <div
        ref={sectionRef}
        className="lg:px-[100px] px-[20px] z-[1] sticky top-[0%] mb-20 overflow-x-hidden overflow-y-scroll scroll h-screen bg-white lg:block hidden"
      >
        <div className="bg-black h-[2px] z-20 mt-4 sticky top-[1%]">
          <div className="bg-black h-1 w-[7%]"></div>
          <div className="flex justify-between items-center bg-white py-5">
            <span>1922</span>
            <span>1923</span>
            <span>1923-1935</span>
            <span>1935-1940</span>
            <span>1940</span>
            <span>1950-1970</span>
            <span>1960</span>
            <span>1999</span>
            <span>2000</span>
            <span>2010</span>
            <span>2013</span>
            <span>2014</span>
            <span>2015</span>
            <span>TODAY</span>
          </div>
        </div>
        <div className="mt-40 sticky">
          {journey
            .filter((el) => el.year === "1922")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
              />
            ))}
        </div>
        <div className="-mt-[500px] z-[2]">
          {journey
            .filter((el) => el.year === "1923")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[250px] z-[3]">
          {journey
            .filter((el) => el.year === "1923-1935")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
              />
            ))}
        </div>
        <div className="-mt-[450px] z-[4]">
          {journey
            .filter((el) => el.year === "1935-1940")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[300px] z-[5]">
          {journey
            .filter((el) => el.year === "1940")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
              />
            ))}
        </div>
        <div className="-mt-[450px] z-[6]">
          {journey
            .filter((el) => el.year === "1950-1970")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "1960")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "1999")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "2000")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "2010")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "2013")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "2014")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "2015")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
        <div className="-mt-[450px]">
          {journey
            .filter((el) => el.year === "TODAY")
            .map((res) => (
              <OurJourneyCard
                key={res.id}
                year={res.year}
                heading={res.heading}
                para={res.para}
                image={res.image}
                top={res.top}
                left={res.left}
                sectionLeft={res.sectionLeft}
              />
            ))}
        </div>
      </div>
      <div className="lg:px-[100px] px-[20px] py-10 bg-[#fefef2]">
        <Intro intro1={"Chairperson"} intro2={"vice Chairman"} intro3={"CEO"} />
        <h1 className="2xl:text-[100px] font-Gloock font-normal 2xl:mt-20 lg:text-7xl xl:mt-16 lg:mt-14 md:text-6xl md:mt-10 text-5xl">
          Management
        </h1>
        <div className="grid md:grid-cols-3 md:gap-x-9 gap-y-10 my-20">
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
      <div className="bg-[#F4F4F4] lg:px-[100px] px-[20px] py-10">
        <Intro
          intro1={"6 awards"}
          intro2={"DNA EDIDA UNESCO"}
          intro3={"2013 2014 2015 2017"}
        />
        <h1 className="2xl:text-[100px] font-Gloock font-normal 2xl:mt-20 lg:text-7xl xl:mt-16 lg:mt-14 md:text-6xl md:mt-10 text-5xl text-center">
          Awards
        </h1>
        <div className="flex overflow-x-scroll gap-11 scroll xl:my-16 lg:y-12 md:my-9 my-7">
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
      <div className="lg:px-[100px] px-[20px] py-10">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <h1 className="2xl:text-[100px] font-Gloock font-normal 2xl:mt-20 lg:text-7xl xl:mt-16 lg:mt-14 md:text-6xl md:mt-10 text-5xl">
            Latest press releases
          </h1>
          <div className=" flex justify-end sm:w-auto w-full">
            <Link
              href="press"
              className="border-black border-[1px] h-8 lg:h-9 w-[165px] xl:h-11 xl:w-48 2xl:h-14 2xl:w-56 2xl:mt-28 xl:mt-24 lg:mt-20 md:mt-16 mt-5 flex  gap-1 items-center 2xl:text-base xl:text-sm text-xs xl:pl-3 pl-3 2xl:pl-7 link"
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
      <div className="py-20 lg:px-[100px] px-[20px] bg-[#304941] text-white">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className=" flex justify-start sm:w-auto w-full">
            <h1 className="2xl:text-[100px] font-Gloock font-normal 2xl:mt-20 lg:text-7xl xl:mt-16 lg:mt-14 md:text-6xl md:mt-10 text-5xl">
              Latest events
            </h1>
          </div>
          <div className=" flex justify-end sm:w-auto w-full">
            <Link
              href="events"
              className="border-white border-[1px] h-8 lg:h-9 w-32 xl:h-11 xl:w-36 2xl:h-14 2xl:w-44 2xl:mt-28 xl:mt-24 lg:mt-20 md:mt-16 mt-5 flex  gap-1 items-center 2xl:text-base xl:text-sm text-xs xl:pl-3 pl-3 2xl:pl-7 link"
            >
              View all events
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="xl:mt-20 xl:mb-36 lg:mt-16 lg:mb-28 md:mt-12 md:mb-20 mt-10 mb-16">
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
