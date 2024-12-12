import React from 'react';
import Link from 'next/link';
import Navbar from '../compnent/navbar';
import Footer from '../compnent/Footer';

const OrderCompleted = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-purple-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">Hekto</h1>
      
          <div className="flex space-x-4">
            <p>support@example.com</p>
            <p>0123456789</p>
          </div>
        </div><Navbar/>
      </header>

      {/* Order Completed Section */}
      <div className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-20 px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-left">Order-Complete </h1>
          <p className="text-gray-600 mt-2 text-left">
            <span className="text-blue-500">Home,Page</span> / Order-Complete
          </p>
        </div>
      </div>

      <div className="container mx-auto flex-grow flex flex-col items-center py-16 px-6">
        <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-lg w-full">
          <div className="text-pink-500 text-4xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-gray-800">Your Order Is Completed!</h3>
          <p className="text-gray-600 mt-4">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </p>
          <button className="mt-6 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-700">
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-center space-x-6">
          <img src="/images/brand1.png" alt="Brand 1" className="h-10" />
          <img src="/images/brand2.png" alt="Brand 2" className="h-10" />
          <img src="/images/brand3.png" alt="Brand 3" className="h-10" />
          <img src="/images/brand4.png" alt="Brand 4" className="h-10" />
          <img src="/images/brand5.png" alt="Brand 5" className="h-10" />
        </div>
        
        <Footer/>
      </footer>
    </div>
  );
};

export default OrderCompleted;
