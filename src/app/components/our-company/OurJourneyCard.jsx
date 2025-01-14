const OurJourneyCard = ({ year, heading, para, image, left, top, sectionLeft, bgYear }) => {
  return (
    <div className='2xl:h-[940px] xl:h-[800px] lg:h-[700px] h-[600px] relative overflow-hidden'>
      <div
        style={{ left: sectionLeft }}
        className={`2xl:max-w-[715px] xl:w-[550px] lg:w-[450px] absolute z-10`}>
        <h2 className='font-Gloock xl:text-[70px] font-normal text-5xl'>{year}</h2>
        <h3 className='para-big my-3'>{heading}</h3>
        <p className='font-Inter xl:text-base xl:leading-[25.6px] xl:mb-14 text-sm leading-[22px] mb-9 xl:w-4/5 w-full'>
          {para}
        </p>
        <img alt={`${heading} image`} src={image.src} className="2xl:h-[677px}" />
      </div>
      <h1
        style={{
          left: left,
          top: top
        }}
        className='absolute z-0 2xl:text-[400px] xl:text-[350px] lg:text-[290px] md:text-[340px] text-[#f5f5f5]'>{bgYear}</h1>
    </div>
  )
}

export default OurJourneyCard