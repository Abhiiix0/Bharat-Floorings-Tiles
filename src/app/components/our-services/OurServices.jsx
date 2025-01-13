import React from 'react'
import OurServicesCard from './OurServicesCard'
import LinesComp from '../LinesComp'

const OurServices = ({ services }) => {
  return (
    <section className='relative overflow-hidden'>
      <LinesComp height={'320vh'} />
      <div className='mb-20 md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-52 max-w-[1920px] mx-auto lg:px-[100px] px-[20px] relative'>
        <h1 className='big-heading 3xl:mt-[146.4px] 3xl:mb-[287px] 2xl:mt-20 2xl:mb-44 xl:mt-16 xl:mb-36 lg:mb-28 md:mt-14 md:mb-20 mt-14 mb-16'>Our Services</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-10'>
          {
            services.map((res) => (
              <OurServicesCard key={res.id} image={res.image} designType={res.designType} designInfo={res.designInfo} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OurServices