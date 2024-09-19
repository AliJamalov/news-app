import React from 'react';
import Image from 'next/image';
import { getNews } from '../../../../api/games';
import { IGame } from '../../../../types/game';

const fetchNewsItem = async (id: string): Promise<IGame> => {
  const allNews: IGame[] = await getNews(); // Явно указываем, что allNews - это массив IGame
  const newsItem = allNews.find((item) => item.id === parseInt(id, 10)); // Находим новость по ID

  if (!newsItem) {
    throw new Error('News item not found');
  }

  return newsItem;
};

const NewsDetail = async ({ params }: { params: { id: string } }) => {
  const newsItem: IGame = await fetchNewsItem(params.id); // Указываем тип для newsItem

  return (
    <div className='px-[72px] py-[38px]'>
      <div>
        <Image 
          src={newsItem.image} 
          alt={newsItem.title} 
          width={600} 
          height={400} 
          objectFit='cover'
        />
        <h1 className='text-[34px] font-bold'>{newsItem.title}</h1>
        <p className='text-[18px]'>{newsItem.content}</p>
        <p className='text-[14px] text-gray-500'>{newsItem.date}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
