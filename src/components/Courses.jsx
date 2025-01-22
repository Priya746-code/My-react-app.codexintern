import React from 'react';

const Courses = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Popular Courses</h2>
        <p className="mb-8 text-lg">Choose from a variety of topics and get started today!</p>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-semibold">Data Structures & Algorithms</h3>
            <p className="mb-4 text-lg">Master the fundamentals and advanced concepts.</p>
            <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Learn More</a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-semibold">Web Development</h3>
            <p className="mb-4 text-lg">Build websites with HTML, CSS, JavaScript, and more.</p>
            <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Learn More</a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-semibold">Machine Learning</h3>
            <p className="mb-4 text-lg">Explore the world of AI and machine learning.</p>
            <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
