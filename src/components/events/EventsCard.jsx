import eventsShare from "../../../public/svgs/eventsShare.svg";
const EventsCard = ({
  eventName,
  eventDate,
  eventInfo,
  website,
  eventImage,
  eventPlace,
}) => {
  return (
    <div className="lg:h-[1220px] min-h-[1080px] 3xl:min-w-[1362px] lg:min-w-[80%] min-w-full   bg-[#2A2523] rounded-xl flex justify-end sm:flex-row flex-col-reverse text-white overflow-hidden">
      <div className="3xl:pt-[54px]   3xl:pl-14 3xl:pr-14 xl:pl-8 xl:pr-12 lg:py-20 lg:pl-9 lg:pr-14 md:py-14 md:px-5 pt-10 pb-12  px-5 ">
        <div className=" hidden md:flex items-center justify-end mb-10 w-full ">
          <img
            src={eventsShare.src}
            alt="share button"
            className="  hidden md:block  w-5 lg:w-7 xl:w-9  cursor-pointer"
          />
        </div>
        <h1 className="3xl:text-[100px] 3xl:leading-[100px] md:text-5xl text-[40px] xl:text-7xl lg:text-6xl font-Gloock font-normal text-[#8FDEAA] 3xl:mb-[50px] 2xl:mb-9 lg:mb-5 md:mb-3">
          {eventName}
        </h1>
        <p className=" text-xl 3xl:mb-14 lg:mb-5 mb-9">
          {eventPlace}
          <br />
          {eventDate}
        </p>
        {eventInfo.map(({ id, info }) => (
          <p
            key={id}
            className="3xl:text-xl  3xl:leading-[32px] lg:text-lg lg:leading-[28px] text-[13px] leading-[25.6px] 3xl:mb-6 lg:mb-5 md:mb-4 mb-3 3xl:pr-12 md:pr-2"
          >
            {info}
          </p>
        ))}
        <p className="3xl:text-xl 3xl:leading-[32px] lg:text-lg lg:leading-[28px] text-base leading-[25.6px]">
          Get your ticket at{" "}
          <a className=" no-underline" href={`${website}`}>
            {website}
          </a>
        </p>
      </div>
      <img
        src={eventImage.src}
        alt={`${eventName} image`}
        className="sm:w-[47%] w-full bg-yellow-400 h-[335px] object-cover sm:h-full"
      />
    </div>
  );
};

export default EventsCard;
