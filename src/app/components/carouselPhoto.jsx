"use client";

import pic1 from "../assets/images/pic-1.jpg";
import pic2 from "../assets/images/pic-2.png";
import pic3 from "../assets/images/pic-3.jpg";
import pic4 from "../assets/images/pic-4.jpg";
import pic5 from "../assets/images/pic-5.jpg";
import { useState } from "react";

const CarouselPhoto = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    { url: pic1.src, alt: "Amity on Golden Gate" }, 
    { url: pic2.src, alt: "Amity on Tales of Power" },
    { url: pic3.src, alt: "Amity on Book of Hate" },
    { url: pic4.src, alt: "Amity on Barnacle Scars" },
    { url: pic5.src, alt: "Amity on Tainted Love" }
  ];

  const handleBack = () => {
    return setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleForward = () => {
    return setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonDivStyle =
    "flex absolute top-0 bottom-0 p-4 bg-black bg-opacity-0 hover:bg-opacity-25 transition-all duration-100 ease-in-out group focus-visible:bg-opacity-25";
  const buttonStyle =
    "self-center px-4 text-lg font-bold text-white group-hover:animate-bounce";
  const imgStyle =
    "w-full h-full object-cover block grow-0 shrink-0 transition-all duration-300 ease-in-out";
  return (
    <section className="max-w-[1200px] w-full aspect-[10/6] my-auto mx-0 relative" aria-label="Image Slider">
      <a href="#skip-image-slider" className="absolute h-[1px] w-[1px] p-0 -m-[1px] overflow-hidden border-0 focus-visible:block focus-visible:top-1/2 focus-visible:left-0 focus-visible:m-0 focus-visible:h-auto focus-visible:w-auto focus-visible:p-4 focus-visible:border-1 focus-visible:bg-white focus-visible:text-black focus-visible:z-10" style={{"clip-path": "rect(0 0 0 0)"}}>Skip Image Slider Controls</a>
      <div className="w-full h-full relative overflow-hidden flex">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.alt}
            aria-hidden={index === imageIndex ? "false" : "true"}
            className={imgStyle}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <button onClick={handleForward} className={buttonDivStyle + " right-0"} aria-label="View Next Image">
            <span className={buttonStyle}>&gt;</span>
        </button>
        <button onClick={handleBack} className={buttonDivStyle + " left-0"} aria-label="View Previous Image">
          <span className={buttonStyle}>
            &lt;
          </span>
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
            className="w-8 h-8 border border-red-500 rounded-full bg-opacity-80 bg-slate-700 transition-all duration-100 ease-in-out hover:scale-125 focus-visible:outline outline-red-500 text-white font-xl flex justify-center items-center"
          >
            {index === imageIndex ? "🔴" : "⚪"}
          </button>
        ))}
      </div>
      <div id="skip-image-slider"></div>
    </section>
  );
};

export default CarouselPhoto;
