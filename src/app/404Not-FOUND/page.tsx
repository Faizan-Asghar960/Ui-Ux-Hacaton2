// app/not-found.tsx

import React from 'react';
import Link from 'next/link';
import HeaderBar from '../compnent/Headbar';
import Navbar from '../compnent/navbar';
import Footer from '../compnent/Footer';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderBar/>

      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
        <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">404 Not Found</h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Home / Pages / 404 Not Found</span>
    </p>
  </div>
</div>
        <div className="mt-8">
          <img
            src="/images/404.jpg"
            alt="404 Illustration"
            className="w-96 h-auto"
          />
        </div>
        <p className="text-gray-600 mt-4 text-center">
          Oops! The page you requested was not found!
        </p>
        <Link href="/FAQ">
        <button className="mt-6 bg-pink-500 text-white py-2 px-6 rounded-md">
          Go to FAQ
        </button>
            </Link>
      
      {/* Footer */}
      <footer className="w-full mt-10 py-4">
       <Footer/>
      </footer>
    </div>
  );
};

export default NotFoundPage;
