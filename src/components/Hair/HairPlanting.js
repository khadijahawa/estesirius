// components/HairPlanting.js
import React from 'react';
import Image from 'next/image';

export default function HairPlanting() {
  return (
    <>
      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hairplant Definition */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Hairplant Definition</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hairplant is our revolutionary approach to hair restoration that combines cutting-edge technology with natural techniques...
            </p>
            <div className="pt-4">
              <button className="bg-[#40E0D0] hover:bg-[#32C6B6] text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/pr-15.jpg"
              alt="Hairplant Procedure"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Hairplant?</h2>
            <p className="text-lg text-gray-600">Discover the advantages that make our approach stand out from conventional treatments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#40E0D0] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Natural Results</h3>
              <p className="text-gray-600">Our advanced techniques ensure that transplanted hair looks and grows naturally...</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#40E0D0] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Minimal Recovery</h3>
              <p className="text-gray-600">Experience significantly reduced downtime compared to traditional methods...</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#40E0D0] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Expert Care</h3>
              <p className="text-gray-600">Our team of specialists brings years of experience and the latest innovations to every procedure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#40E0D0] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Appearance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a consultation today and discover how Hairplant can help restore your confidence and natural appearance.</p>
          <button className="bg-white text-[#40E0D0] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300">
            Book Consultation
          </button>
        </div>
      </section>
    </>
  );
}