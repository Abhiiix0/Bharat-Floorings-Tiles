import { OUR_SERVICES_PAGE } from '@/utils'
import React from 'react'
import OurServicesCard from './OurServicesCard'
import LinesComp from './LinesComp'

const OurServices = ({services}) => {
  return (
  <section className='relative overflow-hidden'>
    <LinesComp height={'320vh'} />
    <div className='mb-20 md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-52 max-w-[1920px] mx-auto xl:px-[100px] md:px-16 sm:px-10 px-8 relative'>
  <h1 className='font-Gloock text-[10vw] 2xl:text-[9rem] my-10 md:my-14 xl:my-20 2xl:my-24'>Projects</h1>
  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-10'>
{
  services.map((res)=>(
    <OurServicesCard key={res.id} image={res.image} designType={res.designType} designInfo={res.designInfo} />
  ))
}
  </div>
  </div>
  </section>
  )
}

export default OurServices