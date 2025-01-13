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
        className='3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative'
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Our Clients</h1>
        </div>
      </div>
      <OurClients resource={RESOURCES_IMAGES} hotels={HERITAGE_HOTELS} resturants={HERITAGE_RESTUARANTS} />
    </>
  )
}

export default page