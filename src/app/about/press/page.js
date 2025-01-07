import BackgoundImageLayout from "@/app/components/BackgoundImageLayout"
import PressRealeses from "@/app/components/PressRealeses"
import { PRESS_RELEASES } from "@/utils"
import pressPageImage from '../../../../public/images/press_releases.jpg'

const page = () => {
  return (
    <>
    <BackgoundImageLayout image={pressPageImage} heading={'Press Releases'} />
    <PressRealeses press={PRESS_RELEASES} />
    </>
  )
}

export default page