'use client'
import { AiOutlineAlignLeft } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import DropDowns from './DropDowns'
const allCleints = [
  {id: 1, subs: 'ALL CLIENTS'}
]
const ClientFilter = ({changeView, setChangeView}) => {
  return (
    <div className='flex items-center justify-between'>
     <din className='flex lg:items-center lg:gap-0 gap-4 lg:flex-row flex-col w-full lg:justify-between lg:w-1/5'>
       <div className='effect gap-2 flex relative ' >
      <div className={`absolute effect h-9 w-9 z-0 ${changeView ? 'bg-[#949291]' : 'bg-[#2A2523]'} ${changeView? 'ml-11' : null}`}></div>
       <CgMenuGridR size={50} color={`${changeView ? '#000' : '#fff'}`} onClick={()=>setChangeView(false)} className='p-[5px] z-10  cursor-pointer -ml-[7.5px] -mt-[7.5px]' />
       <AiOutlineAlignLeft size={45} color={`${changeView ? '#fff' : '#000'}`} onClick={()=>setChangeView(true)}
       className='p-[5px] z-10 cursor-pointer  -ml-3 -mt-1'
       />
      </div>
      <div className='w-2/4'>
        <DropDowns section={'Client type'} subsection={allCleints} />
      </div>
     </din>
     <div className="lg:text-base text-xs">
      Showing 299 clients
     </div>
    </div>
  )
}

export default ClientFilter