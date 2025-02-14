"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GalleryPageCards = ({ designerImg, galleryImg }) => {
  const router = useRouter();
  return (
    <div className="min-h-64 min-w-64 sm:h-[600px] lg:h-auto 3xl:min-h-[618px] relative">
      <img alt="gallery image" src={galleryImg.src} className="h-full w-full" />
      <div className="absolute top-[85%] lg:top-[90%] left-[10%] flex w-full gap-4">
        {designerImg.map((imgss, i) => (
          <Image
            width={100}
            height={100}
            alt={`designer image ${i}`}
            className="cursor-pointer xl:h-10 xl:w-10 h-8 w-8 hover:scale-150 effect border-[2.518px]  border-white"
            key={i}
            onClick={() => router.push('/product-details')}
            src={imgss.image?.src}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPageCards;
