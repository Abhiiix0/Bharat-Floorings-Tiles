const ManagementCard = ({ image, name, designation, info }) => {
  return (
    <div className="3xl:max-w-[557px] 2xl:max-w-[500px] xl:max-w-[450px] xl:min-w-[350px] lg:min-w-64 sm:min-w-[400px] min-w-80">
      <img
        alt={`${designation} image`}
        src={image.src}
        className="3xl:h-[809px]  2xl:h-[600px] xl:h-[500px] lg:h-[400px] md:h-[550px] sm:h-[520px] h-[466px] object-cover w-full"
      />
      <h4 className="font-Inter xl:text-3xl xl:leading-[42px] xl:mt-9 xl:mb-6 lg:mt-8 lg:mb-5 md:mt-7 sm:mb-4 sm:mt-6 mt-5 mb-3 md:font-2xl text-xl font-medium">
        {name}
      </h4>
      <span className="xl:text-base xl:leading-[25.6px] text-sm leading-[23px] font-Inter">
        {designation}
      </span>
      <p className="xl:text-base xl:leading-[25.6px] text-[13px] leading-[20.8px] xl:mt-6 md:mt-5 sm:mt-4 mt-3 font-Inter pr-7">
        {info}
      </p>
    </div>
  );
};

export default ManagementCard;
