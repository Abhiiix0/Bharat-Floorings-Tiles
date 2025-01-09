
const ResourcesPageCard = ({ image, resourceName, docType, size }) => {
  return (
    <div className='font-Inter'>
      <img src={image.src}
        alt={`${resourceName} image`}
        className='2xl:h-[599px] xl:h-[480px] lg:h-[390px] min-h-[330px]'
      />
      <div className='xl:my-6 md:my-5 my-4'>
        <h3 className='xl:text-2xl md:text-xl text-lg font-medium font-Inter'>
          {resourceName}
        </h3>
        <span className='lg:text-[13px] text-[11px] font-Inter font-medium'>
          {docType} - {size}
        </span>
      </div>
    </div>
  )
}

export default ResourcesPageCard