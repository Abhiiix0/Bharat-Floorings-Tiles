import Careers from "@/app/components/Careers"
import { ALL_JOBS } from "@/utils"
import careerPageIMage from '../../../../public/images/career_page.jpg'
import BackgoundImageLayout from "@/app/components/BackgoundImageLayout"

const page = () =>{
  return(
   <>
    <BackgoundImageLayout image={careerPageIMage} heading={'Careers'} />
    <Careers jobs={ALL_JOBS} />
   </>
  )
}

export default page