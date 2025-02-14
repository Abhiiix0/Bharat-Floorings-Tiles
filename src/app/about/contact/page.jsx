import contactImg from "../../../../public/images/contact_page.jpg";
import Map from "../../../components/contact/Map";
import Header from "../../../components/Header";
import CustomHeader from "../../../components/CustomHeader";
const page = () => {
  return (
    <div>
     <CustomHeader
        level2={true}
        title="Contact"
        bgImg={contactImg?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      {/* <Contact /> */}
      <Map></Map>
    </div>
  );
};

export default page;
