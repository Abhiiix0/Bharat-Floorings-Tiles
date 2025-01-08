
const EventsCard = ({eventName, eventDate,eventInfo, website, eventImage}) => {
  return (
    <div className='bg-[#2A2523] rounded-xl flex sm:flex-row flex-col text-white overflow-hidden'>
      <div 
      className='2xl:py-28 2xl:pl-14 2xl:pr-36 xl:py-24 xl:pl-12 xl:pr-32 lg:py-20 lg:pl-9 lg:pr-28 md:py-14 md:pl-7 md:pr-20 py-10 pl-5 pr-14'>
       <h1 className='2xl:text-[100px] 2xl:leading-[100px] md:text-5x text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal text-[#8FDEAA] 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3'>
     {eventName} 
      </h1> 
       <p className='para-big md:textxl xl:mb-14 lg:mb-12 text-xl md:mb-9 mb-7'>
        <br/> 
       {eventDate}
       </p>
       {
        eventInfo.map(({id, info})=>(
          <p key={id} className='para-medium xl:mb-6 lg:mb-5 md:text-sm text-xs md:mb-4  mb-3'>
            {info}
        </p>
        ))
       }
        <p className='para-medium'>
        Get your ticket at <u><b><a href={`${website}`}>{website}</a></b></u>
        </p>
      </div>
        <img src={eventImage.src} 
        className='sm:w-[48%] w-full h-96 sm:h-full'
        />
    </div>
  )
}

export default EventsCard