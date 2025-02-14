import Header from '../../../components/Header'
import OurClients from '../../../components/our-clients/OurClients'
import {RESOURCES_IMAGES, HERITAGE_HOTELS, HERITAGE_RESTUARANTS} from '../../../utils'
import clientsPageImage from "../../../../public/images/our-clients/our_client.jpg";
import CustomHeader from '../../../components/CustomHeader';

const page = () => {
  return (
    <div>
      <CustomHeader
        level2={true}
        title="Our Clients"
        bgImg={clientsPageImage?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      <OurClients
        resource={RESOURCES_IMAGES}
        hotels={HERITAGE_HOTELS}
        resturants={HERITAGE_RESTUARANTS}
      />
    </div>
  );
};

export default page;
