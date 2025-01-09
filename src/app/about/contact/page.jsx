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
        className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
      >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Contact</h1>
      </div>
      <Contact />
    </div>
  )
}

export default page