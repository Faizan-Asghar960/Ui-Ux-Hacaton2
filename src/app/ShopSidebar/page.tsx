'use client';

import React from "react";
import HeaderBar from "../compnent/Headbar";
import Navbar from "../compnent/navbar";
import Footer from "../compnent/Footer";



const ShopList1 = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <HeaderBar/>
      <Navbar/>

      {/* Shop List Heading Section */}
      <div className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-20 px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-left">Shop Left Sidebar </h1>
          <p className="text-gray-600 mt-2 text-left">
            <span className="text-blue-500">Home,Page</span> / Shop Left Sidebar
          </p>
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
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-100 p-4">
          {/* Product Brand Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Product Brand</h3>
            <ul>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="brand1" className="h-4 w-4" checked />
                <label htmlFor="brand1">Brand 1</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="brand2" className="h-4 w-4" checked />
                <label htmlFor="brand2">Brand 2</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="brand3" className="h-4 w-4" checked />
                <label htmlFor="brand3">Brand 3</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="brand4" className="h-4 w-4" checked />
                <label htmlFor="brand4">Brand 4</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="brand5" className="h-4 w-4" checked />
                <label htmlFor="brand5">Brand 5</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="brand6" className="h-4 w-4" checked />
                <label htmlFor="brand6">Brand 6</label>
              </li>
            </ul>
          </div>

          {/* Discount Offer Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Discount Offer</h3>
            <ul>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="discount1" className="h-4 w-4" checked />
                <label htmlFor="discount1">Offer 1</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="discount2" className="h-4 w-4" checked />
                <label htmlFor="discount2">Offer 2</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="discount3" className="h-4 w-4" checked />
                <label htmlFor="discount3">Offer 3</label>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Categories</h3>
            <ul>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category1" className="h-4 w-4" checked />
                <label htmlFor="category1">Category 1</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category2" className="h-4 w-4" checked />
                <label htmlFor="category2">Category 2</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category3" className="h-4 w-4" checked />
                <label htmlFor="category3">Category 3</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category4" className="h-4 w-4" checked />
                <label htmlFor="category4">Category 4</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category5" className="h-4 w-4" checked />
                <label htmlFor="category5">Category 5</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category6" className="h-4 w-4" checked />
                <label htmlFor="category6">Category 6</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category7" className="h-4 w-4" checked />
                <label htmlFor="category7">Category 7</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="category8" className="h-4 w-4" checked />
                <label htmlFor="category8">Category 8</label>
              </li>
            </ul>
          </div>

          {/* Filter by Size Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Filter by Size</h3>
            <ul>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="size1" className="h-4 w-4" checked />
                <label htmlFor="size1">Small</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="size2" className="h-4 w-4" checked />
                <label htmlFor="size2">Medium</label>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" id="size3" className="h-4 w-4" checked />
                <label htmlFor="size3">Large</label>
              </li>
            </ul>
          </div>

          {/* Filter by Color Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Filter by Color</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Shop Items Section */}
        <section className="container mx-auto py-8 px-6 flex-grow">
          <div className="space-y-6">
            {/* Items code remains the same */}
            {/* Add your individual shop items here */}
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};



export default ShopList1;
