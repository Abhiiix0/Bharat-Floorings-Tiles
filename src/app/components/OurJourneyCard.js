const OurJourneyCard = ({year, heading, para, image, fontSize, left, top,sectionLeft}) => {
  return (
    <div className='2xl:h-[1070px] xl:h-[900px] lg:h-[750px] md:h-[600px] w-full relative overflow-hidden'>
      <div
      style={{left: sectionLeft}}
      className={`2xl:w-[716px] xl:w-[550px] lg:w-[450px] absolute z-10`}>
        <h2 className='font-Gloock xl:text-7xl font-normal text-5xl'>{year}</h2>
        <h3 className='font-Inter font-medium xl:text-3xl xl:my-5 text-2xl my-3'>{heading}</h3>
        <p className='font-Inter xl:text-base xl:leading-[25.6px] xl:mb-14 text-sm leading-[22px] mb-9 w-4/5'>
         {para}
        </p>
        <img src={image.src} />
      </div>
      <h1 
      style={{
        left:left,
        top:top
      }}
      className='absolute z-0 2xl:text-[400px] xl:text-[350px] lg:text-[290px] md:text-[340px] text-[#f5f5f5]'>{year}</h1>
    </div>
  )
}

export default OurJourneyCard