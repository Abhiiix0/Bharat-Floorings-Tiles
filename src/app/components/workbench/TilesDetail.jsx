import { DESIGNER_NAME } from '@/utils'
import React, { useState } from 'react'

const TilesDetail = ({ name, number }) => {
  const [click, setClick] = useState(false)
  const [subDesigns, setSubDesigns] = useState(false)
  const [showDesigns, setShowDesigns] = useState(false)
  const designeShowHandle = (des) => {
    if (des) {
      setShowDesigns(!showDesigns)
    }
  }
  return (
    <div className='w-fit' onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)} >
      <h2 className='para-medium font-semibold font-Inter cursor-pointer mb-[18px]'>
        DESIGNER TILES <sup className='text-sm'>7</sup>
      </h2>
      {
        click && <div
          onMouseEnter={() => setSubDesigns(true)}
          onMouseLeave={() => {
            setSubDesigns(false)
            setShowDesigns(false)
          }}
        >
          {
            DESIGNER_NAME.map((res) => (
              <div key={res.id}>
                <h3 className='text-base leading-[33.6px] font-semibold font-Inter cursor-pointer mb-4'>
                  {res.name}<sup className='text-[10px]font-semibold'>{res.number}</sup>
                </h3>
                {
                  subDesigns && <div className='effect flex flex-col items-start'>
                    {
                      res.subs && res.subs.map((res) => (
                        <div key={res.id}>
                          <h4 onClick={() => designeShowHandle(res.design)} className='text-[13px] leading-[15px] font-Inter font-semibold mb-4 cursor-pointer'>
                            {res.name} <sup className='text-[8px]font-semibold '>{res.number}</sup>
                          </h4>
                          {
                            res.design ? <div>
                              {
                                showDesigns && <div className='flex gap-[11px] mb-[45px] overflow-scroll scroll'>
                                  {
                                    res.design.map(({ id, image }) => (
                                      <img alt={`designer image ${id}`} key={id} src={image.src} />
                                    ))
                                  }
                                </div>
                              }
                            </div> : null
                          }
                        </div>
                      ))
                    }
                  </div>
                }
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default TilesDetail