// components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-lime-50"
        style={{
          width: '100%',
          height: '764px',
          top: '122px',
        }}
      >
        {/* Left Image */}
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            top: '100px',
            left: '10%',
            borderRadius: '8px',
          }}
        >
          <img
            src="/home-lamp1.jpg"
            alt="Left Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '500px',
            top: '161px',
            left: '70%',
            border: '1px solid #000',
          }}
        >
          <img
            src="/Home-chair.jpg"
            alt="Right Hero Section"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text & Button Section Positioned in the Gap Between Left and Right Images */}
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            width: '400px',
          }}
        >
          <h1 className="text-3xl font-bold text-black leading-tight mb-2">Welcome to Our Store</h1>
          <p className="text-lg leading-relaxed text-gray-600 mb-4">
            Explore the latest trends and find what you love at unbeatable prices.
          </p>
          <Link
            href="/shoplist"
            className="mt-2 px-6 py-3 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500"
          >
            Shop List
          </Link>
        </div>
      </div>

      {/* INTENTIONAL Vertical GAP between Hero Section & Featured Products */}
      <div style={{ height: '100px' }}></div>

      {/* Featured Products Section */}
      <div
        className="relative"
        style={{
          width: '100%',
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-black">Featured Products</h2>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          style={{ width: '90%', margin: '0 auto' }}
        >
          {/* Product 1 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/chair1.jpg"
              alt="Product 1"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 2 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/chair2.jpg"
              alt="Product 2"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 3 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/chair3.jpg"
              alt="Product 3"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 4 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/chair4.jpg"
              alt="Product 4"
              className="w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
