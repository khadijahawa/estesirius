import React, { useState } from "react";
import Image from "next/image";

const OperationsImages = ({ cases, procedureSteps }) => {
  const [currentCase, setCurrentCase] = useState(0);

  const handleNext = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <div className="w-full flex justify-center items-center my-16">
      <div className="relative w-full max-w-screen-lg">
        <div className="mb-8 px-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Procedure Steps
          </h3>
          <ul className="list-inside list-decimal space-y-2 text-gray-700">
            {procedureSteps.map((step, index) => (
              <li key={index} className="text-lg">
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center relative">
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image
              src={cases[currentCase].before}
              alt="Before"
              width={700}
              height={700}
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image
              src={cases[currentCase].after}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              width={700}
              height={700}
            />
          </div>
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            className="bg-teal-500 text-white p-2 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-teal-500 text-white p-2 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperationsImages;
