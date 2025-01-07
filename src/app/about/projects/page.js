import Header from "@/app/components/Header"
import ProjectsPage from "@/app/components/ProjectsPage"
import { PROJECT_PAGE_IMAGES } from "@/utils"

const page = () =>{
  return(
  <div>
    <Header iconsColor="black" lines={true} />
    <ProjectsPage projects={PROJECT_PAGE_IMAGES} />
  </div>
  )
}

export default page