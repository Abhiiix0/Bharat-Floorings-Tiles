import Header from '../../../components/Header';
import PressReleases from '../../../components/press/PressReleases'
import pressPageImage from "../../../../public/images/press/press_releases.jpg";
import {PRESS_RELEASES} from '../../../utils'
import CustomHeader from '../../../components/CustomHeader';

const page = () => {
  return (
    <div>
      <CustomHeader
        level2={true}
        title="Press Releases"
        bgImg={pressPageImage?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      <PressReleases press={PRESS_RELEASES} />
    </div>
  );
};

export default page;
