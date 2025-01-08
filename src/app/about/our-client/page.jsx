import OurClients from '@/app/components/our-clients/OurClients'
import { HERITAGE_HOTELS, HERITAGE_RESTUARANTS, RESOURCES_IMAGES } from '@/utils'
import React from 'react'
import clientsPageImage from '../../../../public/images/our-clients/our_client.jpg'
import Header from '@/app/components/Header'

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${clientsPageImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
      >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Our Clients</h1>
      </div>
      <OurClients resource={RESOURCES_IMAGES} hotels={HERITAGE_HOTELS} resturants={HERITAGE_RESTUARANTS} />
    </>
  )
}

export default page