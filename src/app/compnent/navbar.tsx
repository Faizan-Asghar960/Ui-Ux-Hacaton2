'use client'; // Required for app directory to use client-side interactivity

import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa'; // For Search Icon

const Navbar = () => {
  return (
    <nav className="absolute border-2 border-red-500 bg-white w-full max-w-[1177px] h-10 top-16 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 md:px-8">
      {/* Entire Navbar Container */}
      <div className="flex items-center justify-between h-full">
        {/* Left Side - Logo Placeholder */}
        <div className="flex items-center">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 text-xl flex items-center justify-center text-black font-bold text-sm">
            Hekto
          </div>
        </div>

        {/* Right Side - Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <button className="text-sm hover:text-yellow-400">Home</button>
          </Link>
          <Link href="/About">
            <button className="text-sm hover:text-yellow-400">About</button>
          </Link>
          <Link href="/product-details">
            <button className="text-sm hover:text-yellow-400">Product</button>
          </Link>
          <Link href="/Blog">
            <button className="text-sm hover:text-yellow-400">Blog</button>
          </Link>
          {/* Fixed Shop link */}
          <Link href="/shop/grid">
            <button className="text-sm hover:text-yellow-400">Shop</button>
          </Link>
          {/* Fixed ShopList path */}
          <Link href="/ShopList">
           <button className="text-sm hover:text-yellow-400">ShopList</button>
          </Link>
          <Link href="/Contact">
            <button className="text-sm hover:text-yellow-400">Contact</button>
          </Link>

          {/* Search Icon */}
          <div className="cursor-pointer text-black hover:text-yellow-400">
            <FaSearch size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
