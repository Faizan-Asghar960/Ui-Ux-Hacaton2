import React from 'react';
import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12 max-w-screen-xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-center text-3xl font-bold mb-12 text-black">Trending Products</h2>

      {/* Top Row: 4 Small Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white">
            <div className="w-full h-64 relative">
              <Image
                src={`/tr-chair${item}.jpg`}
                alt={`Product ${item}`}
                fill
                className="object-contain rounded-md"
                sizes="(max-width: 768px) 100vw, 270px"
                placeholder="blur"
                blurDataURL={`/tr-chair${item}.jpg`}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">Cantilever Chair</h3>
            <p className="text-sm text-gray-600">$56.00</p>
          </div>
        ))}
      </div>

      {/* Second Row: 2 Large Images */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 flex flex-col space-y-4">
          {[5, 6].map((item, index) => (
            <div
              key={item}
              className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={`/tr-chair${item}.jpg`}
                  alt={`Product ${item}`}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 100vw, 420px"
                  placeholder="blur"
                  blurDataURL={`/tr-chair${item}.jpg`}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">23% Off in All Products</h3>
              <p className={`text-sm ${index === 0 ? 'text-red-600' : 'text-blue-600'} cursor-pointer`}>
                {index === 0 ? 'Shop Now' : 'View Collection'}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: 3 Small Vertical Images */}
        <div className="flex flex-col space-y-4">
          {[7, 8, 9].map((item) => (
            <div
              key={item}
              className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white"
            >
              <div className="w-full h-36 relative">
                <Image
                  src={`/tr-chair${item}.jpg`}
                  alt={`Product ${item}`}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 100vw, 267px"
                  placeholder="blur"
                  blurDataURL={`/tr-chair${item}.jpg`}
                />
              </div>
              <h3 className="text-md font-semibold mt-2">Executive Seat Chair</h3>
              <p className="text-sm text-gray-600">$78.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
