import BackgoundImageLayout from "@/app/components/BackgoundImageLayout"
import Resource from "@/app/components/Resource"
import resourcesPageIMage from '../../../../public/images/resource_image.jpg'
import { RESOURCES } from "@/utils"

const page = () => {
  return (
  <>
  <BackgoundImageLayout image={resourcesPageIMage} heading={'Resources'} />
  <Resource resource={RESOURCES} />  
  </>
  )
}

export default page