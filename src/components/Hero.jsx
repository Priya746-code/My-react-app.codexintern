import React from 'react';

const Hero = () => {
  return (
    <section className="py-32 text-center text-white bg-black">
      <h1 className="mb-4 text-5xl font-bold">Get the tech career you deserve. Faster.</h1>
      <p className="mb-6">Structured coding courses that get you there faster with confidence.</p>
      <a
        href="#"
        className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-orange-500 rounded hover:bg-yellow-600"
      >
        Explore offerings
        
        <svg
          className="w-5 h-5 ml-3 transform rotate-60"
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
      </a>
    </section>
  );
};

export default Hero;
