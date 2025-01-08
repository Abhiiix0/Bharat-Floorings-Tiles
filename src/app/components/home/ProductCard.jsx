import Image from "next/image";
import React from "react";
import RightArrow from "../../../../public/icons/RightArrow";

const ProductCard = ({ product }) => {
  return (
    <div className=" w-[296px] xl:w-[35rem]  ">
      <Image alt="img" src={product?.image} className=" w-full"></Image>
      <div>
        <p className=" text-[26px] leading-[42px] xl:text-[50px] mt-4 xl:mt-5 xl:leading-[80px]  flex items-center w-fit gap-3">
          {product?.name} <RightArrow size={16} className="mt-3"></RightArrow>
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
