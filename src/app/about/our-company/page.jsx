import Header from '../../../components/Header'
import OurCompany from '../../../components/our-company/OurCompany'
import { AWARDS, EVENTS_SUB_SECTION, MANAGEMENT, OUR_JOURNEY, PRESS_RELEASES,  } from '../../../utils';
import ourCompanyImage from "../../../../public/images/our-company/our_company.jpg";

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ourCompanyImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] sm:h-[40vh] h-[245px] relative"
      >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute 3xl:top-[55%] sm:top-[70%] bottom-7 lg:px-[100px] px-[20px]">
          Our Company
        </h1>
      </div>
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
