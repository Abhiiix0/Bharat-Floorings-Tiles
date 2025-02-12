import eventsShare from '../../../public/svgs/eventsShare.svg'
const EventsCard = ({ eventName, eventDate, eventInfo, website, eventImage,eventPlace }) => {
  return (
    <div className='3xl:h-[1220px] 3xl:min-w-[1362px] lg:min-w-[80%] min-w-full 2xl:h-[950px] lg:h-[800px] h-auto bg-[#2A2523] rounded-xl flex sm:flex-row flex-col text-white overflow-hidden'>
      <div
        className='3xl:pt-[139px] 3xl:pl-14 3xl:pr-14 xl:pt-14 xl:pl-8 xl:pr-12 lg:py-20 lg:pl-9 lg:pr-14 md:py-14 md:pl-7 md:pr-20 py-10 pl-5 pr-14 relative'>
            <img src={eventsShare.src} alt="share button" className='absolute 3xl:top-14 3xl:right-16 top-8 right-8 cursor-pointer' />
        <h1 className='3xl:text-[100px] 3xl:leading-[100px] md:text-5x text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal text-[#8FDEAA] 3xl:mb-[50px] 2xl:mb-9 lg:mb-5 md:mb-3'>
          {eventName}
        </h1>
        <p className='para-big md:text-xl 3xl:mb-14 lg:mb-5 text-xl mb-2'>
          {eventPlace}
          <br />
          {eventDate}
        </p>
        {
          eventInfo.map(({ id, info }) => (
            <p key={id} className='3xl:text-xl 3xl:leading-[32px] ;g:text-lg lg:leading-[28px] text-base leading-[25.6px] 3xl:mb-6 lg:mb-5 md:mb-4 mb-3 3xl:pr-12 pr-2'>
              {info}
            </p>
          ))
        }
        <p className='3xl:text-xl 3xl:leading-[32px] lg:text-lg lg:leading-[28px] text-base leading-[25.6px]'>
          Get your ticket at <u><b><a href={`${website}`}>{website}</a></b></u>
        </p>
      </div>
      <img src={eventImage.src}
        alt={`${eventName} image`}
        className='sm:w-[47%] w-full h-96 sm:h-full'
      />
    </div>
  )
}

export default EventsCard