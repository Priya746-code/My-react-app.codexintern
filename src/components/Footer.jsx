import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Coding Ninjas</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms</a></li>
          </ul>
        </div>
        <div className="mt-4 text-center text-gray-500">
          <p>&copy; 2025 Coding Ninjas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
