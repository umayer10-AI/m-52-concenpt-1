"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav1 = () => {

    const p = usePathname()

    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'All Product',
            path: '/all-product'
        },
        {
            name: 'Add Product',
            path: '/add-product'
        },
    ]

    return (
        <div className='text-sm flex items-center gap-7'>
            {
                links.map(v => (
                    <Link className='font-semibold' key={v.name} href={v.path}>
                        {
                            p===v.path? <Button size='sm' className={`bg-linear-to-r from-green-500 to-blue-500`}>{v.name}</Button>
                            : <button>{v.name}</button>
                        }
                    </Link>
                ))
            }
        </div>
    );
};

export default Nav1;