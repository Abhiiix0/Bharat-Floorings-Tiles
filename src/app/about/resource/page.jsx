import Header from '../../../components/Header'
import Resource from '../../../components/resource/Resource'
import {RESOURCES} from '../../../utils'
import resourcesPageIMage from "../../../../public/images/resources/resource_image.jpg";
import CustomHeader from '../../../components/CustomHeader';

const page = () => {
  return (
    <div>
      <CustomHeader
        level2={true}
        title="Resources"
        bgImg={resourcesPageIMage?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      <Resource resource={RESOURCES} />
    </div>
  );
};

export default page;
