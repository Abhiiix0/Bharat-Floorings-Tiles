import Header from '../../../components/Header';
import PressReleases from '../../../components/press/PressReleases'
import pressPageImage from "../../../../public/images/press/press_releases.jpg";
import {PRESS_RELEASES} from '../../../utils'

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${pressPageImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] sm:h-[40vh] h-[245px] relative"
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] sm:top-[70%] bottom-7 lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Press Releases</h1>
        </div>
      </div>
      <PressReleases press={PRESS_RELEASES} />
    </>
  );
};

export default page;
