import React from "react";
import Navbar from "../compnent/navbar";
import Footer from "../compnent/Footer";
import HeaderBar from "../compnent/Headbar";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <HeaderBar/>
      <Navbar />

      {/* Main Heading Section */}
      <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">About</h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Home</span> / About
    </p>
  </div>
</div>

      {/* About Card Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 my-12">
        <img
          src="/images/About.jpg"
          alt="About"
          className="w-full md:w-1/2 h-64 object-cover rounded-md"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-purple-700">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
            quis bibendum quam.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md mt-6 hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="/images/feature1.jpg"
              alt="Feature 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Free Delivery</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
              gravida.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="/images/feature2.jpg"
              alt="Feature 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">100% Cash Back</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
              gravida.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="/images/feature3.jpg"
              alt="Feature 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Quality Product</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
              gravida.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="/images/feature4.jpg"
              alt="Feature 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
              gravida.
            </p>
          </div>
        </div>
      </div>

      {/* Our Clients Say Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Clients Say!
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mt-8 max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3].map((client) => (
              <div key={client} className="text-center">
                <img
                  src={`/images/client${client}.jpg`}
                  alt={`Client ${client}`}
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
                <h3 className="text-sm font-bold text-gray-800 mt-2">
                  Client {client}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-gray-600 mt-4">
            <h3 className="text-3xl italic hover:not-italic font-bold text-center text-gray-800">
              Selena Gomez
            </h3>
            <p className="font-bold text-1xl">CEO at Webecy Digital</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent. Nam vitae a enim nunc, sed sapien egestas ac
            nam.
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
