import Image from "next/image";
import React from "react";
import RightArrow from "../../../../public/icons/RightArrow";
import tiles from "../../../../public/images/home/tiles.jpg";
const ProductCard = ({ product }) => {
  return (
    <div className="  w-[296px] xl:w-[28rem] group 3xl:w-[35rem]  ">
      <div className=" bg-[#EAEAEA] overflow-hidden  h-[420px] xl:h-[650px] 3xl:h-[809px]">
        <Image
          alt="img"
          src={product?.image}
          className=" w-full h-full group-hover:hidden"
        ></Image>
        <div className=" h-full 3xl:text-base  text-[0.6rem] xl:text-[12px] overflow-hidden transition-opacity duration-500 ease-in-out group-hover:opacity-100 opacity-0 flex normal-text font-medium px-7 xl:px-[2.59rem] gap-3 xl:gap-6 3xl:gap-[38px] flex-col pt-6 xl:pt-[50px] 3xl:pt-[80px] border">
          <div className="flex gap-14">
            <p>30 Colors</p> <p>30 Colors</p>
          </div>
          <h4 className=" text-base xl:text-xl 3xl:text-[26px]">
            Designer tiles
          </h4>
          <div className=" grid grid-cols-2 w-[200px] xl:w-[260px] 3xl:w-[300px] gap-2 xl:gap-4 3xl:gap-5">
            <div className=" h-[80px] w-[80px]  xl:h-[120px] xl:w-[120px] 3xl:w-[141px] 3xl:h-[141px]">
              <Image
                width={100}
                height={100}
                alt="img"
                className=" w-full h-full object-cover"
                src={tiles.src}
              ></Image>
            </div>
            <div className="  h-[80px] w-[80px]  xl:h-[120px] xl:w-[120px] 3xl:w-[141px] 3xl:h-[141px]">
              <Image
                width={100}
                height={100}
                alt="img"
                className=" w-full h-full object-cover"
                src={tiles.src}
              ></Image>
            </div>
            <div className="  h-[80px] w-[80px]  xl:h-[120px] xl:w-[120px] 3xl:w-[141px] 3xl:h-[141px]">
              <Image
                width={100}
                height={100}
                alt="img"
                className=" w-full h-full object-cover"
                src={tiles.src}
              ></Image>
            </div>
            <div className=" h-[80px] w-[80px]  xl:h-[120px] xl:w-[120px] 3xl:w-[141px] 3xl:h-[141px]">
              <Image
                width={100}
                height={100}
                alt="img"
                className=" w-full h-full object-cover"
                src={tiles.src}
              ></Image>
            </div>
          </div>
          <div className=" mt-2 xl:mt-10 border h-full break-words whitespace-normal">
            From exquisite handcrafted cement tiles that bring timeless beauty
            to your space, to elegant terrazzo floors that exude grandeur, our
            collection of decorative concrete, outdoor floors, micro cement
            overlays, wallpapers, bespoke products, and more, offers limitless
            design possibilities. Let your imagination soar as you discover the
            perfect flooring solution that transforms ordinary spaces into
            extraordinary works of art.
          </div>
        </div>
      </div>
      <div>
        <p className=" text-[26px] leading-[42px] xl:text-[50px] mt-4 xl:mt-5 xl:leading-[80px]  flex items-center w-fit gap-3">
          {product?.name}{" "}
          <RightArrow
            color="black"
            size={16}
            className=" group-hover:ml-6 transition-all duration-500 ease-in-out mt-3"
          ></RightArrow>
        </p>
        <div className=" flex gap-6  font-Inter text-[9px] xl:text-base font-medium">
          <p>{product.designs} designs</p>
          <p>{product.color} Colors</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
