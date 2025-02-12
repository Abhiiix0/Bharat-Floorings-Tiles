'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const DropDowns = ({section,subsection, color}) => {
  const [click, setClick] = useState(false)
  const [selected, setSelected] = useState('Choose an option')
  return (
    <div className='font-bold relative'>
     <div onClick={()=>setClick(!click)} className={`flex items-center cursor-pointer ml-2 text-base font-Inter text-[${color}]`}>
     {section} {click ? <IoIosArrowDown className={`ml-1 text-text-[${color}]`}  /> : <IoIosArrowUp className={`ml-1 text-text-[${color}]`} />}
     </div>
     <div className={`z-0 ml-2 w-max absolute text-lg font-Inter ${selected === 'Choose an option' ? 'text-slate-300' : 'text-black'}`}>{selected}
     </div>
  
    <div className="absolute z-10 bg-white pl-2 pr-10 rounded-lg pb-2">
    {
      click ? subsection.map(({id, subs})=>(
        <div onClick={()=>{setSelected(subs)
          setClick(!click)
        }} className="z-50 w-max cursor-pointer text-lg font-Inter" key={id}>
         {subs}
        </div>
      )) : null
     }
    </div>
    </div>
  )
}

export default DropDowns