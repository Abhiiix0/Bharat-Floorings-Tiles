"use client";
import { useState, useEffect } from "react";

export default function RotatingTextEffect({ words }) {
  //   const words = ["First", "Second", "Third"]; // Your words
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds (1s animation + 1s wait)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div className="relative h-[50px] overflow-hidden text-2xl font-bold">
      <div
        className="absolute top-0 w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentWordIndex * 50}px)` }}
      >
        {words.map((word, idx) => (
          <div
            key={idx}
            className="h-[50px] flex items-center justify-center text-center"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
