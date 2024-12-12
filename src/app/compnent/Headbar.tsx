"use client";

import Link from 'next/link';
// components/HeaderBar.tsx
import React, { useState } from 'react';

const HeaderBar = () => {
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="w-full h-[40px] bg-purple-700 flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0">
      
      {/* Left Side - Number & Email */}
      <div className="flex items-center space-x-4">
        <span className="text-white text-sm sm:text-base">+1-800-123-4567</span>
        <span className="text-white text-sm sm:text-base">contact@website.com</span>
      </div>

      {/* Center Section - Language, Currency, Wishlist, Login, and Cart */}
      <div className="flex flex-wrap items-center justify-center md:space-x-4 space-x-0 text-sm sm:text-base space-y-2 md:space-y-0">
        {/* Language Dropdown */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white text-black px-2 py-1 rounded-md"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>

        {/* Currency Dropdown */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-white text-black px-2 py-1 rounded-md"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>

        {/* Wishlist Button */}
        <button className="text-Black hover:text-red-400">❤️ Wishlist</button>

        {/* Login Button */}
        <div>
          <Link href="/login">
            <button className="text-Black hover:text-yellow-400">Login</button>
          </Link>
        </div>

        {/* Add to Cart Button */}
        <div>
          <Link href="/Shoping-Cart">
            <button className="text-Black hover:text-yellow-400">🛒 Add to Cart</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default HeaderBar;
