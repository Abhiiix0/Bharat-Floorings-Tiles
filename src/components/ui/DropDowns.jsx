'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const DropDowns = ({section,subsection,selected,setSelected}) => {
  const [click, setClick] = useState(false)
  return (
    <div className='font-bold relative'>
     <div onClick={()=>setClick(!click)} className="flex items-center cursor-pointer ml-2 text-base font-Inter">
     {section} {click ? <IoIosArrowDown className="ml-1"  /> : <IoIosArrowUp className="ml-1" />}
     </div>
     <div className={`z-0 ml-2 w-max absolute text-lg font-Inter ${selected === 'Choose an option' ? 'text-slate-300' : 'text-black'}`}>{selected}
     </div>
  
  {
    click &&   <div className="absolute z-10 bg-slate-100 py-2 pl-2 pr-12 rounded-lg delay-500 transition-all">
  {
      subsection.map(({id, subs})=>(
        <div onClick={()=>{
          setSelected(subs)
          setClick(!click)
          console.log(selected)
        }} className="z-50 w-max cursor-pointer text-lg font-Inter font-medium text-gray-500 hover:text-black mb-2" key={id}>
         {subs}
        </div>
      )) 
  }
    </div>
  }
    </div>
  )
}

export default DropDowns