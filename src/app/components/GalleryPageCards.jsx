import React from 'react'
const GalleryPageCards = ({ designerImg, galleryImg }) => {
  return (
    <div className='min-h-64 min-w-64 sm:h-[600px] lg:h-auto relative'>
      <img alt={`gallery image ${id}`} src={galleryImg.src} className='h-full w-full' />
      <div className='absolute top-[85%] lg:top-[90%] left-[10%] flex w-full gap-4'>
        {
          designerImg.map(({ id, image }) => (
            <img alt={`designer image ${id}`} className='cursor-pointer xl:h-10 xl:w-10 h-8 w-8 hover:scale-150 effect' key={id} src={image.src} />
          ))
        }
      </div>
    </div>
  )
}

export default GalleryPageCards