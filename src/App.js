import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Services />
      {/* Further components */}
    </div>
  );
}

export default App;