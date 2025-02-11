import React from 'react'

const LatestEvents = ({eventImg, eventName, eventDate}) => {
  return (
    <div className='2xl:max-w-[412px] 2xl:min-w-[320px] lg:max-w-96 lg:min-w-44 sm:min-w-[340px] min-w-[315px]'>
      <img
        alt={`${eventName} image`}
        src={eventImg.src}
        className='2xl:h-[309px] lg:h-72 sm:h-64 h-[236px] w-full'
      />
      <div className='mt-[23px] mb-5'>
        <span className='xl:text-base md:text-sm text-[13px] leading-[35.4px] font-Inter'>
          {eventDate}
        </span>
        <h3 className='xl:text-[26px] xl:leading-[36.4px] md:text-2xl md:leading-8 text-xl leading-7 font-Inter font-medium mt-1'>
          {eventName}
        </h3>
      </div>
    </div>
  )
}

export default LatestEvents