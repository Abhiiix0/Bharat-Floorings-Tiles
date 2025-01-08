import Careers from "@/app/components/Careers"
import { ALL_JOBS } from "@/utils"
import careerPageIMage from '../../../../public/images/career_page.jpg'
import Header from "@/app/components/Header"

const page = () =>{
  return(
   <>
     <div
       style={{backgroundImage : `url(${careerPageIMage.src})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
      }}
       className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
       >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Careers</h1>
        </div>
    <Careers jobs={ALL_JOBS} />
   </>
  )
}

export default page