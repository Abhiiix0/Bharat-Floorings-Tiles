import Link from 'next/link'
import { RiArrowRightLine } from "react-icons/ri";

const JobsCard = ({ jobRole, location, experience, qualification, jobDescription }) => {
  return (
    <div className='bg-[#F1EBED] 2xl:p-10 xl:p-8 md:p-6 p-4 lg:p-6 font-Inter xl:min-h-[600px] 2xl:min-h-[743px] flex flex-col justify-between'>
      <div>
        <h3 className='xl:text-2xl md:text-xl text-base font-medium 2xl:text-3xl font-Inter'>
          {jobRole}
        </h3>
        <span className='para-medium'>
          {location}
        </span>
        <div className='xl:text-base text-sm 2xl:mt-12 xl:mt-9 lg:mt-8 md:mt-6 mt-4'>
          <div className='flex justify-between items-center 2xl:my-6 xl:my-5 lg:my-4 my-3'>
            <span className='title-el'>
              EXPERIENCE
            </span>
            <span className='title-el'>
              {experience} years
            </span>
          </div>
          <div className='h-[1.5px] bg-black 2xl:mb-3 xl:mb-2 mb-1' />
        </div>
        <div className='2xl:mt-12 xl:mt-9 lg:mt-8 md:mt-6'>
          <div className='flex justify-between items-center 2xl:my-6 xl:my-5 lg:my-4 md:my-3'>
            <span className='title-el'>
              QUALIFICATION
            </span>
            <span className='title-el'>
              {qualification}
            </span>
          </div>
          <div className='h-[1.5px] bg-black 2xl:mb-3 xl:mb-2 mb-1' />
        </div>
        <h4 className='title-el 2xl:my-6 my-8 '>
          JOB DESCRIPTION
        </h4>
        <ul className='2xl:mt-5 xl:mt-3 lg:mt-2 mt-1 xl:text-base text-sm list-disc px-4'>
          {
            jobDescription.map(({ id, description }) => (
              <li className='xl:text-base xl:leading-[25.6px] md:text-sm md:leading-[22px] text-xs leading-[18px] font-Inter' key={id}>{description}</li>
            ))
          }
        </ul>
      </div>
      <Link
        href='#'
        className='link-el lg:w-36 md:w-32 w-28 pl-4 xl:w-40 border-2 border-black mt-8 2xl:pl-8 link '>
        Apply Now <RiArrowRightLine className="arrow" />
      </Link>
    </div>
  )
}

export default JobsCard