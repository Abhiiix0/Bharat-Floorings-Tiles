import React from 'react'
import careerImg from '../../public/images/career_page_image.jpg'
import Intro from './Intro'
import JobsCard from './JobsCard'
import LinesComp from './LinesComp'

const Careers = ({ jobs }) => {
  return (
    <section className='max-w-[1920px] mx-auto relative overflow-hidden'>
      <LinesComp />
      <div className='relative xl:mb-56 lg:mb-48 md:mb-40 mb-32 2xl:mb-[245px] 2xl:mt-[59px] xl:mt-14 lg:mt-12 md:mt-10 mt-8  '>
        <div className='lg:flex hidden px-[100px] justify-between items-center font-Inter'>
          <span>Who we are</span> <span>100 years old</span>
        </div>
        <div className='flex lg:flex-row flex-col md:gap-10 lg:gap-14 2xl:gap-[78px] 2xl:mt-20 2xl:mb-[68px] xl:my-16 lg:my-14 md:my-10 my-8 lg:pr-0 lg:pl-[100px] px-[20px]'>
          <div className='font-Inter'>
            <h1 className='2xl:text-[100px] 2xl:leading-[100px] md:text-5xl text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal 2xl:mb-14 lg:mb-11 md:mb-9 mb-8'>
              Join us to make the world even better
            </h1>
            <p className='para-big lg:mb-16 md:mb-12 mb-8 2xl:w-[70%] xl:[w-80%] lg:w-[90%] w-full'>
              Bharat Floorings & Tiles is an organization with a blend of youth & experience. Our business values are based on Quality, Integrity & Excellent Service.
            </p>
            <div className='flex sm:flex-row flex-col xl:gap-10 md:gap-8 gap-6 md:mb-0 mb-5'>
              <div className='w-full 2xl:pr-10 pr-0'>
                <p className='para-medium'>
                  We aim to give our employees every chance to flourish in their career and grow as a part of our Company. Work with us and we will work with you to help you achieve your goals. Joining us is a start of a journey for building a diverse career with us.
                </p>
                <p className='para-medium'>
                  We are on the lookout for dynamic professionals who have the ability to take the company forward and live with our Values.
                </p>
              </div>
              <div className='w-full 2xl:pr-5 pr-0'>
                <p className='para-medium'>
                  We have open vacancies in sales and accounts. It will be an added advantage for the candidates from the similar industry.
                </p>
                <p className='para-medium'>
                  If you feel that you are the right candidate, please send in your resume <br /> at <a href='mailto:hr.admin@bharatfloorings.com'
                    className='underline md:mb-0'
                  >hr.admin@bharatfloorings.com</a>
                </p>
              </div>
            </div>
          </div>
          <img src={careerImg.src} alt='interior image'
            className='2xl:h-[867px] xl:h-[690px] lg:h-[560px] lg:w-1/3 md:w-full md:h-auto'
          />
        </div>
        <div className='bg-[#FFFEF2] relative overflow-hidden'>
          <LinesComp height={'100vh'} />
          <div className='relative py-7 2xl:py-11 xl:py-10 lg:py-8 2xl:mb-14 xl:mb-11 lg:mb-8 md:mb-6 mb-5 lg:px-[100px] px-[20px]'>
            <span className='xl:text-base md:text-sm text-xs font-medium font-Inter'>
              Benefits of working with us
            </span>
            <div className='flex md:flex-row flex-col md:gap-0 gap-3 justify-between items-center 2xl:mt-32 2xl:mb-12 xl:mt-20 xl:mb-10 lg:mt-16 lg:mb-8 mt-14 mb-7'>
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
            <div className='flex md:flex-row flex-col md:gap-0 gap-3 justify-between items-center 2xl:mt-10 2xl:mb-8 xl:mt-9 xl:mb-9 lg:my-8 my-6'>
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
        <div className='title-el 2xl:mb-[137px] 2xl:mt-11 xl:mb-32 xl:mt-9 lg:mb-24 md:mb-20 md:mt-8 mb-14 mt-6 lg:px-[100px] px-[20px]'>
          Open Positions <sup className='text-xs font-medium'>6</sup>
        </div>
        <div className='grid lg:grid-cols-3 2xl:gap-6 xl:gap-5 lg:gap-4 gap-3 md:grid-cols-2 lg:px-[100px] px-[20px]'>
          {
            jobs.map((res) => (
              <JobsCard key={res.id} jobRole={res.jobRole} location={res.location} experience={res.experience} qualification={res.qualification} jobDescription={res.jobDescription} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Careers