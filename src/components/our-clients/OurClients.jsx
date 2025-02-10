'use client'
import React, { useEffect, useState } from 'react'
import OurClientsListPage from './OurClientsListPage'
import OurClientsGridPage from './OurClientsGridPage'
import LinesComp from '../LinesComp'
import GridLogo from "../../../public/icons/gridLogo.jsx";
import DropDowns from "../DropDowns";
import LinesLogo from "../../../public/icons/LinesLogo.jsx";
const allCleints = [{ id: 1, subs: "ALL CLIENTS" }];

const OurClients = ({ resturants, hotels, resource }) => {
  const [changeView, setChangeView] = useState(false)
  return (
    <section className='max-w-[1920] mx-auto md:mb-0 sm:mb-24 mb-[82px] relative'>
      <div className='overflow-hidden'>
        <LinesComp />
        <div className='relative'>
          <div className='lg:px-[100px] px-[20px] xl:my-14 lg:my-11 md:my-9 my-8'>
          <div className="flex items-center justify-between">
      <din className="flex lg:gap-0 gap-16 flex-row w-full lg:justify-between lg:w-1/5">
        <div className="effect gap-2 flex relative ">
          <div
            className={`absolute effect h-9 w-[38px] z-0 mt-[2px] ${changeView ? "bg-[#949291]" : "bg-[#2A2523]"
              } ${changeView ? "ml-[50px]" : null}`}
          ></div>
          <div
            onClick={() => setChangeView(false)}
            className="p-[5px] z-10  cursor-pointer"
          >
            <GridLogo color={`${changeView ? "#000" : "#fff"}`} />
          </div>
          <div
            onClick={() => setChangeView(true)}
            className="p-[5px] z-10 cursor-pointer "
          >
            <LinesLogo color={`${changeView ? "#fff" : "#000"}`} />
          </div>
        </div>
        <div className="w-2/4">
          <DropDowns section={"Client type"} subsection={allCleints} color="#949291" />
        </div>
      </din>
      <div className="lg:text-base text-xs font-Inter md:block hidden">Showing 299 clients</div>
    </div>
            {/* <ClientFilter changeView={changeView} setChangeView={setChangeView} /> */}
          </div>
          <div>
            {
              changeView ? <div className='lg:px-[100px] px-[20px]'><OurClientsListPage resturants={resturants} hotels={hotels} /> </div> : <OurClientsGridPage resource={resource} />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClients