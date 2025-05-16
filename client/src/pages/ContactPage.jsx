import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import developerImage from '../assets/sleep.jpeg'; // Replace with your image

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-800">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">Kundan Patil</h2>
              <p className="text-gray-600">Full Stack Developer</p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nashik, Maharashtra, India
                </p>
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  kpatil.pale@gmail.com
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/kundan-patil88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/Kundan-Patil7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="mailto:kpatil.pale@gmail.com"
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={developerImage}
                alt="Kundan Patil"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -z-10 inset-0 bg-purple-200 rounded-xl blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;