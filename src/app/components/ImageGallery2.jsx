"use client";
import { useState } from "react";

const ImageGallery2 = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
      {/* Left side: Selected image */}
      <div className="flex-1 hidden lg:flex h-[800px] border xl:h-[1083px] justify-center">
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-full h-full object-cover"
        />
      </div>

      {/* Right side: All images */}
      <div className="flex flex-wrap flex-col justify-center items-center md:items-start">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={` w-[100vw] h-[15.6rem] sm:h-[18rem] lg:w-44 lg:h-[133px] xl:w-[18.5rem] xl:h-[180px] object-cover cursor-pointer ${
              img === selectedImage ? "lg:grayscale-0" : "lg:grayscale"
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery2;
