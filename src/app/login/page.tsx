// app/login/page.tsx
import React from 'react';
import Navbar from '../compnent/navbar';


const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <div className="w-full bg-[#7E33E0] py-3">
        <div className="container mx-auto flex items-center justify-between text-white">
          <span className="text-sm">alokmano@gmail.com | +1 123456789</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm">English</a>
            <a href="#" className="text-sm">USD</a>
            <a href="#" className="text-sm">Login</a>
            <a href="#" className="text-sm">Wishlist</a>
          </div>
        </div>
      </div>
      {/* Navbar */}

      {/* Breadcrumb */}
      <div className="w-full bg-white py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800">My Account</h2>
          <p className="text-sm text-gray-500">Home / Pages / My Account</p>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-medium text-gray-800 text-center">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please login using your account details below.
        </p>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              className="w-full px-4 py-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7E33E0]"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <input
              type="password"
              className="w-full px-4 py-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7E33E0]"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-[#7E33E0] hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#FB2E86] text-white font-medium rounded-md hover:bg-[#e12d76] focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-[#7E33E0] hover:underline">
            Create account
        </a>
        </p>
      </div>

  
    </div>
  );
};

export default LoginPage;
