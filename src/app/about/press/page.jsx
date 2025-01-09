import PressRealeses from "@/app/components/PressRealeses"
import { PRESS_RELEASES } from "@/utils"
import pressPageImage from '../../../../public/images/press/press_releases.jpg'
import Header from "@/app/components/Header"

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${pressPageImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
      >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Press Releases</h1>
      </div>
      <PressRealeses press={PRESS_RELEASES} />
    </>
  )
}

export default page