import React from 'react'

const Tiles = ({ tilesDesigns }) => {
  return (
    <div>
      <div className='3xl:my-[27px] 2xl:my-6 xl:my-5 lg:my-4 my-3 3xl:px-[45px] 2xl:px-10  px-6 flex 3xl:gap-[21px] 2xl:gap-4 xl:gap-3 gap-2'>
        {
          tilesDesigns.map(({ id, image }) => (
            <img key={id} src={image.src} alt={`Tiles Design ${id}`} className='3xl:h-[107px] 3xl:w-[107px] h-24 w-24' />
          ))
        }
      </div>
      <div className='border-b border-[#00000033]'></div>
    </div>
  )
}

export default Tiles