import PressReleasesCard from './PressReleasesCard'
import LinesComp from './LinesComp'

const PressRealeses = ({ press }) => {
  return (
    <section className='relative overflow-hidden'>
      <LinesComp />
      <div className='max-w-[1920px] mx-auto lg:px-[100px] px-[20px] relative'>
        <div className='flex items-center justify-end 2xl:my-14 xl:my-12 lg:my-10 my-7 font-Inter'>
          Showing 55 of 55 releases
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-x-6 gap-y-6 2xl:mb-80 xl:mb-60 lg:mb-48 md:mb-36 mb-20'>
          {
            press.map((res) => (
              <PressReleasesCard key={res.id} pressImg={res.pressImg} pressDate={res.pressDate} pressName={res.pressName} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PressRealeses