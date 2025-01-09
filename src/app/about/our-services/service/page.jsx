import Header from "@/app/components/Header"
import OurServicesSubSection from "@/app/components/our-services/OurServicesSubSection"


const page = () => {
  return (
    <div>
      <Header iconsColor="black" lines={true} />
      <OurServicesSubSection />
    </div>
  )
}

export default page