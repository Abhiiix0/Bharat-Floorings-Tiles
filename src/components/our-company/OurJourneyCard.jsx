const OurJourneyCard = ({
  year,
  heading,
  para,
  image,
}) => {
  return (
    <div className="2xl:h-fit  overflow-hidden  xl:h-[900px] lg:h-[750px] h-fit w-full">
      <div
        className={`3xl:w-[677px] 2xl:w-[580px] xl:w-[500px] lg:w-[380px] w-full sm:w-[500px] `}
      >
        <h2 className="font-Gloock text-2xl lg:text-3xl 2xl:text-[4.4rem] 2xl:leading-[4.4rem] font-normal">
          {year}
        </h2>
        <h3 className="para-big my-2 md:my-[15px]">{heading}</h3>
        <p className="font-Inter  xl:text-base xl:leading-[25.6px] xl:mb-14 text-xs lg:text-sm leading-[22px] mb-5 md:mb-9 xl:w-4/5 w-full">
          {para}
        </p>
        <img
          alt={`${heading} image`}
          src={image.src}
          className="object-cover h-[677px] w-[677px]"
        />
      </div>
    </div>
  );
};

export default OurJourneyCard;
