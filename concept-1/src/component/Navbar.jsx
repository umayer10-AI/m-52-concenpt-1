import React from 'react';
import Nav1 from './Nav1';

const Navbar = () => {
    return (
        <div className=''>
            <h2 className='text-2xl font-bold bg-linear-to-r from-green-500 to-blue-500 text-transparent bg-clip-text w-fit'>PH E-Commerce</h2>
            <Nav1></Nav1>
        </div>
    );
};

export default Navbar;