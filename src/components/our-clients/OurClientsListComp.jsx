const OurClientsListComp = ({clientName, domain, tradeMark, clientWork, domainName}) => {
  return (
    <div className='font-Inter'>
        <div className="xl:text-lg md:text-base text-sm font-Inter font-bold">
        {clientName}<sup className='text-xs font-bold'>{tradeMark}</sup> &nbsp;{clientWork} ({domain})
        </div>
      <ul>
       {
        domainName.map(({id, name})=>(
          <li className="xl:text-base text-sm" key={id}> {name} </li>
        ))
       }
      </ul>
    </div>
  )
}

export default OurClientsListComp