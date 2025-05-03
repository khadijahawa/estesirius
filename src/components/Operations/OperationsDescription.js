// components/OperationsDescription.js
import React, { useState } from "react";
import Image from "next/image";

const OperationsDescription = ({ image, title, tag, description }) => {
  return (
    <div className="container mx-auto px-4 my-16">
      {/* Main Container with flex to align image and text */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="bg-teal-500 text-white py-2 px-6 rounded-full inline-block mb-4 text-sm font-semibold">
            {tag}
          </div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-6">{description}</p>

          {/* <div className="flex justify-center md:justify-start mt-6">
            <button className="bg-teal-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OperationsDescription;
