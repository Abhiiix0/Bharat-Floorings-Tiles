import Header from "@/app/components/Header"
import OurServices from "@/app/components/OurServices"

const page = () => {
  return (
    <div>
      <Header iconsColor="black" lines={true} />
      <OurServices />
    </div>
  )
}

export default page