import BackgoundImageLayout from '@/app/components/BackgoundImageLayout'
import OurClients from '@/app/components/OurClients'
import { HERITAGE_HOTELS, HERITAGE_RESTUARANTS, RESOURCES_IMAGES } from '@/utils'
import React from 'react'
import clientsPageImage from '../../../../public/images/our_client.jpg'

const page = () => {
  return (
<>
<BackgoundImageLayout image={clientsPageImage} heading={'Our Clients'} />
<OurClients resource={RESOURCES_IMAGES} hotels={HERITAGE_HOTELS} resturants={HERITAGE_RESTUARANTS} />
</>
  )
}

export default page