import OurCompany from "@/app/components/OurCompany"
import { AWARDS, EVENTS_SUB_IMAGES, EVENTS_SUB_SECTION, MANAGEMENT, OUR_JOURNEY, PRESS_RELEASES } from "@/utils"
import ourCompanyImage from '../../../../public/images/our_company.jpg'
import Header from "@/app/components/Header"

const page = () => {
  return (
    <div>
    <div
           style={{backgroundImage : `url(${ourCompanyImage.src})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover'
          }}
           className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
           >
            <Header textColor="text-white" />
            <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Events</h1>
            </div>
    <OurCompany journey={OUR_JOURNEY} management={MANAGEMENT} awards={AWARDS} press={PRESS_RELEASES} events={EVENTS_SUB_SECTION} />
    </div>
  )
}

export default page