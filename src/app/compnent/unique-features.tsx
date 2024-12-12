// components/ProductHighlightSection.tsx
import React from 'react';

const ProductHighlightSection = () => {
  return (
    <>
      {/* Product Highlight Section */}
      <div
        className="relative"
        style={{
          padding: '40px 20px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Content Area - Image & Text */}
        <div
          className="flex items-center gap-6"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Left Side - Product Image */}
          <div
            className="w-48 h-48"
            style={{
              backgroundImage: `url('showcase-chair.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          ></div>

          {/* Right Side - Text & Button */}
          <div className="text-center flex flex-col items-center">
            <h3 className="text-4xl font-semibold mb-2 text-blue-500">Unique features of leatest &<br></br>Trending Products</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-center">
            All frames constructed with hardwood solids and laminates<p/>



           <p>  Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>

                <p>Arms, backs and seats are structurally reinforced
            </p> </p>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mb-2"
            >
              Add to Cart
            </button><p className="text-gray-700 font-semibold">B & B latian Sofa<br></br> $32.00</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHighlightSection;
