'use client'
// import Layout from "../components/CommonLayout";
import bgImg from "../../../public/images/image.jpg";
import RootLayout from "../layout";
import Header from "../components/Header";
import { useState } from "react";
import OurJourneyCard from "../components/our-company/OurJourneyCard";
import { OUR_JOURNEY } from "@/utils";
// import RootLayout from "../layout";
// import RootLayout from "../layout";


const page = () => {
  return (
    <div>
      <h1>About</h1>
      <OurJourneyCard image={OUR_JOURNEY[0].image} year={OUR_JOURNEY[0].year} para={OUR_JOURNEY[0].para} heading={OUR_JOURNEY[0].heading} />
    </div>
  );
};

export default page;
