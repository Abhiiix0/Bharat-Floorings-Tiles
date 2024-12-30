import bgImg from "../../public/images/home-page-bg.jpg";

import Header from "./components/Header";

// import RootLayout from "./layout";
const page = () => {
  return (
    <div>
      <section
        // className=" bg-red-300"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Header home={true} title="home"></Header>
      </section>
      Home
    </div>
  );
};

export default page;
