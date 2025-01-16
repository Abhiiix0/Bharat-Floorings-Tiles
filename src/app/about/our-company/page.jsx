import {
  AWARDS,
  EVENTS_SUB_IMAGES,
  EVENTS_SUB_SECTION,
  MANAGEMENT,
  OUR_JOURNEY,
  PRESS_RELEASES,
} from "@/utils";
import ourCompanyImage from "../../../../public/images/our-company/our_company.jpg";
import Header from "@/app/components/Header";
import OurCompany from "@/app/components/our-company/OurCompany";

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ourCompanyImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative"
      >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
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
