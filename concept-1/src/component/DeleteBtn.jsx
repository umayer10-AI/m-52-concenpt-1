"use client"
import { deleteUser } from '@/lib/action';
import React from 'react';

const DeleteBtn = ({p}) => {
    return (
        <button onClick={() => deleteUser(p)} className="border border-red-500 text-red-500 hover:bg-indigo-50 px-8 py-3 rounded-xl font-semibold transition duration-300">
            Delete
        </button>
    );
};

export default DeleteBtn;