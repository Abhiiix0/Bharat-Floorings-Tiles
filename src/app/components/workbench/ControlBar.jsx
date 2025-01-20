'use client'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const ControlBar = ({ click, setClick, setImageSaved }) => {
  const imageSavedHandle = () => {
    setImageSaved(true)
    setTimeout(() => {
      setImageSaved(false)
    }, 1200)
  }
  return (
    <div className='3xl:h-87px xl:h-[70px] lg:h-[60px] h-12 bg-white flex justify-between items-center'>
      <div className='h-full para-medium flex items-center 3xl:gap-[60px] xl:gap-12 lg:gap-10 gap-7 3xl:pl-[50px] xl:pl-10 lg:pl-8 pl-7 font-semibold'>
        <span className='cursor-pointer'>Rotate</span>
        <span className='cursor-pointer'>Color</span>
        <div className='flex items-center lg:gap-2 gap-1'>
          <span>Zoom</span>
          <AiOutlineMinusCircle size={32} className='cursor-pointer' />
          <AiOutlinePlusCircle size={32} className='cursor-pointer' />
        </div>
      </div>
      <div className='h-full flex 3xl:py-[11px] xl:py-[7px] lg:py-[6px] py-1 xl:pr-[11px] lg:pr-2 pr-[6px] para-medium font-medium 3xl:gap-8 xl:gap-6 lg:gap-4 gap-3 items-center '>
        <span onClick={imageSavedHandle} className='cursor-pointer'>
          Save image
        </span>
        <div className='3xl:h-16 xl:h-14 3xl:w-[352px] xl:w-72 lg:h-12 lg:w-64 h-10 w-60 border-2 border-black flex cursor-pointer relative'>
          <div className={`effect absolute z-0 bg-[#2A2523] w-1/2 h-full ${click ? 'ml-0' : 'ml-[50%]'}`}></div>
          <div onClick={() => setClick(true)} className={`w-1/2 flex items-center z-10 justify-center ${click ? 'text-white' : 'text-black'}`}>Visualise</div>
          <div onClick={() => setClick(false)} className={`w-1/2 flex items-center justify-center z-10 ${click ? 'text-black' : 'text-white'}`}>
            Get a quote
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlBar