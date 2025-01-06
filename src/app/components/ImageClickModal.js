'use client'
import React, { useEffect, useRef, useState } from 'react'
import { EVENTS_SUB_IMAGES } from '@/utils'

const ImageClickModal = ({close, setClose}) => {
  const firtIMage = EVENTS_SUB_IMAGES[0].image
  const imageRef = useRef()
  const [seletedImage, setSelectedImage] = useState(firtIMage)
  const closeModal = (e)=>{
    if(seletedImage && imageRef.current && !imageRef.current.contains(e.target)){
      setClose(false)
    } 
  }
  useEffect(()=>{
    document.addEventListener('mousedown', closeModal)
    console.log('first')
  })
  return (
    <div className='md:h-screen h-auto z-10 w-full fixed bg-[#ffffff7a]'>
      {
        close ? <div ref={imageRef} className='md:h-screen w-[90%] mx-auto 2xl:py-10 lg:py-8 md:py-6 py-4 2xl:px-20 lg:px-14 md:px-9 px-7 bg-[#eaeaea] flex md:flex-row flex-col'>
        <div className='w-4/5 h-full md:block hidden'>
        <img className='h-full w-full'  src={seletedImage.src} />
        </div>
        <div className='w-1/5 hidden md:flex flex-col h-full'>
        {
          EVENTS_SUB_IMAGES.map(({id, image})=>(
            <img onClick={()=>setSelectedImage(image)} className='grayscale h-full' key={id} src={image.src} />
          ))
        }
        </div>
        <div className='md:hidden block'>
          {
            EVENTS_SUB_IMAGES.map(({id, image})=>(
              <img className='h-auto' key={id} src={image.src} />
            ))
          }
        </div>
        </div> : null
      }
    </div>
  )
}

export default ImageClickModal