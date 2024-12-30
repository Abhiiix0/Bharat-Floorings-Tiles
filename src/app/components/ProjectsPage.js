import { DESIGNER_IMAGES, PROJECT_PAGE_IMAGES } from '@/utils'
import React from 'react'
import ProjectsCard from './ProjectsCard'

const ProjectsPage = () => {
  return (
    <section className='md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-52 max-w-[1920px] mx-auto'>
       <h1 className='font-Gloock text-[10vw] 2xl:text-[9rem] my-10 md:my-14 xl:my-20 2xl:my-24'>Projects</h1>
       <div className='grid grid-cols-2 grid-row-4 md:gap-x-11 md:gap-y-20 lg:gap-x-14 lg:gap-y-24 xl:gap-x-16 xl:gap-y-32 2xl:gap-x-[90px] 2xl:gap-y-40'>
     {
      PROJECT_PAGE_IMAGES.map(({id, publicity, image, designer1, designer2})=>(
        <ProjectsCard key={id} publicity={publicity} image={image} designer1={designer1} designer2={designer2} designerImage={DESIGNER_IMAGES} />
      ))
     }
     </div>
    </section>
  )
}

export default ProjectsPage