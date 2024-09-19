import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IGame } from '../../types/game';

interface IProps {
  getNewsAll: IGame[];
}

const SingleNews = ({ getNewsAll}: IProps) => {
  return (
    <div className='grid grid-cols-3 gap-[40px]'>
      {getNewsAll.map((newsItem) => (
        <div key={newsItem.id} className='cursor-pointer'>
          <Link href={`/news/${newsItem.id}`} passHref>
            <div>
              <Image 
                src={newsItem.image} 
                alt={newsItem.title} 
                width={300} 
                height={300} 
                objectFit='cover' 
              />
            </div>
            <h1 className='text-xl mt-[7px] font-bold'>{newsItem.title}</h1>
            <p className='text-sm mt-[7px]'>{newsItem.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SingleNews;
