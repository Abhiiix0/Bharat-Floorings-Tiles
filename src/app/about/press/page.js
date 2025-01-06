import PressRealeses from "@/app/components/PressRealeses"
import { PRESS_RELEASES } from "@/utils"

const page = () => {
  return (
    <PressRealeses press={PRESS_RELEASES} />
  )
}

export default page