import OurClientsGridComp from './OurClientsGridComp'

const OurClientsGridPage = ({resource}) => {
  return (
    <div className='grid 2xl:grid-cols-7 overflow-hidden lg:grid-cols-5 md:grid-cols-4 grid-cols-2'>
    {
      resource.map((res)=>(
        <OurClientsGridComp key={res.id} industryName={res.industryName} industry={res.industry} tradeMark={res.tradeMark} domain={res.domain} clientName={res.clientName} link={res.link} productImg={res.productImg} image={res.image} />
      ))
    }
    </div>
  )
}

export default OurClientsGridPage