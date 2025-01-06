import OurServices from "@/app/components/OurServices"
import { OUR_SERVICES_PAGE } from "@/utils"

const page = () =>{
  return(
    <OurServices services={OUR_SERVICES_PAGE} />
  )
}

export default page