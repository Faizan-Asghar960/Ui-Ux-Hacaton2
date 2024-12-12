"use client";
import HeaderBar from "../compnent/Headbar";
import Navbar from "../compnent/navbar";
import Footer from "../compnent/Footer";
import Link from "next/link";
import React, { useState } from "react";

const ShoppingCart = () => {
  const [calculatorValue, setCalculatorValue] = useState("");

  const handleUpdateCart = () => {
    alert("Cart updated!");
  };

  const handleClearCart = () => {
    alert("Cart cleared!");
  };

  const handleCalculate = () => {
    alert(`Calculated value: ${calculatorValue}`);
  };

  return ( 
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <HeaderBar/>

      {/* Navbar Section */}
     
     <Navbar/>
      {/* Main Content Section */}
      <main className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="bg-white p-6 rounded shadow-md flex">
          {/* Cart Items Section */}
          <div className="w-2/3">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Quantity</th>
                  <th className="p-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Cart Rows */}
                <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    {/* Adjusted image width here from your original request */}
                    <img src="/images/Shoping1.jpg" alt="Product Image" className="w-16 h-16 rounded" />

                    <div>
                      <span>Ut diam consequat</span>
                      <p>Color: White/Black</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td className="p-3">$32.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      className="w-16 border rounded p-1 text-center"
                      value="1"
                    />
                  </td>
                  <td className="p-3">‎£219.00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    {/* Adjusted image width here from your original request */}
                    <img src="/images/Shoping2.jpg" alt="Product Image" className="w-16 h-16 rounded" />
                    <div>
                      <span>Vel faucibus posuere</span>
                      <p>Color: Black</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td className="p-3">$32.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      className="w-16 border rounded p-1 text-center"
                      value="1"
                    />
                  </td>
                  <td className="p-3">‎£219.00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    {/* Adjusted image width here from your original request */}
                    <img src="/images/Shoping3.jpg" alt="Product Image" className="w-16 h-16 rounded" />
                    <div>
                      <span>Ac vitae vestibulum</span>
                      <p>Color: REd</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td className="p-3">$32.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      className="w-16 border rounded p-1 text-center"
                      value="1"
                    />
                  </td>
                  <td className="p-3">‎£219.00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    {/* Adjusted image width here from your original request */}
                    <img src="/images/Shoping4.jpg" alt="Product Image" className="w-16 h-16 rounded" />
                    <div>
                      <span>Elit massa diam</span>
                      <p>Color: White</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td className="p-3">$32.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      className="w-16 border rounded p-1 text-center"  
                      value="1"
                    />
                  </td>
                  <td className="p-3">‎£219.00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    {/* Adjusted image width here from your original request */}
                    <img src="/images/Shoping5.jpg" alt="Product Image" className="w-16 h-16 rounded" />
                    <div>
                      <span>Proin pharetra elementum</span>
                      <p>Color: White/Brown</p>
                      <p>Size: XL</p>
                    </div>
                  </td>
                  <td className="p-3">$32.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      className="w-16 border rounded p-1 text-center"
                      value="1"
                    />
                  </td>
                  <td className="p-3">‎£219.00</td>
                </tr>
                {/* Add your rows dynamically or statically here */}
              </tbody>
            </table>
            <div className="flex mt-4 space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleUpdateCart}
              >
                Update Cart
              </button>
              
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>    
              <Link href="/Complete">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
         Order-Completed 
      </button>
    </Link>
            </div>
          </div>

          {/* Right Side Checkout Section */}
          <div className="w-1/3 bg-gray-100 p-4 rounded  shadow-md ml-4">
            <h2 className="font-bold text-lg mb-2">Cart Totals</h2>
            <p className="flex justify-between mb-2">
              <span>Subtotal:</span> <span>$32.00</span>
            </p>
            <p className="flex justify-between mb-4">
              <span>Total:</span> <span>$32.00</span>
            </p>
            <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter value"
                className="border rounded p-2 w-full mb-2"
                value={calculatorValue}
                onChange={(e) => setCalculatorValue(e.target.value)}
              />
              <button
                className="bg-yellow-300 text-white w-full py-2 rounded hover:bg-yellow-500"
                onClick={handleCalculate}
              >
                Calculate
              </button>
    
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default ShoppingCart;
