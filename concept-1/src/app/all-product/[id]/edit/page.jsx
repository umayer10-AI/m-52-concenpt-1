import Epage from '@/component/E2';
import { getId } from '@/lib/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)
    console.log(data)

    return (
        <div>
            <Epage id={id} p={data}></Epage>
        </div>
    );
};

export default page;