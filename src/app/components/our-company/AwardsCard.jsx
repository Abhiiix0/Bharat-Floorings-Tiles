import React from 'react'

const AwardsCard = ({image, date, awardedFor, awardName}) => {
  return (
    <div className='p-10 bg-white 2xl:h-[397px] 2xl:min-w-[555px] md:h-80 lg:min-w-[450px] min-w-96 '>
     <img src={image.src} className='h-24' />
     <div className='flex items-center justify-between xl:text-base xl:leading-[25.6px] text-sm leading-[23px] xl:my-10 lg:my-8 my-7'>
     <span>{date}</span>
     <span>{awardedFor}</span>
     </div>
     <p className='font-Inter xl:text-3xl xl:my-6 lg:my-5 my-4 lg:font-2xl md:text-xl text-lg font-medium'>
     {awardName}
     </p>
    </div>
  )
}

export default AwardsCard