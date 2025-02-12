import PressReleasesCard from './PressReleasesCard'
import LinesComp from '../LinesComp'

const PressReleases = ({ press }) => {
  return (
    <section className='relative overflow-hidden'>
      <LinesComp />
      <div className='max-w-[1920px] mx-auto lg:px-[100px] px-[20px] xl:pt-[59px] 3xl:pb-[311px] xl:pb-56 md:pt-16 md:pb-40 sm:pb-32 pt-[83px] pb-24 relative'>
        <div className='md:flex hidden items-center justify-end font-Inter'>
          Showing 55 of 55 releases
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-6 3xl:mt-[100px] xl:mt-24 md:mt-20 mt-0'>
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

export default PressReleases