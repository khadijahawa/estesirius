import React, { useState } from "react";
import Image from "next/image";

const Modal = ({ show, onClose, subcategory, cases }) => {
  const [currentCase, setCurrentCase] = useState(0);

  const handleNext = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.79)"
      }}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-5xl h-[500px] md:h-[700px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{subcategory?.title}</h2>
        <p className="mb-4">{subcategory?.description}</p>

        <div className="relative w-full flex justify-center items-center my-14">
          {" "}
          {/* Adjusted for bottom margin */}
          <div className="relative w-1/2 h-[400px] flex justify-center items-center">
            <Image
              src={cases[currentCase]?.before}
              alt="Before"
              objectFit="contain" // Ensures the image fits without distorting
              className="rounded-lg shadow-lg"
              width={350}
              height={350}
            />
          </div>
          <div className="relative w-1/2 h-[400px] flex justify-center items-center">
            <Image
              src={cases[currentCase]?.after}
              alt="After"
              objectFit="contain" // Ensures the image fits without distorting
              className="rounded-lg shadow-lg"
              width={350}
              height={350}
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

        {/* Close Button */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={onClose}
            className="bg-teal-400 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
