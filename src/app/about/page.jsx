'use client'
// import Layout from "../components/CommonLayout";
import bgImg from "../../../public/images/image.jpg";
import RootLayout from "../layout";
import Header from "../components/Header";
import { useState } from "react";
// import RootLayout from "../layout";
// import RootLayout from "../layout";

const page = () => {
  return (
    <div className="flex flex-col gap-4 my-10 ml-10">
      <a href="about/careers">Career</a>
      <a href="about/events">Events</a>
      <a href="about/gallery">Gallery</a>
      <a href="about/our-client">Our Clients</a>
      <a href="about/our-company">Our Company</a>
      <a href="about/our-services">Our Services</a>
      <a href="about/press">Press</a>
      <a href="about/projects">Projects</a>
      <a href="about/resource">Resources</a>
    </div>
  );
};

export default page;
