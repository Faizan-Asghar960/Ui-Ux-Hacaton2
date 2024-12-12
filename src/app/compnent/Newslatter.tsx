// components/NewsletterSection.tsx
import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-8 relative">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <img
          src="/Banner.jpg"
          alt="Newsletter Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content: Text & Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6">
          <h2 className="text-3xl text-purple-700 md:text-4xl font-bold">
            Get Latest Update By Subscribe Our Newsletter
          </h2>
          <button className="px-6 py-3 bg-pink-500 text-white text-lg rounded-md shadow-md hover:bg-pink-600 transition-transform transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Brands/Logos Section */}
      <div className="relative max-w-screen-xl mx-auto mt-8 flex justify-center space-x-8">
        <img
          src="/banner1.jpg"
          alt="Brand 1"
          className="w-20 h-auto object-contain"
        />
        <img
          src="/banner2.jpg"
          alt="Brand 2"
          className="w-20 h-auto object-contain"
        />
        <img
          src="/banner3.jpg"
          alt="Brand 3"
          className="w-20 h-auto object-contain"
        />
        <img
          src="/banner4.jpg"
          alt="Brand 4"
          className="w-20 h-auto object-contain"
        />
        <img
          src="/banner5.jpg"
          alt="Brand 5"
          className="w-20 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default NewsletterSection;
