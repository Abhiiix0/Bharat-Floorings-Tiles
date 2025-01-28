import { DESIGNER_IMAGES } from "../utils";
import React from "react";
import GalleryPageCards from "./GalleryPageCards";
import LinesComp from "./LinesComp";

const GalleryPage = ({ gallery }) => {
  return (
    <section className="max-w-[1920px] mx-auto relative overflow-hidden">
      <LinesComp />
      <div className="relative">
        <h1 className="big-heading lg:px-[100px] px-[20px] 3xl:mt-[146.4px] 3xl:mb-24 2xl:mt-20 2xl:mb-36 xl:mt-16 xl:mb-28 lg:mb-24 md:mt-14 md:mb-20 mt-14 mb-16">
          Gallery
        </h1>
        <div className="grid-col md:min-h-[3200px] grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden ">
          {gallery.map(({ id, galleryImg }) => (
            <GalleryPageCards
              key={id}
              galleryImg={galleryImg}
              designerImg={DESIGNER_IMAGES}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
