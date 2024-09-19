import React from 'react'
import { getUpdateNews } from '../../../api/games'
import SingleNews from '@/components/singleNews';

const UpdatesNews = async () => {

    const getUpdateNewsPromise = await getUpdateNews();

    const [getNewsUpdates] = await Promise.all([getUpdateNewsPromise]);
  return (
    <div className='px-[72px] py-[32px] flex'>
        <SingleNews getNewsAll={getNewsUpdates}/>
    </div>
  )
}

export default UpdatesNews