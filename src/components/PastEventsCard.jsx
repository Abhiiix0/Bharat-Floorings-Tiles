"use client";
import { useState } from "react";
import ImageClickModal from "./ImageClickModal";

const PastEventsCard = ({ eventImg, eventDate, eventName }) => {
  const [close, setClose] = useState(false);
  return (
    <div className="max-w-[1920px] ">
      {close ? <ImageClickModal close={close} setClose={setClose} /> : null}
      <img
        alt={`${eventName} image`}
        onClick={() => setClose(true)}
        src={eventImg.src}
        className="2xl:min-h-[309px] xl:min-h-64 lg:min-h-52 md:min-h-40 h-[251px] object-cover w-full"
      />
      <div className="2xl:my-8 xl:my-7 lg:my-6 md:my-5 mt-4">
        <span className="title-el h-9 sm:h-fit flex sm:block items-center">
          {eventDate}
        </span>
        <h3 className="2xl:text-[26px] lg:text-2xl md:text-xl text-base font-Inter font-medium mt-1">
          {eventName}
        </h3>
      </div>
    </div>
  );
};

export default PastEventsCard;
