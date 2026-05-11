import AllCards from '@/component/AllCards';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>All Products</h2>
            <AllCards></AllCards>
        </div>
    );
};

export default page;