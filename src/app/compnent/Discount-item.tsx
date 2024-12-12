// components/DiscountItem.tsx
import React from "react";
import Image from "next/image";

const DiscountItem = () => {
  return (
    <div className="bg-gray-50 py-12 px-8 flex flex-wrap items-center justify-between gap-8 max-w-screen-xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 max-w-md">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-pink-600 mb-2">
          Wood Chair . Plastic Chair . Sofa Collection
        </h3>
        <h2 className="text-4xl font-bold text-black mb-4">20% Discount Of All Products</h2>
        <p className="text-lg font-medium text-gray-700 mb-6">Eams Sofa Compact</p>

        {/* Description */}
        <ul className="space-y-2 mb-6 text-gray-600">
          <li>✔️ Available in various colors</li>
          <li>✔️ Clear lines and geometric figures</li>
          <li>✔️ Material exposes like metal</li>
        </ul>

        {/* Button */}
        <button className="bg-pink-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-pink-700 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute inset-0 rounded-full bg-pink-100"></div>
          <Image
            src="/discunt-item.jpg"
            alt="Discount Chair"
            width={300}
            height={300}
            className="relative z-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
