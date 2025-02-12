import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const JobsCard = ({
  jobRole,
  location,
  experience,
  qualification,
  jobDescription,
}) => {
  return (
    <div className="bg-[#F1EBED] px-5 pt-12 pb-14 md:pb-[40px] font-Inter md:min-h-[743px] h-[584px] w-[312px] md:w-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-medium xl:text-3xl font-Inter">
          {jobRole}
        </h3>
        <span className=" md:text-xl ">{location}</span>
        <div className=" border-b-2 text-[13px] md:text-base font-medium  border-black pb-[14px] my-6 mt-14">
          <div className="flex justify-between h-[36px] font-medium gap-2 items-center">
            <span className="">EXPERIENCE</span>
            <span className="">{experience} years</span>
          </div>
        </div>
        <div className=" border-b-2 text-[13px] md:text-base font-medium border-black pb-[14px]">
          <div className="flex justify-between  font-medium gap-2 items-center h-[36px] ">
            <span className="">QUALIFICATION</span>
            <span className="">{qualification}</span>
          </div>
        </div>
        <h4 className=" text-[13px] font-medium md:text-base h-[36px] flex items-center my-6 ">
          JOB DESCRIPTION
        </h4>
        <ul className="2xl:mt-5 xl:mt-3 lg:mt-2 mb-9 xl:text-base text-[13px] md:text-base font-Inter list-disc px-4">
          {jobDescription.map(({ id, description }) => (
            <li
              className="xl:text-base xl:leading-[25.6px] md:text-sm md:leading-[22px] text-xs leading-[18px] font-Inter"
              key={id}
            >
              {description}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="#"
        className=" flex  justify-center px-5 py-[18px] md:w-fit md:h-[56px] border items-center border-black gap-3 "
      >
        Apply Now <RiArrowRightLine className="arrow w-4 " />
      </Link>
    </div>
  );
};

export default JobsCard;
