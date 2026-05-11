import AllCards from '@/component/AllCards';
import { getData } from '@/lib/data';
import React from 'react';

const page = async () => {

  const data = await getData()

  return (
    <div>
      <h2 className='text-3xl font-semibold my-5'>Popular Products</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            {
                data.slice(0,4).map(v => <AllCards key={v._id} p={v}></AllCards>)
            }
        </div>
    </div>
  );
};

export default page;