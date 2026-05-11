import { getData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const AllCards = async ({p}) => {

    
    // console.log(data)

    return (
        <div>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg shadow-cyan-600 border border-cyan-500 hover:scale-95 transition duration-500">
  
  <Image width={100} height={100}
    className="w-full h-56 object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    src={p.image}
    alt="Gaming Headset"
  />

  <div className="p-5 space-y-3">
    
    <h2 className="text-2xl font-bold text-gray-800">
      {p.title}
    </h2>

    <p className="text-gray-600 text-sm">
      {p.description}
    </p>

    <div className="flex items-center justify-between">
      
      <span className="text-2xl font-bold text-indigo-600">
        ${p.price}
      </span>

      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
        In Stock: {p.stock}
      </span>
    </div>

    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-300">
      Buy Now
    </button>

  </div>
</div>
        </div>
    );
};

export default AllCards;