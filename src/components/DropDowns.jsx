'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const DropDowns = ({section,subsection, color}) => {
  const [click, setClick] = useState(false)
  const [selected, setSelected] = useState('')
  return (
    <div className='font-bold relative'>
     <div onClick={()=>setClick(!click)} className={`flex items-center cursor-pointer text-base font-Inter text-[${color}]`}>
     {section} {click ? <IoIosArrowDown className={`ml-1 text-text-[${color}]`}  /> : <IoIosArrowUp className={`ml-1 text-text-[${color}]`} />}
     </div>
     <div className='absolute cursor-pointer text-lg font-Inter'>{selected}
     </div>
  
     {
      click ? subsection.map(({id, subs})=>(
        <div onClick={()=>{setSelected(subs)
          setClick(!click)
        }} className="absolute cursor-pointer text-lg font-Inter" key={id}>
          {subs}
        </div>
      )) : null
     }
    </div>
  )
}

export default DropDowns