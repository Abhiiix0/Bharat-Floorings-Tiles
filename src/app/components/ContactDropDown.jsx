'use client'
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


const ContactDropDown = ({ location, city, address, pincode, dealerName, contact, mailId }) => {
  const [selected, setSelcted] = useState(false)
  return (
    <div className='2xl:w-[476px] xl:w-96 border-b-2 border-black px-1 effect'>
      <div className='xl:min-h-[70px] lg:h-14 h-10 flex items-center justify-between'>
        <h4 className='2xl:text-xl xl:text-lg lg:text-base text-sm font-Inter font-semibold'>{location}</h4>
        <span onClick={() => setSelcted(!selected)} className='2xl:text-3xl font-Inter cursor-pointer'>
          {selected ? '-' : '+'}
        </span>
      </div>
      {
        selected ? <div className='2xl:font-base lg:text-sm text-xs'>
          <p className='2xl:leading-[25.6px] lg:leading-[22px] leading-[18px]'>
            Bharat Floorings & Tiles ({city}) Pvt Ltd <br />
            {address} <br />
            {city} - {pincode}
          </p>
          <div className='2xl:my-10 xl:my-8 lg:my-6 my-5'>
            <div className='flex items-center gap-1'>
              <CiUser /> {dealerName}
            </div>
            <div className='flex items-center gap-1'>
              <IoCallOutline /> {contact}
            </div>
            <div className='flex items-center gap-1'>
              <TfiEmail /> <u className='cursor-pointer'><a href={`mailto:${mailId}`}>{mailId}</a></u>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}

export default ContactDropDown