// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from './compnent/navbar';
import HeaderBar from './compnent/Headbar';
import HeroSection from './compnent/Herosection';
import LatestProducts from '../app/compnent/letsat-product';
import ShopexOffers from './compnent/ShopexOffers';
import ProductHighlightSection from './compnent/unique-features';
import Footer from './compnent/Footer';
import TrendingProducts from './compnent/Tranding-pro';
import DiscountItem from './compnent/Discount-item';
import TopCategories from './compnent/Top-categaery';
import NewsletterSection from './compnent/Newslatter';
import LatestBlog from './compnent/blog';
import dynamic from 'next/dynamic';

const FaSearch = dynamic(() => import('react-icons/fa').then((mod) => mod.FaSearch), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <HeaderBar />
      <Navbar/>
      <HeroSection/>
      <LatestProducts/>
      <ShopexOffers/>
      <ProductHighlightSection/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <NewsletterSection/>
      <LatestBlog/>
      <Footer/>
      
      <div className="p-8">
        <h1 className="text-2xl font-bold"></h1>
      </div>
      
    </div>
  );
};

export default HomePage;
