// pages/blog.tsx
import React from 'react';
import Image from 'next/image';
import HeaderBar from '../compnent/Headbar';
import Navbar from '../compnent/navbar';
import Footer from '../compnent/Footer';


const SingleBlog = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
     <HeaderBar/>
      <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">Single Blog </h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Home,Page</span> / Single Blog
    </p>
  </div>
</div>
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Content */}
          <article className="lg:w-2/3">
          <img
                src="/images/singleBlog.jpg"
                alt="Blog post"
                width={700}
                height={400}
                className="w-full object-cover"
              />
              <span>Surf Auxion | Aug 09 2020</span>
            <h2 className="text-3xl font-bold mb-4">Mauris at orci non vulputate diam tincidunt nec.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus. Sed
              porttitor lectus nibh. Pellentesque in ipsum id orci porta
              dapibus.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus.
                Velit in arcu platea donec vitae ante posuere malesuada.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus.
                  Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Velit dapibus est, nunc, </p>

                   <p className="text-gray-700 leading-relaxed mb-6">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.</p>
                   <p className="text-gray-700 leading-relaxed mb-6">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.</p>
                   <p className="text-gray-700 leading-relaxed mb-6">toamk risusu”</p>

            {/* Related Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <img
                src="/images/Singleb1.jpg"
                alt="Singleb1 "
                className="w-full rounded-lg"
                
              />
              <img
                src="/images/sigleBlogP2.jpg"
                alt="Related 2"
                className="w-full rounded-lg"
              />
              
            </div>
            <br></br>
            <br></br>
            <p className="text-gray-700 leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Velit dapibus est, nunc, montes, lacus consequat integer viverra.
                Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Velit dapibus est, nunc, montes, lacus consequat integer viverra. 
                 Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

                  <br></br>
                  
            {/* Product Section */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src="/images/sigleBlogP21.jpg"
                    alt="Product 1"
                    className="w-full h-32 object-cover mb-2 rounded-lg"
                  />
                  <h4 className="font-semibold">Quam sed</h4>
                  <p className="text-purple-600 font-bold">$25.00</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src="/images/sigleBlogP22.jpg"
                    alt="Product 2"
                    className="w-full h-32 object-cover mb-2 rounded-lg"
                  />
                  <h4 className="font-semibold">Tristique sed</h4>
                  <p className="text-purple-600 font-bold">$30.00</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src="/images/sigleBlogP23.jpg"
                    alt="Product 3"
                    className="w-full h-32 object-cover mb-2 rounded-lg"
                  />
                  <h4 className="font-semibold">A etiam</h4>
                  <p className="text-purple-600 font-bold">$20.00</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src="/images/sigleBlogP24.jpg"
                    alt="Product 4"
                    className="w-full h-32 object-cover mb-2 rounded-lg"
                  />
                  <h4 className="font-semibold">Mi nisi</h4>
                  <p className="text-purple-600 font-bold">$15.00</p>
                </div>
              </div>
            </div>
            <br></br>
            <p className="text-gray-700 leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Velit dapibus est, nunc, montes, lacus consequat integer viverra.
                Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus.
                 Velit in arcu platea donec vitae ante posuere malesuada.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-2">Search</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-lg"
              />
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
            </div>
          </aside>
        </div>    

                  {/*last iamge */}       
                  <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4"></td> 
          <img src="/images/singlebF1.jpg" alt="Product Image" className="w-16 h-16 rounded" />

                    <div>
                      <span className='text-blue-700'>Sapien ac</span>
                      <p>Jan 09 2020</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                    </tr>
         <tr className="border-b">
                  <td className="p-3 flex items-center space-x-4"></td> 
          <img src="/images/singlebF2.jpg" alt="Product Image" className="w-16 h-16 rounded" />

                    <div>
                      <span className='text-blue-700'>Augue conva</span>
                      <p>Aug 18 2020</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                    </tr>       
        {/* Comments Section */}
        <section className="mt-12">
          <h3 className="text-xl font-bold mb-4">Comments</h3>
          <div className="space-y-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-700">
                <span className="font-bold">John Doe:</span> Great article!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-700">
                <span className="font-bold">Jane Smith:</span> Very insightful.
              </p>
            </div>
          </div>

          {/* Add Comment Form */}
          <form className="mt-6 space-y-4">
            <textarea
              placeholder="Add a comment..."
              className="w-full px-4 py-2 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer >
        <Navbar/>
        <Footer/>
      </footer>
    </div>
  );
};

export default SingleBlog;