import React from 'react';
import HeaderBar from '../compnent/Headbar';
import Navbar from '../compnent/navbar';
import Footer from '../compnent/Footer';

const FAQPage = () => {
  return (
    <div className="bg-[#F6F5FF] min-h-screen font-sans">
      {/* Header Section */}
<HeaderBar/>
      {/* Navbar */}
   <Navbar/>
      {/* FAQ Section */}
      <main className="container mx-auto px-4 py-10">
      <div className="py-20 bg-gray-200">
  <div className="max-w-7xl mx-20 px-4">
    <h1 className="text-4xl font-bold text-gray-800 text-left">FAQ</h1>
    <p className="text-gray-600 mt-2 text-left">
      <span className="text-blue-500">Home / Pages / FAQ</span>
    </p>
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Information */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">General Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Ex dolorem curat ut quid euismod condimentum?
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trudant ut tristique nulla metus, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Magna bibendum sit fermentum eros.
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trudant ut tristique nulla metus, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Ode muskana hok eros consectetur iaculis?
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trudant ut tristique nulla metus, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Ibi id blandit sceleros toi vuis que mora?
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trudant ut tristique nulla metus, consequat gravida sagittis.
                </p>
              </div>
            </div>
          </section>

          {/* Ask a Question Form */}
          <section className="bg-white shadow-lg p-6 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Ask a Question</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Type Your Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#7E33E0] text-white py-2 rounded-md text-sm font-semibold"
              >
                Send Mail
              </button>
            </form>
          </section>
        </div>

        {/* Footer Logos */}
       <Footer/>
      </main>
    </div>
  );
};

export default FAQPage;
