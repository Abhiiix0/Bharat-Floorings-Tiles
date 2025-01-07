import Careers from "@/app/components/Careers"
import { ALL_JOBS } from "@/utils"
import careerPageIMage from '../../../../public/images/career_page_image.jpg'

const page = () =>{
  return(
   <>
    <Careers jobs={ALL_JOBS} />
   </>
  )
}

export default page