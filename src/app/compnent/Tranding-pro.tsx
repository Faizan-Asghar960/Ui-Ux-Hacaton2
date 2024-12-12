import React from 'react';
import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <div className="bg-gray-50 py-12" style={{ width: '1920px' }}>
      {/* Section Heading */}
      <h2 className="text-center text-3xl font-bold mb-8 text-black">Trending Products</h2>

      {/* Top Row: 4 Small Images */}
      <div className="grid grid-cols-4 gap-6 px-12 mb-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border rounded-md p-4 shadow-md flex flex-col items-center">
            <div className="w-full h-[350px] relative">
              <Image
                src={`/images/tr-chair${item}.jpg`}
                alt={`Product ${item}`}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 270px"
                placeholder="blur"
                blurDataURL={`/images/tr-chair${item}.jpg`}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">Cantilever Chair</h3>
            <p className="text-sm text-gray-600">$56.00</p>
          </div>
        ))}
      </div>

      {/* Second Row: 2 Large Images */}
      <div className="flex justify-between px-12 mb-8">
        <div className="flex flex-col w-2/3 space-y-4">
          {[5, 6].map((item) => (
            <div
              key={item}
              className="border rounded-md p-4 shadow-md flex flex-col items-center"
            >
              <div className="w-full h-[270px] relative">
                <Image
                  src={`/images/tr-chair1${item}.jpg`}
                  alt={`Product ${item}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 420px"
                  placeholder="blur"
                  blurDataURL={`/images/tr-chair1${item}.jpg`}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">23% Off in All Products</h3>
              <p className="text-sm text-gray-600">Shop Now</p>
            </div>
          ))}
        </div>

        {/* Right Side: 3 Small Vertical Images */}
        <div className="flex flex-col w-1/3 space-y-4">
          {[7, 8, 9].map((item) => (
            <div
              key={item}
              className="border rounded-md p-4 shadow-md flex flex-col items-center"
              style={{ height: '150px' }}
            >
              <div className="w-full h-[150px] relative">
                <Image
                  src={`/images/tr-chair${item}.jpg`}
                  alt={`Product ${item}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 267px"
                  placeholder="blur"
                  blurDataURL={`/images/tr-chair${item}.jpg`}
                />
              </div>
              <h3 className="text-md font-semibold mt-2">Executive Chair</h3>
              <p className="text-sm text-gray-600">$78.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
  