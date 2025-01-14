'use client'
import Link from 'next/link'
import { useState } from 'react';
import { RiArrowRightLine } from "react-icons/ri";

const ProjectsCard = ({ image, publicity, designer1, designer2, designerImage }) => {
  const [projectImage, setProjectImage] = useState(image)
  return (
    <div className='md:h-[550px] lg:h-[690px] xl:h-[830px] 3xl:h-[1039px] 3xl:max-w-[780px] font-Inter'>
      <img src={projectImage.src}
        alt={`${publicity} image`}
        className='md:h-[415px] lg:h-[520px] xl:h-[620px] 3xl:h-[780px] 2xl:min-h-[600px] mb-5 lg:mb-6 xl:mb-8 w-full 2xl:mb-10'
      />
      <div className='flex items-center lg:mb-4 xl:mb-5 justify-between 2xl:mb-7 lg:text-base sm:text-sm text-xs'>
        <p>
          {publicity}
        </p>
        <Link href='projects/project-details' className='link-el border-black border-[1px] w-32 lg:text-base sm:text-sm text-xs xl:w-[130px] 2xl:w-[165px] xl:pl-3 pl-2 2xl:pl-6 link'>View project <RiArrowRightLine className='arrow' />
        </Link>
      </div>
      <p className='lg:text-base sm:text-sm text-xs'>
        {designer1}
      </p>
      <p className='lg:text-base sm:text-sm text-xs'>
        {designer2}
      </p>
      <div className='flex md:mt-3 lg:mt-4 xl:mt-5 gap-2 2xl:gap-3 2xl:mt-7'>
        {
          designerImage.map(({ id, image }) => (
            <img onClick={() => setProjectImage(image)} className='2xl:h-[60px] 2xl:w-[60px] lg:h-12 lg:w-12 xl:h-14 xl:w-14 cursor-pointer' key={id} src={image.src} />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsCard