import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlog = () => {
  return (
    <div className="bg-gray-50 py-12 px-8">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div className="relative w-full h-64">
            <Image
              src="/Blog1.jpg" // Replace with your image path
              alt="Blog 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="mr-2">✍️ Subash</span>
              <span>📅 15 August 2020</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Top Essential Trends in 2021
            </h3>
            <p className="text-gray-600 mb-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a href="#" className="text-pink-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div className="relative w-full h-64">
            <Image
              src="/Blog2.jpg" // Replace with your image path
              alt="Blog 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="mr-2">✍️ Subash</span>
              <span>📅 15 August 2020</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Top Essential Trends in 2021
            </h3>
            <p className="text-gray-600 mb-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a href="#" className="text-pink-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div className="relative w-full h-64">
            <Image
              src="/Blog3.jpg" // Replace with your image path
              alt="Blog 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="mr-2">✍️ Subash</span>
              <span>📅 15 August 2020</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Top Essential Trends in 2021
            </h3>
            <p className="text-gray-600 mb-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a href="#" className="text-pink-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
      <Link href="/Demo">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Demo</button>
          </Link>
    </div>
  );
};

export default LatestBlog;
