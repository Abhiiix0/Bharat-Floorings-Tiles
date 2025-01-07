import Resource from "@/app/components/Resource"
import resourcesPageIMage from '../../../../public/images/resource_image.jpg'
import { RESOURCES } from "@/utils"
import Header from "@/app/components/Header"

const page = () => {
  return (
  <>
  <div
         style={{backgroundImage : `url(${resourcesPageIMage.src})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover'
        }}
         className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
         >
          <Header textColor="text-white" />
          <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Resources</h1>
          </div>
  <Resource resource={RESOURCES} />  
  </>
  )
}

export default page