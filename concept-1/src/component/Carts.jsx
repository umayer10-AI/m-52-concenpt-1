import { getData } from '@/lib/data';
import React from 'react';
import AllCards from './AllCards';

const Carts = async () => {

    const data = await getData()
    // console.log(data)

    return (
        <div>
            <AllCards></AllCards>
        </div>
    );
};

export default Carts;