'use client'
import React, { useEffect, useRef, useState } from 'react'
import awardsModal1 from '../../../public/images/awards-modal-1.jpg'
import awardsModal2 from '../../../public/images/awards-modal-2.jpg'
import closeLogo from '../../../public/svgs/closeLogo.svg'

const AwardsModal = ({close , setClose}) => {
const awardsImages = [
    {id: 1, image: awardsModal1},
    {id:2, image: awardsModal2}
]
const imageRef = useRef();
  const [seletedImage, setSelectedImage] = useState(awardsModal1);
  const [selectedIndex, setSelectedIndex] = useState();
  const closeModal = (e) => {
    if (
      seletedImage &&
      imageRef.current &&
      !imageRef.current.contains(e.target)
    ) {
      setClose(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
  })
  useEffect(() => {
    setSelectedIndex(1);
  }, [])
  return (
    <div className='max-w-[1920px] z-[999] h-screen w-screen fixed top-0 left-0 bg-[#ffffff7a] flex justify-center items-center'>
    {
        close &&  
        <div ref={imageRef} className='relative 3xl:max-w-[1430px] 3xl:h-[1132px] md:h-[90vh] md:w-[90%] h-full w-full 3xl:py-32 3xl:px-[54px] py-[5vh] px-[3%] mx-auto bg-[#eaeaea] overflow-y-scroll scroll'>  
        <div className='h-full w-full flex'>
         <div className='md:block hidden h-full w-4/5'>
         <img src={seletedImage.src} alt="awards Image" className='h-full w-full' />
         </div>
         <div className='h-full md:w-1/5 md:flex hidden flex-col'>
         {
            awardsImages.map(({id, image})=>(
                <img
                  onClick={(e) => {
                    setSelectedImage(image);
                    setSelectedIndex(id);
                  }}
                  className={`h-[calc(100%/2)] object-cover w-full ${
                    selectedIndex === id ? "grayscale-0" : "grayscale"
                  }`}
                  key={id}
                  src={image.src}
                />
            ))
         }
         </div>
         <div className="md:hidden block ">
              {awardsImages.map(({ id, image }) => (
                <img
                  alt={`Bharat Flooring Event ${id}`}
                  className="h-auto w-full"
                  key={id}
                  src={image.src}
                />
              ))}
            </div>
        </div>
      </div>
    }
        {/* <img onClick={(e)=>{
            e.preventDefault()
            setClose(false);
            console.log(close)
         }} src={closeLogo.src} alt="close logo" className='absolute z-100 3xl:top-0 3xl:right-[12.7%] md:top-[5vh] md:right-[5%] top-0 right-0 h-[5vh] cursor-pointer' />  */}
    </div>
  )
}
export default AwardsModal