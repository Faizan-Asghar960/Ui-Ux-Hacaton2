'use client';

import React from "react";
import HeaderBar from "../compnent/Headbar";
import Footer from "../compnent/Footer";
import Navbar from "../compnent/navbar";

const ShopList = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
     <HeaderBar/>
     <Navbar/>
 
      {/* Shop List Heading Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Shop List</h2>
          <p className="text-gray-600">Choose your favorite items and shop now!</p>
        </div>
      </div>

      {/* Individual Shop Item Sections */}
      <section className="container mx-auto py-8 px-6">
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product1.jpg"
                alt="Product 1"
                className=" width-50  w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">Accumsan tincidunt</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>
              $52.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p> Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product2.jpg"
                alt="Product 2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">In nulla</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>
              $52.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p>Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product3.jpg"
                alt="Product 3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">Vel sem</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>$53.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product4.jpg"
                alt="Product 4"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">Porttitor cum</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>53.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>
            {/* Item 5 */}
            <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product5.jpg"
                alt="Product 4"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">Nunc in</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>53.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>
          {/* Item 6 */}
          <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product6.jpg"
                alt="Product 4"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">Vitae facilisis</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>53.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>
          {/* Item 7 */}
          <div className="border rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <img
                src="/images/Product7.jpg"
                alt="Product 4"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">Curabitur lectus</h4>
              <p className="text-gray-600 mt-1">$26.00<br></br>53.00</p>
              <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Magna in est adipiscing in phasellus non in justo.</p>
            </div>
          </div>
          {/* Add more manually defined items here */}
        </div>
      </section>
<a href="/ShopSidebar">
  <button className="bg-blue-500 text-white py-3 px-12 rounded-lg hover:bg-blue-700">
    Shop SideBar
  </button>
</a>
      {/* Footer Section */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default ShopList;
