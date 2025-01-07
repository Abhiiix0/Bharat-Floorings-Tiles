import React from 'react'
import careerImg from '../../../public/images/career_page_image.jpg'
import Intro from './Intro'
import JobsCard from './JobsCard'
import { ALL_JOBS } from '@/utils'
import LinesComp from './LinesComp'

const Careers = ({jobs}) => {
  return (
    <>
       <section 
   style={{backgroundImage : `url(${careerImg})`}}
   className='h-screen z-10'
   ></section>
    <section className='max-w-[1920px] mx-auto relative overflow-hidden'>
    <LinesComp height={'500vh'} />
    <div className='relative xl:mb-36 2xl:mb-44 2xl:mt-20 mt-14 mb-28  '>
    <div className='xl:px-[100px] md:px-16 sm:px-10 px-8'>
    <Intro intro1={'Who we are'} intro2={'100 years old'} />
    </div>
   <div className='flex lg:flex-row flex-col md:gap-10 lg:gap-14 2xl:gap-20 2xl:mt-20 lg:mt-16 2xl:my-20 lg:my-14 md:my-10 lg:pr-0 xl:pl-[100px] md:px-16 px-10'>
   <div className='font-Inter'>
      <h1 className='font-Gloock 2xl:text-8xl lg:text-6xl md:text-4xl text-3xl 2xl:mb-14 lg:mb-11 md:mb-9 mb-8'>
      Join us to make the world even better
      </h1>
      <p className='para-big lg:mb-16 md:mb-12 mb-10'>
      Bharat Floorings & Tiles is an organization with a blend of youth & experience. Our business values are based on Quality, Integrity & Excellent Service.
      </p>
      <div className='flex sm:flex-row flex-col 2xl:gap-20 lg:gap-14 md:gap-10 gap-8 md:mb-0 mb-5'>
<p className='para-medium'>
We aim to give our employees every chance to flourish in their career and grow as a part of our Company. Work with us and we will work with you to help you achieve your goals. Joining us is a start of a journey for building a diverse career with us.
We are on the lookout for dynamic professionals who have the ability to take the company forward and live with our Values.
</p>
<p className='para-medium'>
We have open vacancies in sales and accounts. It will be an added advantage for the candidates from the similar industry. 
If you feel that you are the right candidate, please send in your resume at <a href='mailto:hr.admin@bharatfloorings.com'
className='underline md:mb-0'
>hr.admin@bharatfloorings.com</a>
</p>
      </div>
    </div>
    <img src={careerImg.src} alt='interior image' 
    className='2xl:h-[867px] xl:h-[690px]  lg:h-[560px] lg:w-1/3 md:w-full md:h-auto'
    />
   </div> 
   <div className='bg-[#FFFEF2] relative overflow-hidden'>
    <LinesComp height={'100vh'} />
  <div className='relative py-7 2xl:py-12 xl:py-10 lg:py-8 2xl:mb-14 xl:mb-11 lg:mb-8 md:mb-6 mb-5 xl:px-[100px] md:px-16 sm:px-10 px-8'>
   <span className='xl:text-base md:text-sm text-xs font-medium font-Inter'>
    Benefits of working with us
   </span>
   <div className='flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center 2xl:mt-24 2xl:mb-12 xl:mt-20 xl:mb-10 lg:mt-16 lg:mb-8 mt-14 mb-7'>
   <h3 className='md:w-[30%] w-full para-big'>
    Work with the est in the countrty
   </h3>
   <h3 className='md:w-[30%] w-full para-big'>
    A diverse and inclusive workplace
   </h3>
   <h3 className='md:w-[30%] w-full para-big'>
    Happy place with happy people
   </h3>
   </div>
   <div className='bg-black h-[1.5px]' />
   <div className='flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center 2xl:my-12 xl:my-10 lg:my-9 my-8'>
    <h3 className='md:w-[30%] w-full para-big'>
    Value driven and design centric company
    </h3>
    <h3 className='md:w-[30%] w-full para-big'>
    Challenges and support for best growth
    </h3>
    <h3 className='md:w-[30%] w-full para-big'>
    Best in class remuneration
    </h3>
   </div>
   </div>
   </div>
   <div className='title-el relative 2xl:mb-40 xl:mb-32 lg:mb-24 md:mb-20 mb-14 xl:pl-[100px] md:pl-16 sm:pl-10 pl-8'>
    Open Positions
    <span className='absolute text-xs ml-1'>6</span>
   </div>
    <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 xl:px-[100px] md:px-16 sm:px-10 px-8'>
      {
        jobs.map((res)=>(
          <JobsCard key={res.id} jobRole={res.jobRole} location={res.location} experience={res.experience} qualification={res.qualification} jobDescription={res.jobDescription} />
        ))
      }
    </div>
    </div>
    </section>
    </>
  )
}

export default Careers