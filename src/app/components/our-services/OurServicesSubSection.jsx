'use client'
import { OUR_SERVICES_PAGE } from "@/utils"
import Link from "next/link"
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import LinesComp from "../LinesComp";

const OurServicesSubSection = () => {
  const [layout, setLayout] = useState(OUR_SERVICES_PAGE[0])
  return (
    <section className='relative overflow-hidden'>
      <LinesComp height={'300vh'} />
      <div className="relative lg:px-[100px] px-[20px]">
        <h1 className='big-heading 3xl:mt-[146.4px] 3xl:mb-[287px] 2xl:mt-20 2xl:mb-44 xl:mt-16 xl:mb-36 lg:mb-28 md:mt-14 md:mb-20 mt-14 mb-16'>Our Services</h1>
        <div className='hidden grid-cols-3 bg-[#EBEBEB] h-10 cursor-pointer relative lg:grid'>
          <div className={`effect absolute bg-black w-1/3 z-0 h-full ${layout.designType === 'CUSTOM TILE DESIGN' ? 'ml-[33.33%]' : layout.designType === 'TILE INSTALLATION SERVICES' ? 'ml-[67%]' : layout.designType === 'FLOOR DESIGN LAYOUTS' ? 'ml-0' : null}`}></div>
          <div onClick={() => setLayout(OUR_SERVICES_PAGE[0])} className={`flex items-center justify-center z-10 ${layout.designType === 'FLOOR DESIGN LAYOUTS' ? 'text-white' : 'text-black'}`}> FLOOR DESIGN LAYOUTS</div>
          <div onClick={() => setLayout(OUR_SERVICES_PAGE[1])} className={`flex items-center justify-center z-10 ${layout.designType === 'CUSTOM TILE DESIGN' ? 'text-white' : 'text-black'}`}> CUSTOM TILE DESIGN </div>
          <div onClick={() => setLayout(OUR_SERVICES_PAGE[2])} className={`flex items-center justify-center z-10 ${layout.designType === 'TILE INSTALLATION SERVICES' ? 'text-white' : 'text-black'}`}> TILE INSTALLATION SERVICES </div>
        </div>
        <div className='3xl:min-h-[1008px] xl:min-h-[700px] lg:min-h-[600px] h-auto flex lg:flex-row flex-col-reverse justify-between xl:mt-14 xl:mb-28 lg:mt-10 lg:mb-20 mt-6 mb-10'>
          <div className="xl:py-10 lg:py-8 py-6">
            <h1 className="2xl:text-[100px] 2xl:leading-[100px] md:text-5xl text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal">
              {layout.designType.toLowerCase().split('  ').map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')}
            </h1>
            <p className="para-big xl:mt-10 xl:mb-20 lg:mt-7 lg:mb-14 mt-5 mb-10 lg:pr-28">
              Customized flooring solutions: <br /> Where your vision meets our expertise
            </p>
            {
              layout.designInfo.map((el) => (
                <p key={el.id} className="para-medium lg:pr-28">
                  {el.info}
                </p>
              ))
            }
            <Link href='/service' className='border-black border-[1px] w-52 lg:w-52 xl:w-60 2xl:w-72 2xl:mt-16 xl:mt-12 lg:mt-8 mt-6 xl:pl-3 pl-3 2xl:pl-7 link link-el'>
              Start your floor journey now! <RiArrowRightLine className="arrow" />
            </Link>
          </div>
          <img alt={`${layout.designType} image`} className="lg:min-h-full 3xl:min-w-[848px] 2xl:min-w-[650px] xl:min-w-[500px] lg:min-w-96 w-full md:h-[500px] rounded-md h-auto" src={layout.image.src} />
        </div>
      </div>
    </section>
  )
}

export default OurServicesSubSection