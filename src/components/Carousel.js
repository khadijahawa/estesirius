"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/patient.jpg",
    text: "Clinica is the Best place I'd stay at",
    author: "Jacqueline Bennat",
  },
  {
    image: "/images/doctor (1).jpg",
    text: "Providing excellent healthcare for all.",
    author: "Dr. Andrew Odge",
  },
  {
    image: "/images/treatment.jpg",
    text: "320+ Happy Customers",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-10 overflow-hidden">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <div className="relative group w-[80%]">
          <img
            src={slides[index].image}
            alt="Slide"
            className="w-full h-[300px] object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-5 rounded-xl">
            <p className="text-lg font-semibold">{slides[index].text}</p>
            {slides[index].author && (
              <p className="text-sm mt-2">{slides[index].author}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
