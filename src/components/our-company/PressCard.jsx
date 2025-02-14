const PressCard = ({pressImg, pressName, pressDate}) => {
  return (
    <div className='font-Inter 2xl:max-w-[412px] 2xl:min-w-[320px] lg:max-w-96 lg:min-w-44 sm:min-w-[340px] min-w-[315px]'>
    <img src={pressImg.src}
      alt={`${pressName} image`}
      className='2xl:h-[500px] lg:h-[440px] sm:h-[412px] h-[382px] w-full'
    />
    <div className='mt-[23px] mb-5'>
      <span className='xl:text-base md:text-sm text-[13px] leading-[35.4px] font-Inter'>
        {pressDate}
      </span>
      <h3 className='xl:text-[26px] xl:leading-[36.4px] md:text-2xl md:leading-8 text-xl leading-7 font-Inter font-medium'>
        {pressName}
      </h3>
    </div>
  </div>
  )
}

export default PressCard