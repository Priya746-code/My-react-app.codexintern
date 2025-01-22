// src/components/Testimonials.js
import React from 'react';

const Reviews = () => {
  const testimonials = [
    { name: "John Doe", feedback: "The Full Stack Development course completely transformed my career. Highly recommended!" },
    { name: "Jane Smith", feedback: "Data Science Bootcamp provided me with the skills to get my first job in tech." },
    { name: "Mark Lee", feedback: "The instructors were amazing, and the course content was very hands-on and practical." },
  ];

  return (
    <section className="py-16 text-white bg-blue-500">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-semibold">What Our Students Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-sm p-6 mx-auto text-gray-900 bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic">"{testimonial.feedback}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
