import { getData } from '@/lib/data';
import React from 'react';
import AllCards from './AllCards';

const Carts = async () => {

    const data = await getData()

    return (
        <div>
            {
                data.map(v => <AllCards key={v._id} p={v}></AllCards>)
            }
        </div>
    );
};

export default Carts;