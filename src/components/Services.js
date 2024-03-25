import React from 'react';

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example Service Card */}
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      {/* Icon placeholder */}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Service One</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Offering unparalleled flexibility and support, our service is designed to meet your evolving business needs.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more service cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
