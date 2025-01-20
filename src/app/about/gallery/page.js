import GalleryPage from "../../components/GalleryPage";
import Header from "../../components/Header";
import { GALLERY_PAGE_IMAGES } from "../../../utils";
// import Header from "../../components/Header";
const page = () => {
  console.log(GALLERY_PAGE_IMAGES);
  return (
    <div>
      <Header iconsColor="black" lines={true} />
      <GalleryPage gallery={GALLERY_PAGE_IMAGES} />
    </div>
  );
};

export default page;
