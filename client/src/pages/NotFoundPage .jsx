import React from 'react';
import { Link } from 'react-router-dom';
import pandaSad from '../assets/404-nobg.png'; // or use your existing panda image

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-6 text-center">
      {/* Animated floating panda */}
      <div className="relative max-w-xs mb-8 animate-float">
        <img 
          src={pandaSad} 
          alt="Sad panda" 
          className="w-full h-auto"
        />
        <div className="absolute -z-10 inset-0 bg-purple-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      </div>

      {/* 404 Text with gradient effect */}
      <h1 className="text-8xl font-bold mb-4">
        <span className="flowing-radial-text">404</span>
      </h1>
      
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Oops! Bamboo not found
      </h2>
      
      <p className="text-lg text-gray-600 max-w-md mb-8">
        The page you're looking for has wandered off like a sleepy panda. 
        Maybe it's napping somewhere else?
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
        >
          Back to Home
        </Link>
        <Link 
          to="/todos" 
          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-lg transition-all"
        >
          See My Todos
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="mt-12 text-purple-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;