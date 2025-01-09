
const PressReleasesCard = ({ pressImg, pressDate, pressName }) => {
  return (
    <div className='font-Inter'>
      <img src={pressImg.src}
        alt={`${pressName} image`}
        className='2xl:h-[500px] xl:h-[400px] lg:h-80 md:h-64 w-full'
      />
      <div className='2xl:my-8 lg:my-6 my-4'>
        <span className='title-el'>
          {pressDate}
        </span>
        <h3 className='2xl:text-[26px] lg:text-2xl md:text-xl text-base font-Inter font-medium  mt-1'>
          {pressName}
        </h3>
      </div>
    </div>
  )
}

export default PressReleasesCard