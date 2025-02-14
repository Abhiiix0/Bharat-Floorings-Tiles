import careerPageIMage from "../../../../public/images/career_page.jpg";
import Careers from '../../../components/careers/Careers'
import Header from '../../../components/Header'
import {ALL_JOBS} from '../../../utils'
import CustomHeader from "../../../components/CustomHeader";

const page = () => {
  return (
    <div>
        <CustomHeader
        level2={true}
        title="Careers"
        bgImg={careerPageIMage?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      <Careers jobs={ALL_JOBS} />
    </div>
  );
};

export default page;
