import Header from '../components/Header'
import Workbench from '../components/workbench/Workbench'

const page = () => {
  return (
    <div className='bg-[#2b2b2b]'>
      <div className='h-[125px] bg-black mb-32'>
        <Header textColor="text-white" />
      </div>
      <Workbench />
    </div>
  )
}

export default page