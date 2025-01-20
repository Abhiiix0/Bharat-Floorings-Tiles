import { WORKBENCH } from '@/utils'
import addImg from '../../../../public/svgs/addImg.svg'


const Visualise = ({ setVisuals }) => {
  const handleClick = () => {
    document.getElementById('files').click();
  };
  return (
    <div
      className='3xl:h-[751px] 3xl:w-[355px] 2xl:h-[650px] xl:h-[550px] xl:w-72 lg:h-[450px] lg:w-64 h-[400px] w-60 3xl:p-[21px] xl:p-4 lg:p-3 p-2 flex flex-col 3xl:gap-4 xl:gap-3 lg:gap-2 gap-1 rounded bg-white'
    >
      {
        WORKBENCH.map(({ id, image }) => (
          <img onClick={() => setVisuals(true)} key={id} src={image.src} alt={`visualise image ${id}`} className='3xl:h-[165px] xl:h-[120px] 2xl:h-[145.5px] lg:h-[100.5px] h-[95px]' />
        ))
      }
      <div onClick={handleClick} className='3xl:h-[165px] 2xl:h-[145.5px] xl:h-[120px] lg:h-[100.5px] h-[95px] border-2 rounded border-[#C7C7C7] bg-[#F6F6F6] border-dashed flex flex-col items-center justify-center cursor-pointer'>
        <input id='files' type='file' className='hidden' />
        <img src={addImg.src} alt='Add image logo' className='2xl:h-51 xl:h-11 lg:h-10 h-9 2xl:mb-[14px] lg:mb-2 mb-1' />
        <p className='text-[#979797] xl:text-sm lg:text-xs text-[10px] font-medium font-Inter text-center'>
          Click to upload an image <br /> or drag and drop it here.
        </p>
      </div>
    </div>
  )
}

export default Visualise