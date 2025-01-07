import { RESOURCES } from '@/utils'
import React from 'react'
import ResourcesPageCard from './ResourcesPageCard'
import LinesComp from './LinesComp'

const Resource = ({resource}) => {
  return (
    <section className='relative overflow-hidden'>
      <LinesComp height={'500vh'} />
      <div className='xl:px-[100px] md:px-16 sm:px-10 px-8 xl:my-14 md:my-10 sm:my-7 mcls
      y-5  relative min-h-96 overflow-y-scroll scroll'>
      <div className='flex items-center justify-end xl:mb-16 md:mb-12 sm:mb-9 mb-7'>
       Showing 55 of 55 releases
      </div>
      <div className='flex gap-4 xl:mb-40  md:flex-row flex-col lg:mb-32 md:mb-24 mb-16 sticky top-[0%]'>
       <div className='xl:w-[25%] md:w-[30%] w-full  font-semibold xl:text-base text-sm'>
          <u>
          <h3 className='mb-4 title-el'>
            ALL RESOURCES <sup className='text-xs'>64</sup>
          </h3>
          </u>
          <h3 className='title-el mb-1'>
            BLACK BOOK DOWNLOAD <sup className='text-xs mb-1'>64</sup>
          </h3>
          <h3 className='title-el mb-1'>
            CATALOGUE DOWNLOADS <sup className='text-xs mb-1'>64</sup>
          </h3>
          <h3 className='title-el mb-1'>
            FIXING & POLISHING <sup className='text-xs'>64</sup>
          </h3>
          <h3 className='title-el mb-1'>
            MADE IN INDIA <sup className='text-xs'>64</sup>
          </h3>
          <h3 className='title-el mb-1'>
            TECHNICAL SPECIFICATION <sup className='text-xs'>64</sup>
          </h3>
          <h3 className='title-el mb-1'>
            HERITAGE & UNITINTA TILES <sup className='text-xs'>64</sup>
          </h3>
          <h3 className='title-el mb-1'>
            TILE CLEANING  AND MAINTAINANCE <sup className='text-xs'>64</sup>
          </h3>
       </div>
       <div className='xl:w-[75%] md:w-[70%] w-full grid xl:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-5 md:justify-normal justify-center overflow-y-scroll scroll'>
        {
          resource.map((res)=>(
            <ResourcesPageCard key={res.id} image={res.image} resourceName={res.resourceName} docType={res.docType} size={res.size} />
          ))
        }
       </div>
      </div>
      </div>
    </section>
  )
}

export default Resource