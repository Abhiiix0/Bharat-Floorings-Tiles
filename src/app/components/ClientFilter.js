'use client'
import grid from '../../../public/svgs/filter_grid.svg'
import filterLines from '../../../public/svgs/filter_lines.svg'
import DropDowns from './DropDowns'
const allCleints = [
  {id: 1, subs: 'ALL CLIENTS'}
]
const ClientFilter = ({changeView, setChangeView}) => {
  return (
    <div className='flex items-center justify-between'>
     <din className='flex lg:items-center lg:gap-0 gap-4 lg:flex-row flex-col w-full lg:justify-between lg:w-1/5'>
       <div className='effect gap-2 flex cursor-pointer' >
       <img onClick={()=>setChangeView(false)} src={grid.src} className='p-1' />
       <img onClick={()=>setChangeView(true)} src={filterLines.src}
       className='p-1 bg-slate-400'
       />
      </div>
      <div className='w-2/4'>
        <DropDowns section={'Client type'} subsection={allCleints} />
      </div>
     </din>
     <div>
      Showing 299 clients
     </div>
    </div>
  )
}

export default ClientFilter