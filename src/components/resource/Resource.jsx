import ResourcesPageCard from './ResourcesPageCard'
import LinesComp from '../LinesComp'

const Resource = ({ resource }) => {
  return (
    <section className='relative'>
      <div className='overflow-hidden'>
        <LinesComp />
      </div>
      <div className='lg:px-[100px] px-[20px] 2xl:pt-[59px] md:pt-14 pt-[68px] pb-[235px]'>
        <div className='md:flex hidden items-center justify-end font-Inter xl:text-base md:text-sm text-xs'>
          Showing 55 of 55 releases
        </div>
        <div className='flex gap-4 2xl:mt-24 md:flex-row flex-col lg:mt-20 md:mt-16 mt-0 items-start shrink-0 relative'>
          <div className='xl:w-[25%] md:w-[30%] md:sticky relative top-0 w-full md:mb-0 sm:mb-20 mb-16'>
            <div>
              <u>
                <h3 className='mb-6 lg:text-base text-[13px] font-semibold font-Inter'>
                  ALL RESOURCES <sup className='text-xs'>64</sup>
                </h3>
              </u>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                BLACK BOOK DOWNLOAD <sup className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>64</sup>
              </h3>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                CATALOGUE DOWNLOADS <sup className='text-xs mb-1'>64</sup>
              </h3>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                FIXING & POLISHING <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                MADE IN INDIA <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                TECHNICAL SPECIFICATION <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                HERITAGE & UNITINTA TILES <sup className='text-xs'>64</sup>
              </h3>
              <h3 className='mb-3 lg:text-base text-[13px] font-semibold font-Inter'>
                TILE CLEANING  AND MAINTAINANCE <sup className='text-xs'>64</sup>
              </h3>
            </div>
          </div>
          <div className='xl:w-[75%] md:w-[70%] w-full grid xl:grid-cols-3 md:grid-cols-2 gap-[26px] 3xl:gap-y-20 xl:gap-y-14 md:gap-y-10 gap-y-8 md:justify-normal justify-center'>
            {
              resource.map((res) => (
                <ResourcesPageCard key={res.id} image={res.image} resourceName={res.resourceName} docType={res.docType} size={res.size} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='overflow-hidden relative'>
        <LinesComp />
      </div>
    </section>
  )
}

export default Resource