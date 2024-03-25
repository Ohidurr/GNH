import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Journey of Growth and Innovation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here at [Company Name], we specialize in short-term leasing solutions that empower businesses to adapt and thrive. Our commitment to flexibility and excellence has been the cornerstone of our success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
