import React from "react";
import Link from "next/link";
import HeaderBar from "../compnent/Headbar";
import Navbar from "../compnent/navbar";
import Footer from "../compnent/Footer";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <HeaderBar/>
      <Navbar />

      {/* Main Heading Section */}
      <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">Contact Us</h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Home</span> / Contact Us
    </p>
  </div>
</div>


     {/* Contact Way Section */}
<div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Left Side - Information About Us */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800">Information About Us</h2>
    <p className="text-gray-600 mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Mattis neque ultrices mattis aliquam, malesuada diam est.
      Malesuada sem tristique amet erat vitae eget dolor lobortis.
       Accumsan faucibus vitae lobortis quis bibendum quam.  
       Accumsan faucibus vitae lobortis quis bibendum quam.  </p>
  </div>

  {/* Right Side - Contact Way */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800">Contact Way</h2>
    <div className="grid grid-cols-2 gap-6 mt-4">
      {/* Contact Details */}
      {["Phone: +123 456 789", "Email: info@example.com", "Address: 123 Main St, City", "Support: support@example.com"].map((text, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 rounded-full ${index % 2 === 0 ? "bg-blue-500" : "bg-pink-500"} flex justify-center items-center text-white`}>
            {index + 1}
          </div>
          <p className="ml-4 text-gray-600">{text}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Get In Touch Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Get In Touch */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded-md w-full" />
              <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 rounded-md w-full" />
            </div>
            <input type="text" placeholder="Subject" className="border border-gray-300 p-3 rounded-md w-full" />
            <textarea placeholder="Description" className="border border-gray-300 p-3 rounded-md w-full h-28"></textarea>
            <Link href="/404Not-FOUND">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Send Mail</button>
           </Link> 
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img src="/images/contact.jpg" alt="Contact" className="w-full h-64 object-cover rounded-md" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
