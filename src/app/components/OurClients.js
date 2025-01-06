'use client'
import React, { useEffect, useState } from 'react'
import ClientFilter from './ClientFilter'
import OurClientsListPage from './OurClientsListPage'
import OurClientsGridPage from './OurClientsGridPage'
import LinesComp from './LinesComp'

const OurClients = ({resturants, hotels, resource}) => {
  const [changeView, setChangeView] = useState(false)
  return (
    <section className='max-w-[1920] mx-auto relative overflow-hidden'>
      <LinesComp height={'650vh'} />
    <div className='relative'>
    <div className='xl:px-[100px] md:px-16 sm:px-10 px-8 xl:my-14 lg:my-11 md:my-9 my-8'>
    <ClientFilter changeView={changeView} setChangeView={setChangeView} />
    </div>
    <div>
     {
      changeView ? <div  className='xl:px-[100px] md:px-16 sm:px-10 px-8'><OurClientsListPage resturants={resturants} hotels={hotels}/> </div> : <OurClientsGridPage resource={resource} />
     }
     </div>
     </div>
    </section>
  )
}

export default OurClients