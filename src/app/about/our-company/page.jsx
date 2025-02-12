import Header from "../../../components/Header";
import OurCompany from "../../../components/our-company/OurCompany";
import {
  AWARDS,
  EVENTS_SUB_SECTION,
  MANAGEMENT,
  OUR_JOURNEY,
  PRESS_RELEASES,
} from "../../../utils";
import ourCompanyImage from "../../../../public/images/our-company/our_company.jpg";
import CustomHeader from "../../../components/CustomHeader";

const page = () => {
  return (
    <div>
      <CustomHeader
        level2={true}
        title="Our Company"
        bgImg={ourCompanyImage?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      <OurCompany
        journey={OUR_JOURNEY}
        management={MANAGEMENT}
        awards={AWARDS}
        press={PRESS_RELEASES}
        events={EVENTS_SUB_SECTION}
      />
    </div>
  );
};

export default page;
