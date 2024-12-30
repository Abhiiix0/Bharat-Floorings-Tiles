import React from 'react'
const GalleryPageCards = ({designerImg, galleryImg}) => {
  return (
    <div className='min-h-64 min-w-64 relative'>
      <img src={galleryImg.src} className='h-full w-full' />
<div className='absolute top-[85%] lg:top-[90%] left-[10%] flex w-full gap-4'>
{
  designerImg.map(({id, image})=>(
    <img className='cursor-pointer 2xl:h-10 2xl:w-10 xl:h-8 xl:w-8 hover:scale-150 transition-transform h-6 w-6' key={id} src={image.src} />
  ))
}
</div>      
    </div>
  )
}

export default GalleryPageCards