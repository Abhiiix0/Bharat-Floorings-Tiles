import { PRESS_RELEASES } from "@/utils"
import pressPageImage from '../../../../public/images/press/press_releases.jpg'
import Header from "@/components/Header"
import PressRealeses from "@/components/PressRealeses"

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${pressPageImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative'
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Press Releases</h1>
        </div>
      </div>
      <PressRealeses press={PRESS_RELEASES} />
    </>
  )
}

export default page