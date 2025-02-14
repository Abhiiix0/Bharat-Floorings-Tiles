import { DESIGNER_IMAGES } from "../../utils";
import GalleryPageCards from "./GalleryPageCards";
import LinesComp from "../LinesComp";

const GalleryPage = ({ gallery }) => {
  return (
    <section className="max-w-[1920px] mx-auto relative overflow-hidden xl:mb-[17px] lg:mb-3 mb-2">
      <LinesComp />
      <div className="relative">
        <h1 className="big-heading lg:px-[100px] px-[20px] 3xl:mt-36 3xl:mb-24 2xl:mt-28 xl:mt-20 lg:mb-20 md:mt-16 md:mb-20 mt-14 mb-16">
          Gallery
        </h1>
        <div className="grid-col md:min-h-[3200px] grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden 2xl:gap-[17px] lg:gap-3 gap-2 3xl:px-4 xl:px-3 px-2 ">
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
