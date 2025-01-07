import GalleryPage from "@/app/components/GalleryPage";
import Header from "@/app/components/Header";
import { GALLERY_PAGE_IMAGES } from "@/utils";

const page = () => {
  return <div>
    <Header iconsColor="black" lines={true}/>
    <GalleryPage gallery={GALLERY_PAGE_IMAGES} />
    </div>;
};

export default page;
