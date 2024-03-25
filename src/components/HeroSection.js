import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white text-center py-20 lg:py-32">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Empowering Your Business</h1>
      <p className="text-xl lg:text-2xl mb-8">Short-term leasing solutions designed for growth and flexibility.</p>
      <a href="#services" className="inline-block bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-400 transition-colors duration-200">
        Explore Our Services
      </a>
    </div>
  );
};

export default HeroSection;
