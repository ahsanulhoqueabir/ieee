"use client";

import { shuffleArray } from "@/utilities/functions";
import { useEffect, useState } from "react";

const PhotoShuffle = () => {
  const [shuffledImages, setShuffledImages] = useState(images);
  useEffect(() => {
    const interval = setInterval(() => {
      const newShuffledImages = shuffleArray(images);
      setShuffledImages(newShuffledImages);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {shuffledImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="image"
          className="h-28 w-full object-cover rounded duration-150"
        />
      ))}
    </div>
  );
};

export default PhotoShuffle;

const images = [
  //   "https://www.ieeecsbdc.org/assets/E3-25cc14b0.jpg",
  "https://i.ibb.co/NsqFJcb/Whats-App-Image-2024-01-22-at-19-54-33-dd51438a.jpg",
  "https://www.ieeecsbdc.org/assets/2-d84baa45.jpg",
  "https://www.ieeecsbdc.org/assets/wintersym21-29747ef1.jpg",
  "https://www.ieeecsbdc.org/assets/4-0ea111bd.jpg",
  "https://www.ieeecsbdc.org/assets/1-e8b9d6b8.jpg",
  "https://www.ieeecsbdc.org/assets/event1-34f4a409.jpg",
  "https://www.ieeecsbdc.org/assets/3-84af3b17.jpg",
  "https://www.ieeecsbdc.org/assets/hero3-fbcac4b2.jpg",
];
