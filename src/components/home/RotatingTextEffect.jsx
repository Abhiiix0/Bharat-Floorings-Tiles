"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function RotatingText({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="overflow-hidden justify-center xl:justify-start  h-[50px] sm:h-[70px] md:h-[100px] lg:h-[150px] 3xl:h-[170px]  flex end items-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // className="text-4xl font-bold"
          className=" text-[26px] sm:text-[2.5rem] absolute  md:text-[7vw] 3xl:text-[142px] font-Gloock uppercase"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
