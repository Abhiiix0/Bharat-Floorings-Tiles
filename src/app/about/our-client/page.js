import OurClients from '@/app/components/OurClients'
import { HERITAGE_HOTELS, HERITAGE_RESTUARANTS, RESOURCES_IMAGES } from '@/utils'
import React from 'react'

const page = () => {
  return (
    <OurClients resource={RESOURCES_IMAGES} hotels={HERITAGE_HOTELS} resturants={HERITAGE_RESTUARANTS} />
  )
}

export default page