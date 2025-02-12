
const PressReleasesCard = ({ pressImg, pressDate, pressName }) => {
  return (
    <div className='font-Inter'>
      <img src={pressImg.src}
        alt={`${pressName} image`}
        className='2xl:h-[500px] xl:h-[400px] lg:h-80 md:h-64 w-full'
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

export default PressReleasesCard