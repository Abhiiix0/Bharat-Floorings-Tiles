import contactImg from "../../../../public/images/contact_page.jpg";
import Map from '../../../components/contact/Map'
import Header from "../../../components/Header";
const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${contactImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] sm:h-[40vh] h-[245px] relative"
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] sm:top-[70%] bottom-7 lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Contact</h1>
        </div>
      </div>
      {/* <Contact /> */}
      <Map></Map>
    </div>
  );
};

export default page;
