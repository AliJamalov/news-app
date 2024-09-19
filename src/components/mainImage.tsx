import React from 'react';
import Main from '@/assets/images/Rectangle 5.svg';
import first from '@/assets/images/Rectangle 8.svg';
import second from '@/assets/images/Rectangle 7.svg';
import last from '@/assets/images/last.svg';
import Image from 'next/image';
import Link from 'next/link';

const MainImage = () => {
  return (
    <div className='px-[72px] bg-[#442788] text-white relative'>
      <div className='relative'>
        <Image src={Main} alt='main' layout='responsive' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
          <h1 className='text-[34px] mb-[20px]'>
            GameNot Mission
            <br />
            GameNot is your go-to source for the latest news and information on the gaming industry. We provide up-to-date coverage on games, gaming companies, and consoles, keeping you in the loop with all the exciting developments.
          </h1>
          <p className='text-[18px]'>
            GameNot is your go-to source for the latest news and information on the gaming industry. We provide up-to-date coverage on games, gaming companies, and consoles, keeping you in the loop with all the exciting developments.
          </p>
        </div>
      </div>
      <div className='flex justify-center mt-[50px]'>
      <h1 className='text-[70px]'>Stay Updated with GameNot</h1>
      </div>
      <div className='flex gap-[40px] pb-[60px] mt-[50px]'>
      <Link href={'/all'}>
        <div>
        <div>
            <Image src={first} alt='first'/>
        </div>
        <p className='mt-[10px]'>all</p>
        <h1 className='mt-[7px]'>New Game Releases and Updates</h1>
        </div>
        </Link>
        <Link href={'/news'}>
        <div>
        <div>
            <Image src={second} alt='second'/>
        </div>
        <p className='mt-[10px]'>News</p>
        <h1 className='mt-[7px]'>Game Review: Cyberpunk 2077</h1>
        </div>
        </Link>
        <Link href={'/updateNews'}>
        <div>
        <div>
            <Image src={last} alt='second'/>
        </div>
        <p className='mt-[10px]'>Updates</p>
        <h1 className='mt-[7px]'>Top 10 Best-Selling Games of 2021</h1>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default MainImage;
