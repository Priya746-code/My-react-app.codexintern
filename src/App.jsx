import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ClassroomVideo from './components/ClassroomVideo';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ClassroomVideo/>
      <Courses />
      <Reviews/>
      <Footer />
      
    </div>
  );
}

export default App;
