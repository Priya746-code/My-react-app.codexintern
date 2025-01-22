// src/components/ClassroomVideo.js
import React from 'react';

const ClassroomVideo = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-semibold">Watch Our Classroom in Action</h2>
        
        {/* YouTube Video Embed with Correct URL Format */}
        <div className="relative mb-8" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            width="100%"
            height="100%"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GYSfw55Mixg" // Correct Embed URL
            title="Classroom Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-lg text-gray-700">Learn from real-world coding classrooms, with step-by-step instructions from our experts.</p>
      </div>
    </section>
  );
};

export default ClassroomVideo;
