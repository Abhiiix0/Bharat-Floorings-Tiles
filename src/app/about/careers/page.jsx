import Careers from "@/app/components/Careers"
import { ALL_JOBS } from "@/utils"
import careerPageIMage from '../../../../public/images/career_page.jpg'
import Header from "@/app/components/Header"

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${careerPageIMage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative'
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Careers</h1>
        </div>
      </div>
      <Careers jobs={ALL_JOBS} />
    </div>
  )
}

export default page