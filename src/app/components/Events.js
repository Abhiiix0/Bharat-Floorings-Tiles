import { EVENT_SECTION, EVENTS_SUB_SECTION, LOCATION_SECTION, TAG_SECTION, UPCOMING_EVENTS, YEAR_SECTION } from '@/utils'
import React from 'react'
import EventsCard from './EventsCard'
import DropDowns from './DropDowns'
import PastEventsCard from './PastEventsCard'
import LinesComp from './LinesComp'

const Events = ({upcomingEvents, tags, events, years, loctaion, pastEvents}) => {
  return (
  <section className='max-w-[1920px] mx-auto relative overflow-hidden'>
    <LinesComp height={'450vh'} />
    <div className='relative'>
  <div className='2xl:my-16 2xl:text-xl xl:my-14 lg:my-12 md:my-8 my-6 font-semibold relative xl:px-[100px] md:px-16 sm:px-10 px-8'>
  UPCOMING EVENTS
  <span className='absolute text-xs font-semibold'>2</span>
  </div>
  <div className='xl:px-7 lg:px-6 md:px-5 px-4'>
  {
    upcomingEvents.map(({id, eventName, eventDate,eventInfo, website, eventImage})=>(
      <EventsCard key={id} eventName={eventName} eventDate={eventDate} eventInfo={eventInfo} website={website} eventImage={eventImage} />
    ))
  }
  </div>
  <div className='xl:px-[100px] md:px-16 sm:px-10 px-8'>
  <div className='2xl:mt-24 2xl:mb-36 xl:mt-20 xl:mb-32 lg:mt-16 md:mt-12 mt-8 lg:mb-24 md:mb-16 mb-12 font-semibold flex sm:flex-row flex-col sm:gap-0 gap-4'>
   <div className='relative 2xl:my-16 2xl:text-xl w-2/3'>
     PAST EVENTS
     <span className='absolute text-xs'>
     57
     </span>
   </div>
 <div className='flex items-center justify-between xl:w-1/3 lg:w-2/3 w-full'>

 <div>
    {
      tags.map(({id, section, subsection})=>(
        <DropDowns key={id} section={section} subsection={subsection} />
      ))
    }
   </div>
   <div>
    {
      events.map(({id, section, subsection})=>(
        <DropDowns key={id} section={section} subsection={subsection} />
      ))
    }
   </div>
   <div>
    {
      years.map(({id, section, subsection})=>(
        <DropDowns key={id} section={section} subsection={subsection} />
      ))
    }
   </div>
   <div>
    {
      loctaion.map(({id, section, subsection})=>(
        <DropDowns key={id} section={section} subsection={subsection} />
      ))
    }
   </div>
 </div>
  </div>
  <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-6 2xl:mb-48 xl:mb-40 lg:mb-32 md:mb-24'>
   {
    pastEvents.map(({id, eventImg, eventDate, eventName})=>(
      <PastEventsCard key={id} eventImg={eventImg} eventDate={eventDate} eventName={eventName} />
    ))
   }
   </div>
   </div>
   </div>
   </section>
  )
}

export default Events