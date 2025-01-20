'use client'
import { useState } from "react"
import leftArrow from '../../../../public/svgs/leftArrow.svg'
import TilesDetail from "./TilesDetail"
import { BORDER_DESIGN_1, BORDER_DESIGN_2, BORDER_DESIGN_3, DESIGNER_NAME } from "@/utils"
import Tiles from "./Tiles"

const WrokbenchBaord = ({ setBoard }) => {
  const [click, setClick] = useState(false)
  return (
    <div className="3xl:h-[1003px] xl:h-[800px] lg:h-[700px] h-screen border-2 3xl:w-[529px] xl:w-[450px] lg:w-[400px] w-96 rounded-md bg-white relative overflow-y-scroll overflow-x-hidden scroll">
      <img
        onClick={() => setBoard(false)}
        alt="left arrow"
        className="cursor-pointer absolute xl:top-4 lg:top-2 top-1"
        src={leftArrow.src}
      />
      <div className="3xl:px-[23px] xl:px-5 lg:px-4 px-3">
        <div className="3xl:mt-[65px] xl:mt-14 lg:mt-12 mt-10 3xl:h-[52px] xl:h-12 lg:h-11 h-10 flex rounded-md bg-[#D9D9D9] w-full relative overflow-hidden" >
          <div className={`effect absolute h-full bg-[#2A2523] w-1/2 z-0 ${click ? 'ml-[50%]' : 'ml-0'}`}></div>
          <div
            onClick={() => setClick(false)}
            className={`w-1/2 flex justify-center items-center font-base leading-[35.4px] font-medium cursor-pointer z-10 ${click ? 'text-black' : 'text-white'}`}>
            TILES
          </div>
          <div
            onClick={() => setClick(true)}
            className={`w-1/2 flex justify-center items-center font-base 3xl:leading-[35.4px] font-medium cursor-pointer z-10 ${click ? 'text-white' : 'text-black'}`}>
            BORDERS
          </div>
        </div>
      </div>
      {
        click ? <div className="3xl:mt-[57px] xl:mt-12 lg:mt-10 mt-8 3xl:px-[37px] xl:px-7 lg:px-6 px-5 ">
          <Tiles tilesDesigns={BORDER_DESIGN_1} />
          <Tiles tilesDesigns={BORDER_DESIGN_2} />
          <Tiles tilesDesigns={BORDER_DESIGN_3} />
          <Tiles tilesDesigns={BORDER_DESIGN_1} />
          <Tiles tilesDesigns={BORDER_DESIGN_2} />
          <Tiles tilesDesigns={BORDER_DESIGN_3} />
        </div> : <div className="3xl:pl-[58.5px] xl:pl-12 lg:pl-10 pl-9 3xl:mt-[62px] xl:mt-12 lg:mt-10 mt-8"><TilesDetail /></div>
      }
    </div>
  )
}

export default WrokbenchBaord