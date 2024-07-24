"use client";

import pic1 from '../assets/images/pic-1.jpg';
import pic2 from '../assets/images/pic-2.png';
import pic3 from '../assets/images/pic-3.jpg';
import pic4 from '../assets/images/pic-4.jpg';
import pic5 from '../assets/images/pic-5.jpg';
import { useState } from 'react';

const CarouselPhoto = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [pic1.src, pic2.src, pic3.src, pic4.src, pic5.src];

  const handleBack = () => {
    return setImageIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }
  const handleForward = () => {
    return setImageIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  }

  return (
    <div className='max-w-[1200px] w-[500px] h-full my-auto mx-0'>
      <div className='w-full h-full relative'>
        <img src={images[imageIndex]} alt='carousel' className='w-full h-full object-cover block' />
        <button onClick={handleForward} className='absolute top-1/2 right-0 p-4'>&gt;</button>
        <button onClick={handleBack} className='absolute top-1/2 left-0 p-4'>&lt;</button>
      </div>
    </div>
  )
};

export default CarouselPhoto;