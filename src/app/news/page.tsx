import React from 'react'
import { getNews } from '../../../api/games'
import SingleNews from '@/components/singleNews';

const News = async () => {

  const getNewsPromise = await getNews();

  const [getNewsAll] = await Promise.all([getNewsPromise]);

  return (
    <div className='px-[72px] py-[32px] flex'>
      <SingleNews getNewsAll={getNewsAll} />
    </div>
  )
}

export default News