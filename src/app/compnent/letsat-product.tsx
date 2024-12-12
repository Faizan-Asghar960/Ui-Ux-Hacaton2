// components/LatestProducts.tsx

import React from 'react';

const LatestProducts = () => {
  const products = [
    { id: 1, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "chair-1.jpg" },
    { id: 2, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "chair-2.jpg", sale: true },
    { id: 3, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "chair1.jpg" },
    { id: 4, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "chair-4.jpg" },
    { id: 5, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "chair-5.jpg" },
    { id: 6, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00", image: "chair4.jpg" },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      {/* Heading Section */}
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-8">Latest Products</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-12 space-x-4">
        {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 border-b-2 border-yellow-400 text-yellow-500 hover:text-yellow-600"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-md shadow-md w-80 h-auto flex flex-col items-center">
            {/* Product Image */}
            <div className="relative w-64 h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>
            {/* Product Details */}
            <div className="p-4 text-center w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-yellow-500 font-bold">{product.price}</span>
                <span className="line-through text-gray-500">{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default LatestProducts;
