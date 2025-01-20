
const AwardsCard = ({ image, date, awardedFor, awardName }) => {
  return (
    <div className='small-heading xl:p-10 lg:p-8 p-6 bg-white 2xl:h-[397px] 3xl:min-w-[555px] xl:min-w-[420px] md:h-[350px] lg:w-[450px] min-w-96 '>
      <img alt={`${awardedFor} image`} src={image.src} className='h-24 rounded-full' />
      <div className='flex items-center justify-between xl:text-base xl:leading-[25.6px] text-sm leading-[23px] xl:my-7 lg:my-6 my-5'>
        <span>{date}</span>
        <span>{awardedFor}</span>
      </div>
      <p className='para-big xl:my-6 lg:my-5 my-4'>
        {awardName}
      </p>
    </div>
  )
}

export default AwardsCard