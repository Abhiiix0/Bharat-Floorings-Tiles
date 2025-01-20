import Header from "../components/Header";
import OurServices from "../components/OurServices";

const page = () => {
  return (
    <div>
      <Header iconsColor="black" lines={true} />
      <OurServices />
    </div>
  );
};

export default page;
