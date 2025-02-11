"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurClientsGridComp = ({
  industryName,
  tradeMark,
  domain,
  clientName,
  industry,
  productImg,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandLeft, setExpandLeft] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isExpanded && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setExpandLeft(rect.right > window.innerWidth - 100);
    }
  }, [isExpanded]);

  const handleClickOutside = (event) => {
    // if (containerRef.current && !containerRef.current.contains(event.target)) {
    // }
    setIsExpanded(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative h-[188px] sm:h-[274px]  group`}
      layoutId="modal"
    >
      {/* Image and Click Handler */}
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative h-full w-full cursor-pointer overflow-hidden"
        // whileHover={{ scale: 1.1 }}
        // animate={isExpanded ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="group relative h-full w-full cursor-pointer overflow-hidden">
          <Image
            src={image.src}
            alt={`${clientName} image`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black/30 ${isExpanded ? "opacity-70" : "opacity-0 group-hover:opacity-30"
            }`}
        />
      </motion.div>

      {/* Overlay Info with AnimatePresence */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            onClick={() => handleClickOutside()}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, x: expandLeft ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: expandLeft ? 48 : -48 }}
            transition={{ duration: 0.5 }}
            className={`absolute top-0 ${expandLeft ? "right-0" : "left-0"
              } w-[200%] z-[2500] h-[200px] sm:h-[274px]  text-white `}
          >
            <div
              onClick={() => handleClickOutside()}
              className="flex bg-black/50"
            >
              <div
                // onClick={() => handleClickOutside()}
                className=" w-[50%] gap-3 md:gap-9 flex justify-center p-3 md:px-7 flex-col h-[200px] sm:h-[274px]"
              >
                <h3 className="font-bold text-[13px] md:text-base font-Inter">
                  {industryName} <sup>{tradeMark}</sup> {industry} ({domain})
                </h3>
                <p className=" text-[13px] md:text-lg font-Inter mb-5 md:mt-0">{clientName}</p>
                <Link href="/product-details" className="font-bold underline font-Inter md:text-base text-[13px]">
                  View tile detail
                </Link>
              </div>
              <Image
                width={100}
                height={100}
                alt="img"
                src={productImg.src}
                className="w-36 sm:w-[50%] h-[123px] sm:h-auto my-auto md:h-[220px] 2xl:h-[250px] text-[11px] md:text-base object-cover m-2 md:m-3"
              ></Image>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OurClientsGridComp;
