import contactImg from "../../../../public/images/contact_page.jpg";
import Map from "../../../components/contact/Map";
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
        className="3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative"
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Contact</h1>
        </div>
      </div>
      <Map></Map>
    </div>
  );
};

export default page;
