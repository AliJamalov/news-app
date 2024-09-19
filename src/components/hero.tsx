import React from 'react';
import Image from 'next/image';
import mainImage from '@/assets/images/Rectangle 2.svg';

const Hero = () => {
  return (
    <div className='flex bg-[#442788] px-[72px] py-[32px] text-white'>
      <div className='flex-1'>
        <h1 className='text-[62px] mt-[80px] leading-[70px]'>
          Stay Updated <br /> with the Latest <br /> Gaming News
        </h1>
        <p className='mt-[20px]'>
          Discover the hottest games, industry updates, and console releases.
        </p>
        <div className='mt-[20px] flex gap-[10px]'>
          <button className='bg-white text-[#442788] px-4 py-2 rounded'>Explore</button>
          <button className='bg-white text-[#442788] px-4 py-2 rounded'>Sign Up</button>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <Image src={mainImage} alt='main-image' />
      </div>
    </div>
  );
};

export default Hero;
