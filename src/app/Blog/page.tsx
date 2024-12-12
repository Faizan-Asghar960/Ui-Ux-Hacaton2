import React from "react";
import Image from "next/image";
import HeaderBar from "../compnent/Headbar";
import Footer from "../compnent/Footer";
import Navbar from "../compnent/navbar";

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
       
        <HeaderBar/>
       
      
      <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">Blog Page</h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Home,Page</span> / Blog
    </p>
  </div>
</div>

      {/* Main Blog Section */}
      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="md:col-span-2">
          {[1, 2, 3].map((post) => (
            <article
              key={post}
              className="bg-white rounded-lg shadow-md mb-8 overflow-hidden"
            >
              <Image
                src={`/images/BlogPost${post}.jpg`}
                alt={`Blog post ${post}`}
                width={700}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Blog Title {post}
                </h2>
                <p className="text-sm font-bold text-gray-600 mb-4">
                Mauris at orci non vulputate diam tincidunt nec.
                </p>
                <p className="text-gray-500  text-sm">
                  <span>Surf Auxion</span> | <span>Aug 09 2020</span> | 
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Velit facilisis quis auctor pretium ipsum, eu rutrum. 
                    Condimentum eu malesuada vitae ultrices in in neque, 
                    porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                    </p>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline">Hobbies (14)</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Women (21)</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Women (21)</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Women (21)</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
            {[1, 2, 3, 4].map((post) => (
              <div key={post} className="flex items-center space-x-4 mb-4">
                <Image
                  src={`/images/RecentPost${post}.jpg`}
                  alt={`Recent post ${post}`}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-700 text-sm">It is a long established fact {post}</p>
                <p className="text-gray-700 ">Aug 09 2020 {post}</p>
              </div>
            ))}
          </div>

          {/* Featured Products */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Sale Products</h3>
            {[1, 2, 3].map((product) => (
              <div key={product} className="flex items-center space-x-4 mb-4">
                <Image
                  src={`/images/SaleProduct${product}.jpg`}
                  alt={`Product ${product}`}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-700 text-sm">Elit ornare in enim mauris. {product}</p>
                <p className="text-gray-700 text-sm">Aug 09 2020 {product}</p>
              </div>
            ))}
          </div>
            {/*Offer product */}
            <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Offer Product</h3>
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="flex items-center space-x-4 mb-4">
                <Image
                  src={`/images/OfferPro${product}.jpg`}
                  alt={`Product ${product}`}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
                <p className="text-gray-700 text-sm">Elit ornare in enim mauris. {product}</p>
                <p className="text-gray-700 text-sm">Aug 09 2020 {product}</p>
              </div>
            ))}
          </div>
          {/* Social Links */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500">Facebook</a>
              <a href="#" className="text-blue-500">Twitter</a>
              <a href="#" className="text-blue-500">Instagram</a>
  
            </div>
          </div>
  <a href="/singleBlog" className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 transition-all">SingleBlog</a>
        </aside>
      </main>

      {/* Footer */}
      <footer >
        <Navbar/>
        <Footer/>
      </footer>
    </div>
  );
};

export default BlogPage;
