'use client'
import EventsCard from './EventsCard'
import DropDowns from '../ui/DropDowns'
import PastEventsCard from './PastEventsCard'
import LinesComp from '../LinesComp'
import { useState } from 'react'

const Events = ({ upcomingEvents, tags, events, years, loctaion, pastEvents }) => {
  const [close, setClose] = useState(false)
  return (
    <section className='max-w-[1920px] mx-auto z-0 relative overflow-hidden'>
      <LinesComp />
      <div className='relative z-10'>
        <div className='2xl:my-16 2xl:text-xl xl:my-14 lg:my-12 md:my-8 my-6 font-semibold relative lg:px-[100px] px-[20px]'>
          UPCOMING EVENTS
          <span className='absolute text-xs font-semibold'>2</span>
        </div>
        <div className='xl:px-7 lg:px-6 md:px-5 px-4 overflow-x-scroll scroll flex gap-[21px]'>
          {
            upcomingEvents.map((res) => (
              <EventsCard key={res.id} eventName={res.eventName} eventDate={res.eventDate} eventInfo={res.eventInfo} website={res.website} eventImage={res.eventImage} eventPlace={res.eventPlace} />
            ))
          }
        </div>
        <div className='lg:px-[100px] px-[20px]'>
          <div className='2xl:mt-7 2xl:mb-36 xl:mt-20 xl:mb-32 lg:mt-16 md:mt-12 mt-8 lg:mb-24 md:mb-16 mb-12 font-semibold flex sm:flex-row flex-col sm:gap-0 gap-4'>
            <div className='relative 2xl:my-16 2xl:text-xl 3xl:w-2/3 lg:w-[30%] font-Inter xl:text-xl text-base'>
              PAST EVENTS
              <span className='absolute text-xs'>
                57
              </span>
            </div>
            <div className='flex items-center justify-between 3xl:w-2/4 lg:w-[70%] w-full'>

              <div>
                {
                  tags.map((res) => (
                    <DropDowns key={res.id} section={res.section} subsection={res.subsection} />
                  ))
                }
              </div>
              <div>
                {
                  events.map((res) => (
                    <DropDowns key={res.id} section={res.section} subsection={res.subsection} />
                  ))
                }
              </div>
              <div>
                {
                  years.map((res) => (
                    <DropDowns key={res.id} section={res.section} subsection={res.subsection} />
                  ))
                }
              </div>
              <div>
                {
                  loctaion.map((res) => (
                    <DropDowns key={res.id} section={res.section} subsection={res.subsection} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-6 2xl:mb-48 xl:mb-40 lg:mb-32 md:mb-24'>
            {
              pastEvents.map((res) => (
                <PastEventsCard key={res.id} eventImg={res.eventImg} eventDate={res.eventDate} eventName={res.eventName} close={close} setClose={setClose} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events