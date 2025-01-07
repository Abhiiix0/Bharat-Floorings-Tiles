import React from 'react'

const BackgoundImageLayout = ({image, heading}) => {
  return (
    <section 
       style={{backgroundImage : `url(${image.src})`,
               backgroundPosition: 'center'
      }}
       className='h-screen relative'
       >
        <h1 className="big-heading text-white absolute xl:top-[60%] md:top-3/4 top-[80%] left-[5%]">{heading}</h1>
       </section>
  )
}

export default BackgoundImageLayout