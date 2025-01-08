import React from 'react'

const ManagementCard = ({image, name, designation, info}) => {
  return (
    <div>
    <img src={image.src} 
    className='2xl:h-[809px] xl:h-[600px] lg:h-[500px] md:h-[400px] h-auto'
    />
    <h4 className="font-Inter xl:text-3xl xl:my-6 lg:my-5 my-4 lg:font-2xl md:text-xl font-medium">
      {name}
    </h4>
    <span className="xl:text-base xl:leading-[25.6px] text-sm leading-[23px]">
   {designation}
    </span>
    <p className="xl:text-base xl:leading-[25.6px] text-sm leading-[23px] xl:my-6 lg:my-5 my-4">
 {info}
    </p>
  </div>
  )
}

export default ManagementCard