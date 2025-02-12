"use client";
import EventsCard from "./EventsCard";
import DropDowns from "./DropDowns";
import PastEventsCard from "./PastEventsCard";
import LinesComp from "./LinesComp";
import { useState } from "react";
import ImageClickModal from "./ImageClickModal";

const Events = ({
  upcomingEvents,
  tags,
  events,
  years,
  loctaion,
  pastEvents,
}) => {
  const [close, setClose] = useState(false);
  const [BtnValue, setBtnValue] = useState("upcoming");
  return (
    <section className="max-w-[1920px] mx-auto z-0 relative overflow-hidden">
      <LinesComp />
      <div className="relative z-10">
        <div className=" hidden sm:block 2xl:my-16 2xl:text-xl xl:my-14 lg:my-12 md:my-8 my-6 font-semibold relative lg:px-[100px] px-[20px]">
          UPCOMING EVENTS
          <span className="absolute text-xs font-semibold">2</span>
        </div>
        <div
          className=" h-11 mt-[74px] mb-[34px] flex
         mx-5 rounded-lg sm:hidden overflow-hidden  bg-[#F3F3F3]"
        >
          <button
            onClick={() => setBtnValue("upcoming")}
            className={` ${
              BtnValue === "upcoming" ? "bg-black text-white" : "bg-transparent"
            } text-[13px] font-medium font-Inter  h-full w-full uppercase`}
          >
            upcoming
          </button>
          <button
            onClick={() => setBtnValue("past")}
            className={` ${
              BtnValue === "past" ? "bg-black text-white" : "bg-transparent"
            } text-[13px] font-medium font-Inter  h-full w-full uppercase`}
          >
            Past
          </button>
        </div>

        <div
          className={` ${
            BtnValue !== "upcoming" && " hidden sm:flex "
          } xl:px-7 lg:px-6 md:px-5 px-4 overflow-x-scroll flex flex-col sm:flex-row gap-9 mb-[125px] sm:mb-0 md:gap-[21px]`}
        >
          {upcomingEvents.map((res) => (
            <EventsCard
              key={res.id}
              eventName={res.eventName}
              eventDate={res.eventDate}
              eventInfo={res.eventInfo}
              website={res.website}
              eventImage={res.eventImage}
              eventPlace={res.eventPlace}
            />
          ))}
        </div>

        <div
          className={` ${
            BtnValue !== "past" && "hidden"
          } sm:block lg:px-[100px] px-[20px]`}
        >
          <div className="2xl:mt-7 2xl:mb-36 xl:mt-20 xl:mb-32 lg:mt-16 md:mt-12 mt-8 lg:mb-24 md:mb-16 mb-12 font-semibold flex sm:flex-row flex-col sm:gap-0 gap-4">
            <div className="relative hidden sm:block 2xl:my-16 2xl:text-xl w-2/3 font-Inter xl:text-xl text-base">
              PAST EVENTS
              <span className="absolute text-xs">57</span>
            </div>
            <div className="w-full overflow-x-auto sm:overflow-visible">
              <div className="flex items-start  sm:justify-end gap-9 lg:gap-[87px] min-w-max">
                <div className="">
                  {tags.map((res) => (
                    <DropDowns
                      key={res.id}
                      section={res.section}
                      subsection={res.subsection}
                    />
                  ))}
                </div>
                <div className="">
                  {events.map((res) => (
                    <DropDowns
                      key={res.id}
                      section={res.section}
                      subsection={res.subsection}
                    />
                  ))}
                </div>
                <div className="w-[80px]">
                  {years.map((res) => (
                    <DropDowns
                      key={res.id}
                      section={res.section}
                      subsection={res.subsection}
                    />
                  ))}
                </div>
                <div className="w-[120px]">
                  {loctaion.map((res) => (
                    <DropDowns
                      key={res.id}
                      section={res.section}
                      subsection={res.subsection}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-[71px] 2xl:mb-48 xl:mb-40 lg:mb-32 mb-[664px] sm:mb-24">
            {pastEvents.map((res) => (
              <PastEventsCard
                key={res.id}
                eventImg={res.eventImg}
                eventDate={res.eventDate}
                eventName={res.eventName}
                close={close}
                setClose={setClose}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
