import { OUR_SERVICES_PAGE } from '@/utils'
import React from 'react'
import OurServicesCard from './OurServicesCard'

const OurServices = () => {
  return (
  <section className='md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-52 max-w-[1920px] mx-auto'>
  <h1 className='font-Gloock text-[10vw] 2xl:text-[9rem] my-10 md:my-14 xl:my-20 2xl:my-24'>Projects</h1>
  <div className='flex gap-4'>
{
  OUR_SERVICES_PAGE.map(({id, image, designType, designInfo})=>(
    <OurServicesCard key={id} image={image} designType={designType} designInfo={designInfo} />
  ))
}
  </div>

  </section>
  )
}

export default OurServices