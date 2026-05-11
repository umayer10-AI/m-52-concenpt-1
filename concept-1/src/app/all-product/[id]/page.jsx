import { getId } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const product = await getId(id)

    return (
        <div>
            <div className="flex items-center justify-center p-6 my-10">
      <div className="max-w-6xl w-full bg-slate-800 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10">
        
        <div className="bg-linear-to-r from-green-600 to-blue-500 flex items-center justify-center p-8">
          <Image height={100} width={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={product.image}
            alt={product.title}
            className="w-full max-w-md rounded-2xl object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col justify-center space-y-6"> 
          <div>

            <h1 className="text-4xl font-bold bg-linear-to-r from-green-500 to-blue-500 text-transparent bg-clip-text w-fit mt-4">
              {product.title}
            </h1>

            <p className="text-gray-400 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-xl">
              ★★★★★
            </div>

            <span className="text-cyan-500 font-medium">
              {product.rating} Rating
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold bg-linear-to-r from-green-500 to-blue-500 text-transparent bg-clip-text w-fit">
              ${product.price}
            </h2>

            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-semibold">
              Stock: {product.stock}
            </span>
          </div>

          {/* Extra Info */}


          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-linear-to-r from-green-500 to-blue-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300">
              Add To Cart
            </button>

            <button className="border border-cyan-600 bg-linear-to-r from-green-500 to-blue-500 text-transparent bg-clip-text w-fit hover:bg-indigo-50 px-8 py-3 rounded-xl font-semibold transition duration-300">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default page;