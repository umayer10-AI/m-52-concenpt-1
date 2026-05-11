import { getData } from '@/lib/data';
import React from 'react';

const AllCards = async () => {

    const data = await getData()
    // console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default AllCards;