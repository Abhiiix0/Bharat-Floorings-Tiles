"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import manufracture1 from "../../images/home/manufracture.jpg";
import BigArrowRight from "../../icons/bigArrowRIght";
export default function Manufacture() {
  return (
    <div className="relative">
      <div className="pt-[45px] px-[104px] bg-[#2A2523] sticky top-0">
        <div className="flex text-[#F6F5EC] justify-between">
          <p>6 steps</p>
          <p>4 hours</p>
          <p>Handmade</p>
        </div>
        <div className="mt-[120px]">
          <h3 className="3xl:text-[100px] text-[70px] font-Gloock text-[#8FDEAA] max-w-[690px] 3xl:max-w-[890px] leading-[100%]">
            Manufacturing process
          </h3>
          <div className=" mt-[30px] 3xl:mt-[66px] text-[#F6F5EC] flex gap-[13%]">
            <p className="max-w-[640px]">
              Output is a beautiful tile that lasts forever Over the decades
              Bharat has laid some of the best-known floors in India’s landmark
              buildings: from palaces of Maharajas and Raj Bhavans to prominent
              residences, hotels, hospitals, clubs, offices, factories,
              co-operative housing societies, educational and religious
              institutions, airports, railways etc.
            </p>
            <p className="max-w-[640px]">
              Each step has to be done well The best European technologies were
              brought and modified to create a unique product suited to Indian
              conditions. Recognising that a good floor is only achieved with a
              good product that is installed correctly and maintained properly,
              the company has sister companies which do high quality
              installation of all types of floorings, a range of civil work,
              floor maintenance and general cleaning.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[152px] pb-[200px] ps-[104px] bg-[#2A2523]">
        <div className="flex flex-col gap-y-[50px] h-[4200px]">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div
              key={idx}
              className={
                "flex sticky top-[500px] 3xl:top-[600px] overflow-hidden"
              }
              style={{
                marginLeft: idx === 0 ? 0 : ` ${145 * (idx - 1)}px`,
              }}
            >
              {idx !== 0 && (
                <div className="min-w-[146px] h-auto bg-[#2A2523] opacity-[0.8] shrink-0" />
              )}
              <div className="flex border-t-[1px] border-[#8FDEAA] bg-[#2A2523] shrink-0">
                <p
                  className={`text-green text-[#8FDEAA] w-[145px] pt-[110px] relative border-t-[4px]  border-[#8FDEAA]`}
                >
                  <span className="absolute top-[55px] left-0 text-[30px] font-medium text-[#8FDEAA]">
                    {idx + 1}
                  </span>
                  Bending
                </p>
                <p className="text-[#F6F5EC] leading-[160%] max-w-[511px] pt-[110px] shrink-0">
                  The pigment composition is a mixture of high quality white
                  Portland cement, marble powder and natural mineral colour
                  pigments. The ingredients are blended together carefully over
                  a period of 3-4 hours to produce the final colours.
                </p>
              </div>
              <div className="bg-[#2A2523] ps-[68.1px] shrink-0">
                <Image
                  src={manufracture1}
                  alt="manufracture1"
                  width={705}
                  height={495}
                  className="w-[705px] h-[495px] rounded-[20px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1086px] absolute bottom-0">
        <div
          style={{}}
          className="rounded-t-[80px] manufractureImg w-full h-full pt-[46px] px-[104px] pb-[100px] flex flex-col justify-between"
        >
          <div className="flex text-[#F6F5EC] justify-between">
            <p>6 steps</p>
            <p>4 hours</p>
            <p>Handmade</p>
          </div>
          <p className="font-Gloock text-[80px] text-[#F6F5EC] flex items-center  gap-11">
            BFT Home <BigArrowRight size={108} />
          </p>
        </div>
      </div>
    </div>
  );
}
