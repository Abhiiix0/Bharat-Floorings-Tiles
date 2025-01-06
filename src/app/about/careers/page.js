import Careers from "@/app/components/Careers"
import { ALL_JOBS } from "@/utils"

const page = () =>{
  return(
    <Careers jobs={ALL_JOBS} />
  )
}

export default page