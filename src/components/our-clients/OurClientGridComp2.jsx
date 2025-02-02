import Link from 'next/link';
import React, { useState } from 'react'

const OurClientGridComp2 = ({ industryName, industry, tradeMark, domain, clientName, link, productImg, image }) => {
  const [click, setClick] = useState(false)
  return (
    <div className='h-[274px]'>
      <div onClick={() => setClick(!click)} className={`mb-20 h-full w-full overflow-hidden effect relative ${click ? 'w-[200%] -translate-x-1/2' : 'w-[100%]'}`}>
        {
          click ?
            <div className='absolute bg-[#00000099] text-white h-full min-w-full z-10 flex'>
              <div className='2xl:py-10 2xl:px-5 flex flex-col justify-between lg:py-7 px-4 py-5 w-[50%]'>
                <h3 className='font-bold 2xl:mb-9 lg:mb-8 mb-7'>{industryName}<sup>{tradeMark}</sup> {industry} ({domain})</h3>
                <p className='2xl:mb-16 lg:mb-14 mb-12 text-lg'>{clientName}</p>
                <Link href={`${link}`} className='font-bold underline' >View tile detail</Link>
              </div>
              <div className='w-[50%] h-full flex justify-center items-center overflow-hidden p-5'>
                <img alt='product image' src={productImg.src} className='h-full' />
              </div>
            </div> :
            null
        }
        <img alt={`${clientName} image`} src={image.src} className='h-full w-full hover:scale-150 z-0 zoom-in absolute effect' />
      </div>
    </div>
  );
};

export default OurClientGridComp2