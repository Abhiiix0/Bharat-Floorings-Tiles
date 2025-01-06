import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const OurServicesCard = ({image, designType, designInfo}) => {
  return (
    <div className='font-Inter w-full'>
<img src={image.src}
className='md:h-72 lg:h-96 xl:h-[435px] 2xl:h-[547px] 2xl:mb-10 w-full '
/>
<span className='text-xs lg:text-sm 2xl:text-base'>
  Who we are
</span>
<h3 className='my-5 text-xl xl:text-2xl 2xl:text-3xl 2xl:my-8 xl:my-7 lg:my-6'>
{designType}
</h3>
<div>
  {
designInfo.map(({id, info})=>(
  <p key={id} className='text-sm md:text-sm xl:text-base 2xl:text-lg pr-6'>
{info}
</p>
))
  }
</div>
<Link href='#' className='border-black border-[1px] md:h-8 md:w-52 lg:h-9 lg:w-52 xl:h-11 xl:w-60 2xl:h-14 2xl:w-72 2xl:mt-16 xl:mt-12 lg:mt-8 md:mt-6 flex  gap-1 items-center 2xl:text-base xl:text-sm text-xs xl:pl-3 pl-3 2xl:pl-7 link'>
Start your floor journey now! <RiArrowRightLine className="arrow" />
</Link>
</div>
  )
}

export default OurServicesCard