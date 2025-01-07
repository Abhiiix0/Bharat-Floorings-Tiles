import BackgoundImageLayout from "@/app/components/BackgoundImageLayout"
import OurCompany from "@/app/components/OurCompany"
import { AWARDS, EVENTS_SUB_IMAGES, EVENTS_SUB_SECTION, MANAGEMENT, OUR_JOURNEY, PRESS_RELEASES } from "@/utils"

const page = () => {
  return (
    <>
    <BackgoundImageLayout  />
    <OurCompany journey={OUR_JOURNEY} management={MANAGEMENT} awards={AWARDS} press={PRESS_RELEASES} events={EVENTS_SUB_SECTION} />
    </>
  )
}

export default page