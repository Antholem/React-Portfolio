import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import SpeedDial from './components/speed-dial/SpeedDial';

const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto px-4 lgl:px-10'>
        <Banner />
        <Features />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <SpeedDial />
    </div>
  );
};

export default App;
