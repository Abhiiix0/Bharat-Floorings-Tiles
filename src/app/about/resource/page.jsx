import Header from '../../../components/Header'
import Resource from '../../../components/Resource'
import {RESOURCES} from '../../../utils'
import resourcesPageIMage from "../../../../public/images/resources/resource_image.jpg";

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${resourcesPageIMage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] sm:h-[40vh] h-[245px] relative"
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] sm:top-[70%] bottom-7 lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Resources</h1>
        </div>
      </div>
      <Resource resource={RESOURCES} />
    </>
  );
};

export default page;
