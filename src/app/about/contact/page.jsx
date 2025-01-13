import Contact from "@/app/components/Contact"
import Header from "@/app/components/Header"
import contactPageImage from '../../../../public/images/contact_page.jpg'

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${contactPageImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative'
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Contact</h1>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default page