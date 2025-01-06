'use client'
import { DESIGNER_IMAGES } from "@/utils";
import Link from "next/link";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import tajLogo from '../../../public/svgs/tajLogo.svg'
import Intro from "./Intro";
import product from '../../../public/images/galleryImg-1.jpg'
import LinesComp from "./LinesComp";

const ProjectsDetail = () => {
  return (
    <section className='relative overflow-hidden'> 
      <LinesComp height={'130vh'} />
    <div className='xl:px-[100px] md:px-16 sm:px-10 px-8 relative'>
    <h1 className='big-heading'>Project</h1>
      <div className='flex items-center justify-between 2xl:mb-10'>
      <div onClick={()=>history.back()} className='w-32 xl:w-36 2xl:w-40 flex justify-end gap-1 items-center 2xl:text-base xl:text-sm text-xs cursor-pointer link'>
     <RiArrowLeftLine className="arrow-left" />Back to projects
     </div>
     <Link href='about/press' className='w-40  xl:w-[180px] 2xl:w-52  flex  gap-1 items-center 2xl:text-base xl:text-sm text-xs link'>up next: HOTEL NAHAR
     <RiArrowRightLine className="arrow" />
     </Link>
      </div>
      <p className='xl:text-[38.35px] xl:leading-[84.84px] lg:text-3xl lg:leading-[75px] md:text-2xl md:leading-[68px] text-xl leading-[60px] font-medium'>
        Fabien Charuai
      </p>
      <p className='xl:text-[38.35px] xl:leading-[84.84px] lg:text-3xl lg:leading-[75px] md:text-2xl md:leading-[68px] text-xl leading-[60px] font-medium'>
      Les Bouchons
      </p>
      <p className='xl:text-base md:text-sm text-xs leading-[18px] md:leading-[22px] xl:leading-[25.6px] md:w-96 w-full'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className='flex items-center justify-between my-14'>
      <div className="w-[40%] flex gap-4 flex-wrap">
       <div className='xl:h-[60.14px] lg:h-12 h-10 flex gap-2'>
       <img className='h-full' src={DESIGNER_IMAGES[0].image.src} />
       <div className='flex items-center'>
         <span className='xl:text-base md:text-sm text-xs'>
          Anulom Type A
         </span>
       </div>
       </div>
      </div>
      <div className="w-[40%] flex flex-wrap justify-end xl:h-[60.14px] lg:h-12 h-10">
      <img src={tajLogo.src} className='h-full' />
     </div>
    </div>
    <Intro intro1={'July 1998'} intro2={'3 products'} intro3={'client TAJ HOTELS'} />
    </div>
    <div 
    style={{
      backgroundImage: `url(${product.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'    
    }}
    className='xl:mt-10 lg:mt-8 mt-7 2xl:h-[1265px] xl:h-[950px] lg:h-[700px] h-screen w-full relative'>
      <img className='absolute top-[20%] left-1/4 2xl:h-[104px] xl:h-24 lg:h-20 md:h-16 h-14 2xl:w-[104px] xl:w-24 lg:w-20 md:w-16 w-14' src={DESIGNER_IMAGES[1].image.src}/>
      <img className='absolute top-[80%]  2xl:h-[104px] xl:h-24 lg:h-20 md:h-16 h-14 2xl:w-[104px] xl:w-24 lg:w-20 md:w-16 w-14 left-[18%]' src={DESIGNER_IMAGES[0].image.src}/>
      <img className='absolute top-2/4 2xl:h-[104px] xl:h-24 lg:h-20 md:h-16 h-14 2xl:w-[104px] xl:w-24 lg:w-20 md:w-16 w-14 left-[70%]' src={DESIGNER_IMAGES[2].image.src}/>
    </div>
    </section>
  )
}

export default ProjectsDetail