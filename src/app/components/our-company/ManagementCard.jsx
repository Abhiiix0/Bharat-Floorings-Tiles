import React from 'react'

const ManagementCard = ({ image, name, designation, info }) => {
  return (
    <div className='w-full'>
      <img alt={`${designation} image`} src={image.src}
        className='3xl:h-[809px] xl:h-[600px] lg:h-[500px] md:h-[400px] h-auto w-full'
      />
      <h4 className="font-Inter xl:text-3xl xl:my-6 lg:my-5 my-4 lg:font-2xl md:text-xl font-medium">
        {name}
      </h4>
      <span className="xl:text-base xl:leading-[25.6px] text-sm leading-[23px]">
        {designation}
      </span>
      <p className="xl:text-base xl:leading-[25.6px] text-sm leading-[23px] xl:my-6 lg:my-5 my-4 font-Inter">
        {info}
      </p>
    </div>
  )
}

export default ManagementCard