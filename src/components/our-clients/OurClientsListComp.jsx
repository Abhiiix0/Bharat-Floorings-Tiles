'use client'
import { useState } from "react"

const OurClientsListComp = ({clientName, domain, tradeMark, clientWork, domainName}) => {
  const [selected, setSelcted] = useState(false)
  return (
  <div className='font-Inter w-full'>
      <div className="md:block hidden 3xl:mb-12 2xl:mb-10 xl:mb-8 lg:mb-6 md:mb-5">
        <div className="xl:text-lg md:text-base text-sm font-Inter font-bold">
        {clientName}<sup className='text-xs font-bold'>{tradeMark}</sup> &nbsp;{clientWork} {domain && `(${domain})`}
        </div>
      <ul>
       {
        domainName.map(({id, name})=>(
          <li className="xl:text-base text-sm" key={id}> {name} </li>
        ))
       }
      </ul>
    </div>
   <div className="md:hidden block min-w-full">
   <div className='border-b-2 border-black px-1 effect min-w-full'>
    <div onClick={() => setSelcted(!selected)} className='effect flex items-center justify-between sm:py-5 py-4 min-w-full'>
    <div className='text-base font-Inter font-semibold'>
    {clientName}<sup className='text-xs'>{tradeMark}</sup>&nbsp;{clientWork} ({domain})
     </div>
      <span className='2xl:text-3xl font-Inter'>
        {selected ? '-' : '+'}
      </span>
    </div>
    {
      selected ? <div className='text-base mb-6'>
       <ul>
       {
        domainName.map(({id, name})=>(
          <li className="text-base" key={id}> {name} </li>
        ))
       }
      </ul>
      </div> : null
    }
  </div>
   </div>
  </div>
  )
}

export default OurClientsListComp