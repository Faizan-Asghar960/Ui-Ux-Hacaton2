// components/TopCategories.tsx
import React from "react";
import Image from "next/image";

const TopCategories = () => {
  const categories = [
    { id: 1, name: "Mini LCW Chair", price: "$56.00", image: "/top-chair1.jpg", button: true },
    { id: 2, name: "Mini LCW Chair", price: "$56.00", image: "/top-chair2.jpg", button: false },
    { id: 3, name: "Mini LCW Chair", price: "$56.00", image: "/top-chair3.jpg", button: false },
    { id: 4, name: "Mini LCW Chair", price: "$56.00", image: "/top-chair1.jpg", button: false },
  ];

  return (
    <div className="bg-gray-50 py-12 px-8 max-w-screen-xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-10">Top Categories</h2>

      {/* Categories Grid */}
      <div className="flex justify-center items-center space-x-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative text-center group ${
              category.button ? "shadow-lg" : ""
            }`}
          >
            {/* Image Container */}
            <div
              className={`relative w-[200px] h-[200px] rounded-full bg-gray-100 flex items-center justify-center ${
                category.button ? "ring-4 ring-purple-300" : ""
              }`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={150}
                height={150}
                className="object-cover"
              />
              {category.button && (
                <button className="absolute bottom-4 px-4 py-2 bg-green-500 text-white text-sm rounded-md shadow-md transition-transform transform group-hover:scale-105">
                  View Shop
                </button>
              )}
            </div>

            {/* Text Details */}
            <h3 className="text-lg font-medium text-gray-800 mt-4">{category.name}</h3>
            <p className="text-sm font-medium text-gray-500">{category.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot === 2 ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
