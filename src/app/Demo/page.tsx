import React from "react";
import Footer from "../compnent/Footer";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <h1 className="text-lg font-semibold">Hekto</h1>
          <div className="flex gap-6 items-center">
            <a href="mailto:info@hekto.com" className="text-sm">
              info@hekto.com
            </a>
            <span className="text-sm">+0123 456 789</span>
            <div className="flex gap-3 items-center">
              <button className="text-sm">English</button>
              <button className="text-sm">USD</button>
              <button className="text-sm">Login</button>
              <button className="text-sm">Wishlist</button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto py-8 px-4 md:px-8">
      <div className="bg-gray-200 py-20 px-4 md:px-16 mt-16">
        <h1 className="text-4xl font-bold text-gray-800 text-left">
          Hecto Demo
        </h1>
        <p className="text-gray-600 mt-2 text-left">
          <span className="text-blue-500">Home,Page</span> / Hecto Demo
        </p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Email or mobile phone number
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <h4 className="text-lg font-semibold mt-6 mb-4">Shipping Address</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              <div className="mb-4 mt-4">
                <label className="block text-gray-600 text-sm mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Postal Code</label>
                  <input
                    type="text"
                    placeholder="Enter postal code"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md mt-4">
                Continue to Shipping
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">Your Order</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Demo1.jpg"
                    alt="Product 1"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span>Ut diam consequat</span>
                  <span>Color : Brown</span>
                </div>
                <span className="font-semibold">$50.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Demo2.jpg"
                    alt="Product 2"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span>Ut diam consequat</span>
                  <span>Color : Brown</span>
                </div>
                <span className="font-semibold">$50.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Demo3.jpg"
                    alt="Product 3"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span>Ut diam consequat</span>
                  <span>Color : Brown</span>
                </div>
                <span className="font-semibold">$50.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Demo4.jpg"
                    alt="Product 4"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span>Ut diam consequat</span>
                  <span>Color : Brown</span>
                </div>
                <span className="font-semibold">$50.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="/images/Demo5.jpg"
                    alt="Product 3"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span>Ut diam consequat</span>
                  <span>Color : Brown</span>
                </div>
                <span className="font-semibold">$50.00</span>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="font-semibold">$250.00</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Total</span>
                <span className="font-semibold">$235.00</span>
              </div>
              <button className="bg-purple-600 text-white w-full mt-6 px-6 py-2 rounded-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
   <Footer/> 
   </div>
  );
};

export default CheckoutPage;
