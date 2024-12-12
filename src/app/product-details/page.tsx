'use client';

import React from "react";
import { FaHome } from "react-icons/fa";
import HeaderBar from "../compnent/Headbar";
import Navbar from "../compnent/navbar";
import Footer from "../compnent/Footer";

const ProductDetails = () => {
  return (
    <div className="bg-with min-h-screen">
      {/* Header Section */}
      
    <HeaderBar/>
      {/* Main Heading Section */}
      <div className="relative pt-12 px-6">
        <div className="absolute top-8 left-8">
          <h1 className="text-4xl font-bold text-gray-800">Product Details</h1>
          <div className="text-sm text-gray-600 mt-2">
            <FaHome className="inline-block mr-2" /> Home | Page | Product Details
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Main Product Card Section */}
      <div className="container mx-auto py-12 px-6">
        <div className="bg-white shadow-lg rounded-lg flex p-4">
          {/* Left side small images */}
          <div className="flex flex-col justify-between w-1/4">
            {[1, 2, 3].map((item, index) => (
              <img
                key={index}
                src={`/images/picP${item}.jpg`}
                alt={`Product ${item}`}
                className="w-full object-cover rounded-md"
                style={{ height: "32.33%" }} // Each image takes 1/3 of the large image height
              />
            ))}
          </div>

          {/* Main Large Image Section */}
          <div className="w-2/4 ml-4">
            <img
              src="/images/picP4.jpg"
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right side details */}
          <div className="w-1/2 ml-4 flex flex-col justify-between">
            <h3 className="text-6xl italic font-bold text-gray-800 mb-2">Playwood arm chair</h3>
            <p>Size: (22)</p>
            <p className="text-lg font-semibold text-gray-600 mb-2"> Price : ( $32.00 )</p>
            <p>Color (Black)</p>
            <p className="text-gray-600 leading-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris tellus porttitor purus, et volutpat sit.Lorem ipsum dolor sit amet,
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container bg-gray-200 mx-auto py-12 px-6">
        <div className="text-center mb-6">
          <div className="flex justify-around space-x-4">
          
            {["Description", "Additional Info", "Reviews", "Video"].map((item, index) => (
              <div key={index} className="text-gray-700 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
        
        {/* Paragraph 1 */}
        <h3 className="text-gray-800  font-bold text-lg mt-4 mb-2">Varius tempor.</h3>
        <p className="text-gray-600 leading-relaxed text-sm mb-4">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes,
          mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed 
          urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, 
          quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . 
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes,
          mauris varius ac est bibendum.
        </p>
        
        {/* Paragraph 2 with Tick Marks */}
        <h3 className="text-gray-800 font-bold text-lg mt-4 mb-2">Varius tempor.</h3>
        <ul className="space-y-2 text-gray-600 text-sm mb-4">
          {[
            "Aliquam dis vulputate vulputate integer sagittis.",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Velit consectetur neque, elit, aliquet.",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
            "Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.",
            "Dui, massa viverr aliquam dis vulputate vulputate integer sagittis.",
          ].map((line, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-500 mr-2">✔️</span> {line}
            </li>
          ))}
        </ul>
      </div>

      {/* New Section: 4 Pictures with Details */}
       {
  
    <div className="container mx-auto py-12 px-6">
        <h3 className="text-6xl italic font-bold text-gray-800 mb-2">Related Products</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        
        
        {/* Card 1 */}
        <div className="bg-white shadow-lg pt-20 px-6 rounded-lg p-4">
          <img
            src="/images/picP-1.jpg"
            alt="Product 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Mens Fashion Wear</h3>
          <p className="text-gray-800 font-semibold mt-2">$50.00</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white pt-20 px-6 shadow-lg rounded-lg p-4">
          <img
            src="/images/picP-2.jpg"
            alt="Product 2"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Women’s Fashion</h3>
          <p className="text-gray-800 font-semibold mt-2">$67.00</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white pt-20 px-6 shadow-lg rounded-lg p-4">
          <img
            src="/images/picP-3.jpg"
            alt="Product 3"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Wolx Dummy Fashion</h3>
          <p className="text-gray-800 font-semibold mt-2">$67.00</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white pt-20 px-16 shadow-lg rounded-lg p-4">
          <img
            src="/images/picP-4.jpg"
            alt="Product 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Top Wall Digital Clock</h3>
          <p className="text-gray-800 font-semibold mt-2">$51.00</p>
        </div>

      </div>
    </div>
};



      {/* Footer Section */}
      <Navbar/>
      <Footer />
    </div>
  );
};

export default ProductDetails;
