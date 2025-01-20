'use client'
import React, { useEffect, useRef, useState } from 'react'
import { EVENTS_SUB_IMAGES } from '@/utils'

const ImageClickModal = ({ close, setClose }) => {
  const firtIMage = EVENTS_SUB_IMAGES[0].image
  const imageRef = useRef()
  const [seletedImage, setSelectedImage] = useState(firtIMage)
  const [selectedIndex, setSelectedIndex] = useState()
  const allImages = EVENTS_SUB_IMAGES.length
  const closeModal = (e) => {
    if (seletedImage && imageRef.current && !imageRef.current.contains(e.target)) {
      setClose(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', closeModal)
  })
  useEffect(() => {
    setSelectedIndex(1)
  }, [])
  return (
    <div className='max-w[1920px] mx-auto h-auto z-10 w-full fixed top-[0%] left-[0%] bg-[#ffffff7a] flex justify-center items-center'>
      {
        close ? <div ref={imageRef} className='w-[90%] mx-auto 2xl:py-10 lg:py-8 md:py-6 py-4 2xl:px-20 lg:px-14 md:px-9 px-7 bg-[#eaeaea] flex md:flex-row flex-col max-w-[1920px]'>
          <div className='scroll 2xl:h-[875px] h-screen overflow-scroll md:overflow-hidden  flex w-full'>
            <div className='w-4/5 h-full md:flex hidden'>
              <img className='h-full w-full' src={seletedImage.src} />
            </div>
            <div className='w-1/5 hidden md:flex flex-col h-full'>
              {
                EVENTS_SUB_IMAGES.map(({ id, image }) => (<img onClick={(e) => {
                  setSelectedImage(image)
                  setSelectedIndex(id)
                }} className={`h-full w-[calc(100%/${allImages})] ${selectedIndex === id ? "grayscale-0" : "grayscale"}`} key={id} src={image.src} />
                ))
              }
            </div>
            <div className='md:hidden block '>
              {
                EVENTS_SUB_IMAGES.map(({ id, image }) => (
                  <img alt={`Bharat Flooring Event ${id}`} className='h-auto' key={id} src={image.src} />
                ))
              }
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}

export default ImageClickModal