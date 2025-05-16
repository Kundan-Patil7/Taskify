import React from 'react';
import HERONOBG from '../assets/HERONOBG.png'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center  pt-20">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Things Done... <br />
            <span className="flowing-radial-text">The Panda Way!</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            The cutest, most effective way to organize your tasks. Panda-approved productivity for everyone!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-lg transition-all">
              How It Works
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src={HERONOBG} 
              alt="Happy Panda with todo list" 
              className="w-full h-auto animate-float"
            />
            <div className="absolute -z-10 inset-0 bg-purple-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;