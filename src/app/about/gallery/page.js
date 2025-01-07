import GalleryPage from "@/app/components/GalleryPage";
import { GALLERY_PAGE_IMAGES } from "@/utils";
import Header from "../../components/Header";
const page = () => {
  return (
    <div>
      <Header iconsColor="black" />
      <GalleryPage gallery={GALLERY_PAGE_IMAGES} />
    </div>
  );
};

export default page;
