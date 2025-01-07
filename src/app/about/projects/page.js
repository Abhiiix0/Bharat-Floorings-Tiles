import ProjectsPage from "@/app/components/ProjectsPage"
import { PROJECT_PAGE_IMAGES } from "@/utils"

const page = () =>{
  return(
  <ProjectsPage projects={PROJECT_PAGE_IMAGES} />
  )
}

export default page