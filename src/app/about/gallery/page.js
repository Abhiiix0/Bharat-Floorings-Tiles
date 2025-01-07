import GalleryPage from "@/app/components/GalleryPage";
import { GALLERY_PAGE_IMAGES } from "@/utils";

const page = () => {
  return <div>
    <GalleryPage gallery={GALLERY_PAGE_IMAGES} />
    </div>;
};

export default page;
