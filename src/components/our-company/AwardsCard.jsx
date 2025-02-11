import React, { useState } from 'react'
import AwardsModal from './AwardsModal'

const AwardsCard = ({ image, date, awardedFor, awardName }) => {
  const [close, setClose] = useState(false)
  return (
    <div onClick={() => setClose(true)} className='xl:h-[397px] xl:min-w-[555px] md:h-[360px] md:min-w-96  min-w-[316px] h-[325px] flex flex-col xl:gap-7 md:gap-6 gap-[22px] xl:p-10 lg:p-8 md:p-6 p-5 bg-white  '>
      {close && <AwardsModal close={close} setClose={setClose} />}
      <img alt={`${awardedFor} image`} src={image.src} className='h-24 w-24 rounded-full' />
      <div className='flex md:flex-row flex-col md:items-center md:justify-between xl:text-base xl:leading-[25.6px] text-[13px] leading-[35.4px] font-Inter'>
        <span>{date}</span>
        <span>{awardedFor}</span>
      </div>
      <p className='xl:text-3xl xl:leading-[42px] md:text-2xl md:leading-9 text-xl leading-7 font-Inter font-medium pr-5'>
        {awardName}
      </p>
    </div>
  )
}

export default AwardsCard