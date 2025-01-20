'use client'
import React, { useRef, useState } from 'react'
import ControlBar from './ControlBar'
import tileDesignA from '../../../../public/svgs/tileDesignA.svg'
import WrokbenchBaord from './WrokbenchBaord'
import Visualise from './Visualise'
import workbenchClick from '../../../../public/svgs/workbenchClick.svg'
import designChair from '../../../../public/images/workbench/designChair.jpg'
import { LuImageDown, LuUpload, } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Workbench = () => {
  const [click, setClick] = useState(false)
  const [board, setBoard] = useState(false)
  const [visuals, setVisuals] = useState(false)
  const [imageSaved, setImageSaved] = useState(false)
  const [rotate, setRotate] = useState(0)
  const imgRef = useRef()
  const rotateHandle = (e) => {
    setRotate(prev => prev + 90)
    e.target.style.rotate = `${rotate}deg`
  }
  return (
    <div className='3xl:h-[1200px] 2xl:h-[960px] xl:h-[850px] lg:h-[650px] h-[480px] grid grid-cols-11 gap-0 relative overflow-hidden'>
      <img onClick={() => setBoard(!board)} src={workbenchClick.src} className={`absolute left-0 top-10 cursor-pointer`} />
      <div className={`effect absolute top-10 z-10 ${board ? 'ml-24' : '-ml-[100%]'}`}>
        <WrokbenchBaord setBoard={setBoard} />
      </div>
      {
        [...Array(77)].map((_, i) => (
          <img key={i} src={tileDesignA.src} ref={imgRef}
            className='effect' onClick={rotateHandle}
          />
        ))
      }
      {
        click && <div className="absolute right-20 3xl:top-56 2xl:top-32 xl:top-28 lg:top-20 top-5">
          <Visualise setVisuals={setVisuals} />
        </div>
      }
      <div
        style={{
          backgroundImage: `url(${designChair.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className={`effect delay-1000 3xl:h-[1241px] 2xl:h-[960px] xl:h-[850px] lg:h-[650px] h-[480px] w-full z-50 absolute ${visuals ? 'mr-0' : 'ml-[100%]'}`}>
        <div className='absolute right-[100px] top-20 flex gap-3'>
          <div className='h-[69px] w-[69px] rounded-full flex items-center justify-center bg-[#b0b0b0] border-4 border-[#dbdbdb] cursor-pointer'>
            <LuImageDown color='#dbdbdb' className='text-4xl' />
          </div>
          <div className='h-[69px] w-[69px] rounded-full flex items-center justify-center bg-[#b0b0b0] border-4 border-[#dbdbdb] cursor-pointer'>
            <LuUpload color='#dbdbdb' className='text-4xl' />
          </div>
          <div onClick={() => setVisuals(false)} className='h-[69px] w-[69px] rounded-full flex items-center justify-center bg-[#b0b0b0] border-4 border-[#dbdbdb]  cursor-pointer'>
            <RxCross2 color='#dbdbdb' className='text-4xl' />
          </div>
        </div>
      </div>
      <div className='absolute w-full lg:px-[100px] px-[20px] 3xl:bottom-12 2xl:bottom-10 xl:bottom-9 lg:bottom-8 bottom-7'>
        <ControlBar click={click} setClick={setClick} setImageSaved={setImageSaved} />
      </div>
      <div className={`effect absolute flex items-center justify-center bg-black text-white h-16 w-72 rounded-md para-medium right-[22%] ${imageSaved ? 'bottom-40' : '-bottom-[100%]'}`}>
        Image Saved Successfully
      </div>
    </div>
  )
}

export default Workbench