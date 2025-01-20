'use client'
import React, { useState } from 'react'
import ClientFilter from './ClientFilter'
import OurClientsListPage from './OurClientsListPage'
import OurClientsGridPage from './OurClientsGridPage'
import LinesComp from '../LinesComp'

const OurClients = ({ resturants, hotels, resource }) => {
  const [changeView, setChangeView] = useState(false)
  return (
    <section className='max-w-[1920] mx-auto relative'>
      <div className='overflow-hidden'>
        <LinesComp />

        <div className='relative'>
          <div className='lg:px-[100px] px-[20px] xl:my-14 lg:my-11 md:my-9 my-8'>
            <ClientFilter changeView={changeView} setChangeView={setChangeView} />
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