import React from 'react'
import { getAllData } from '../../../api/games'
import SingleNews from '@/components/singleNews';

const AllData = async () => {

  const getAllDataPromise = await getAllData();

  const [getAll] = await Promise.all([getAllDataPromise]);

  return (
    <div className='px-[72px] py-[32px] flex'>
      <SingleNews getNewsAll={getAll} />
    </div>
  )
}

export default AllData