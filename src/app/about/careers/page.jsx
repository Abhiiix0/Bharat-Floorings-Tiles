import careerPageIMage from "../../../../public/images/career_page.jpg";
import Careers from '../../../components/Careers'
import Header from '../../../components/Header'
import {ALL_JOBS} from '../../../utils'

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${careerPageIMage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] sm:h-[40vh] h-[245px] relative"
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] sm:top-[70%] bottom-7 lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Careers</h1>
        </div>
      </div>
      <Careers jobs={ALL_JOBS} />
    </div>
  );
};

export default page;
