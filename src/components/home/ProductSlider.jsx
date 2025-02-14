import React from "react";
import ProductCard from "./ProductCard";
import RightArrow from "../../../public/icons/RightArrow";
import { products } from "../../utils";
const ProductSlider = () => {
  return (
    <section className=" relative">
      <div className="absolute hidden z-10 lg:flex w-full h-full px-[4px] lg:px-[88px]   top-0 left-0  justify-between">
        <div className=" w-full border-l border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border-x border-[#2A2523] opacity-[0.1] h-full"></div>
        <div className=" w-full border-r border-[#2A2523] opacity-[0.1] h-full"></div>
      </div>
      <div className=" relative  z-20">
        <div className=" hidden  side-padding md:flex pt-[45px] pb-28  justify-between font-Inter font-medium">
          <p>60 Products</p>
          <p>30 colors</p>
          <p>100 Years</p>
        </div>
        <div className="  side-padding flex gap-9 2xl:gap-[70px] flex-col xl:flex-row">
          <p className=" pt-[74px] md:pt-0 text-[40px] leading-[40px] lg:text-[100px] 3xl:w-full lg:leading-[100px] font-Gloock">
            Products
          </p>
          <div className=" w-full flex items-start justify-between">
            <p className=" leading-6 w-[550px] font-Inter  text-base ">
              From exquisite handcrafted cement tiles that bring timeless beauty
              to your space, to elegant terrazzo floors that exude grandeur, our
              collection of decorative concrete, outdoor floors, micro cement
              overlays, wallpapers, bespoke products, and more, offers limitless
              design possibilities. Let your imagination soar as you discover
              the perfect flooring solution that transforms ordinary spaces into
              extraordinary works of art.
            </p>
            <p className=" hidden w-fit mb-4 md:flex  md:items-start justify-end  ">
              <a
                className=" border  justify-center items-center flex gap-3 border-black text-[14px] md:text-base  md:w-fit md:px-5 md:py-[15px] "
                href="#"
              >
                View Projects
                <RightArrow color="black" />
              </a>
            </p>
          </div>
        </div>
        <div className=" pb-[97px] xl:pb-[200px]">
          <div className=" flex flex-row z-30 custom-scrollbar overflow-x-auto gap-5 lg:gap-8 whitespace-nowrap  pt-[65px] md:pt-[100px]">
            {products.map((product, index) => (
              <div className=" w-[573px]" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
