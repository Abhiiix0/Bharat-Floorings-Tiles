'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const DropDowns = ({section,subsection}) => {
  const [click, setClick] = useState(false)
  const [selected, setSelected] = useState('')
  return (
    <div className='font-bold relative'>
     <div onClick={()=>setClick(!click)} className='flex items-center cursor-pointer xl:text-base md:text-sm text-xs font-Inter'>
     {section} {click ? <IoIosArrowDown className='ml-1 text-' /> : <IoIosArrowUp className='ml-1 text-black' />}
     </div>
     <div className='absolute cursor-pointer xl:text-lg md:text-base text-sm font-Inter'>{selected}
     </div>
  
     {
      click ? subsection.map(({id, subs})=>(
        <div onClick={()=>{setSelected(subs)
          setClick(!click)
        }} className="absolute cursor-pointer xl:text-lg md:text-base text-sm font-Inter" key={id}>
          {subs}
        </div>
      )) : null
     }
    </div>
  )
}

export default DropDowns