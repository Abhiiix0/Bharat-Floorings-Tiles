import ResourcesPageCard from './ResourcesPageCard'
import LinesComp from './LinesComp'

const Resource = ({ resource }) => {
  return (
    <section className='relative overflow-hidden'>
      <LinesComp height={'500vh'} />
      <div className='lg:px-[100px] px-[20px] xl:my-14 md:my-10 sm:my-7 my-5 relative h-[120vh] overflow-y-scroll scroll'>
        <div className='flex items-center justify-end xl:mb-16 md:mb-12 sm:mb-9 mb-7 font-Inter xl:text-base md:text-sm text-xs'>
          Showing 55 of 55 releases
        </div>
        <div className='flex  gap-4 xl:mb-40  md:flex-row flex-col lg:mb-32 md:mb-24 mb-16 sticky top-10'>
          <div className='xl:w-[25%] md:w-[30%] w-full xl:text-base text-sm'>
            <div className='sticky top-[0%] '>
              <u>
                <h3 className='mb-4 title-el sticky font-semibold'>
                  ALL RESOURCES <sup className='text-xs'>64</sup>
                </h3>
              </u>
              <h3 className='title-el mb-1 font-semibold'>
                BLACK BOOK DOWNLOAD <sup className='text-xs mb-1 font-semibold'>64</sup>
              </h3>
              <h3 className='title-el mb-1 font-semibold'>
                CATALOGUE DOWNLOADS <sup className='text-xs mb-1'>64</sup>
              </h3>
              <h3 className='title-el mb-1 font-semibold'>
                FIXING & POLISHING <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='title-el mb-1 font-semibold'>
                MADE IN INDIA <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='title-el mb-1 font-semibold'>
                TECHNICAL SPECIFICATION <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='title-el mb-1 font-semibold'>
                HERITAGE & UNITINTA TILES <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='title-el mb-1 font-semibold'>
                TILE CLEANING  AND MAINTAINANCE <sup className='text-xs'>64</sup>
              </h3>
            </div>
          </div>
          <div className='xl:w-[75%] md:w-[70%] w-full grid xl:grid-cols-3 md:grid-cols-2 gap-[26px] md:justify-normal justify-center'>
            {
              resource.map((res) => (
                <ResourcesPageCard key={res.id} image={res.image} resourceName={res.resourceName} docType={res.docType} size={res.size} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resource