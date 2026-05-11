import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const EditBtn = ({p}) => {
    return (
        <Link href={`/all-product/${p}/edit`}className="bg-linear-to-r from-green-500 to-blue-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300">
                Edit Card
        </Link>
    );
};

export default EditBtn;