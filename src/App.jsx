import React from 'react';
import usePageTracking from './usePageTracking';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SpecializedIn from './components/SpecializedIn';
import Carousel from './components/Carousel';

function App() {
  usePageTracking(); // Now it's safe — Router is already set in main.jsx

  return (
    <div className="font-sans overflow-hidden text-gray-800 bg-blue-50">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Certificates />
      <SpecializedIn />
      <Carousel />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
