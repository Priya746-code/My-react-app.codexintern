import React, { useState } from "react";

const Header = () => {
  // State to manage dropdown visibility
  const [showJobBootcamp, setShowJobBootcamp] = useState(false);
  const [showIITCertifications, setShowIITCertifications] = useState(false);

  // Toggle dropdown visibility
  const toggleJobBootcamp = () => setShowJobBootcamp(!showJobBootcamp);
  const toggleIITCertifications = () => setShowIITCertifications(!showIITCertifications);

  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://codingninjas.com/assets-landing/images/CNLOGO.svg"
            alt="Coding Ninjas Logo"
            className="h-6"
          />
          <span className="text-lg font-semibold text-gray-800">codingninjas</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden space-x-6 md:flex">
          {/* Job Bootcamp Dropdown */}
          <li className="relative">
            <button
              onClick={toggleJobBootcamp}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-orange-500"
            >
              <span>Job Bootcamp</span>
              <svg
                className={`w-4 h-4 transform ${showJobBootcamp ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showJobBootcamp && (
              <ul className="absolute w-48 px-4 py-2 mt-2 bg-white rounded-md shadow-lg">
                <li><a href="#" className="block text-gray-700 hover:text-orange-500">Full Stack Development</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-orange-500">Data Science Bootcamp</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-orange-500">Web Development</a></li>
              </ul>
            )}
          </li>

          {/* IIT Certifications Dropdown */}
          <li className="relative">
            <button
              onClick={toggleIITCertifications}
              className="flex items-center space-x-2 font-medium text-gray-700 hover:text-orange-500"
            >
              <span>IIT Certifications</span>
              <svg
                className={`w-4 h-4 transform ${showIITCertifications ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showIITCertifications && (
              <ul className="absolute w-48 px-4 py-2 mt-2 bg-white rounded-md shadow-lg">
                <li><a href="#" className="block text-gray-700 hover:text-orange-500">IIT Madras: Data Science</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-orange-500">IIT Delhi: Machine Learning</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-orange-500">IIT Bombay: Web Development</a></li>
              </ul>
            )}
          </li>
        </nav>

        {/* Login Button */}
        <button className="px-4 py-2 text-white bg-orange-500 rounded-md shadow hover:bg-orange-600">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
