"use client";

import React from "react";
import HeaderBar from "@/app/compnent/Headbar";
import Footer from "@/app/compnent/Footer";
import ClientImage from "@/app/shop/grid/ClientImage";


const ShopGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
<HeaderBar/>
      {/* Shop Grid Default Section */}
      <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">Shop Grid Default</h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Explore the latest trends in accessories & fashion</span> 
    </p>
  </div>
</div>

      {/* Product Grid Section */}
      <main className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="border rounded-md shadow-md bg-white p-4 flex flex-col items-center transition-shadow hover:shadow-lg"
            >
              {/* Product Image */}
              <ClientImage
                src={`/images/product-${index + 1}.jpg`}
                alt={`Product ${index + 1}`}
              />
              {/* Product Title */}
              <h4 className="text-lg font-semibold text-gray-800 mt-4">Product {index + 1}</h4>
              {/* Product Price */}
              <p className="text-gray-600 mt-2">$99.00</p>
            </div>
          ))}
        </div>
      </main>
 
      {/* Footer Section */}
      <footer >
       
      </footer><Footer/>
    </div>
  );
};

export default ShopGrid;
