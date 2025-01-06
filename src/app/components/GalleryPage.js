import { DESIGNER_IMAGES, GALLERY_PAGE_IMAGES } from '@/utils'
import React from 'react'
import GalleryPageCards from './GalleryPageCards'

const GalleryPage = () => {
  return (
    <section className='grid-col md:min-h-[3200px] grid md:grid-cols-3 md:grid-rows-5 max-w-[1920px] mx-auto'>
      {
        GALLERY_PAGE_IMAGES.map(({id, galleryImg})=>(
          <GalleryPageCards key={id} galleryImg={galleryImg} designerImg={DESIGNER_IMAGES} />
        ))
      }
    </section>
  )
}

export default GalleryPage