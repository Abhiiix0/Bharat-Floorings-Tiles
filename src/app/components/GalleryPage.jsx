import { DESIGNER_IMAGES, GALLERY_PAGE_IMAGES } from "@/utils";
import React from "react";
import GalleryPageCards from "./GalleryPageCards";
import LinesComp from "./LinesComp";

const GalleryPage = ({ gallery }) => {
  console.log("gal", gallery);
  return (
    <section className="max-w-[1920px] mx-auto relative overflow-hidden">
      <LinesComp height={"60vh"} />
      <div className="relative">
        <h1 className="big-heading lg:px-[100px] px-[20px]">Gallery</h1>
        <div className="grid-col md:min-h-[3200px] grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden ">
          {gallery.map((gallery, id) => (
            <GalleryPageCards
              key={id}
              galleryImg={gallery}
              designerImg={DESIGNER_IMAGES}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
