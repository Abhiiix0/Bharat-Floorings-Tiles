import Header from "@/app/components/Header"
import OurServices from "@/app/components/OurServices"
import { OUR_SERVICES_PAGE } from "@/utils"

const page = () =>{
  return(
    <>
    <Header iconsColor="black" lines={true} />
    <OurServices services={OUR_SERVICES_PAGE} />
    </>
  )
}

export default page