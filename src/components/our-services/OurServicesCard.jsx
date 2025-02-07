"use client";
import { RiArrowRightLine } from "react-icons/ri";

const OurServicesCard = ({ image, designType, designInfo }) => {
  return (
    <div className="font-Inter md:w-full sm:w-4/5">
      <img
        src={image.src}
        alt={`${designType} image`}
        className="h-80 lg:h-96 xl:h-[435px] 2xl:h-[547px] 2xl:mb-10 w-full "
      />
      <span className="sm:text-xs text-[9px] lg:text-sm xl:text-base">
        Who we are
      </span>
      <h3 className="para-big my-5 2xl:my-8 xl:my-7 lg:my-6">{designType}</h3>
      <div>
        {designInfo.map(({ id, info }) => (
          <p key={id} className="para-medium lg:mb-0 mb-2 pr-6">
            {info}
          </p>
        ))}
      </div>
      <a
        href="#"
        className="border-black border-[1px] w-52 lg:w-52 xl:w-60 2xl:w-72 2xl:mt-16 xl:mt-12 lg:mt-8 mt-6 xl:pl-3 pl-3 2xl:pl-7 link link-el"
      >
        Start your floor journey now! <RiArrowRightLine className="arrow" />
      </a>
    </div>
  );
};
export default OurServicesCard;
