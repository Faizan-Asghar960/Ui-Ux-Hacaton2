// components/ShopexOffers.tsx
import React from 'react';

const ShopexOffers = () => {
  return (
    <>
      {/* Shopex Offers Section */}
      <div
        className="relative"
        style={{
          padding: '40px 20px',
          backgroundColor: '#f0f4f8',
          width: '100%',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-black">
          What Shopex Offers!
        </h2>

        {/* Offers Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ width: '90%', margin: '0 auto' }}
        >
          {/* Offer 1 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="offer1.jpg"
                alt="Offer 1"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, </p>
                <p >consectetur adipiscing elit.</p>
               <p>  Massa purus gravida.</p>
            
          </div>

          {/* Offer 2 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="offer2.jpg"
                alt="Offer 2"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, </p>
                <p >consectetur adipiscing elit.</p>
               <p>  Massa purus gravida.</p>
          </div>

          {/* Offer 3 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="offer3 .jpg"
                alt="Offer 3"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, </p>
                <p >consectetur adipiscing elit.</p>
               <p>  Massa purus gravida.</p>
          
          </div>

          {/* Offer 4 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="offer4.jpg"
                alt="Offer 4"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, </p>
                <p >consectetur adipiscing elit.</p>
               <p>  Massa purus gravida.</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopexOffers;
