import OurClientsGridComp from './OurClientsGridComp'

const OurClientsGridPage = ({resource}) => {
  return (
    <div className='grid 2xl:grid-cols-7 overflow-hidden lg:grid-cols-5 md:grid-cols-4 grid-cols-2'>
    {
      resource.map(({id, industryName, industry, tradeMark, domain, clientName, link, productImg, image})=>(
        <OurClientsGridComp key={id} industryName={industryName} industry={industry} tradeMark={tradeMark} domain={domain} clientName={clientName} link={link} productImg={productImg} image={image} />
      ))
    }
    </div>
  )
}

export default OurClientsGridPage