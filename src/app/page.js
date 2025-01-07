<<<<<<<<< Temporary merge branch 1
import OurServicesCard from "./components/OurServicesCard";

const page = () => {
  return <div>
<h1>Home</h1>
    </div>;
=========
import bgImg from "../../public/images/home-page-bg.jpg";

import Header from "./components/Header";

// import RootLayout from "./layout";
const page = () => {
  return (
    <div>
      <section
      // className=" bg-red-300"
      >
        <Header home={true} title="home"></Header>
      </section>
      Home
    </div>
  );
>>>>>>>>> Temporary merge branch 2
};
export default page;
