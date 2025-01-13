import Resource from "@/app/components/Resource"
import resourcesPageIMage from '../../../../public/images/resources/resource_image.jpg'
import { RESOURCES } from "@/utils"
import Header from "@/app/components/Header"

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${resourcesPageIMage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative'
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Resources</h1>
        </div>
      </div>
      <Resource resource={RESOURCES} />
    </>
  )
}

export default page