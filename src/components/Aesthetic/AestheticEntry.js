// components/Aesthetic/AestheticEntry.js
import React from 'react';
import Image from 'next/image';

export default function AestheticEntry() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="/images/pr-10.jpg"
            alt="Plastic Surgery"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Plastic Surgery</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Plastic surgery is a specialized surgical specialty involving the restoration, reconstruction, or alteration of the human body. It encompasses both cosmetic and reconstructive procedures, aimed at improving appearance or restoring function. Modern plastic surgery techniques have evolved significantly, offering minimally invasive options with reduced recovery times and enhanced results. Our experienced practitioners combine artistic vision with technical expertise to deliver personalized outcomes that align with each patient's unique goals, whether addressing congenital abnormalities, trauma-related injuries, or aesthetic enhancements.
          </p>
          <div className="pt-4">
            <button className="bg-[#40E0D0] hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              Learn More
              {/*"bg-white text-[#40E0D0] hover:bg-gray-100*/}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}