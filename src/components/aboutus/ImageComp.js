/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = e.clientX - containerRect.left;

    const newPosition = Math.max(
      0,
      Math.min(100, (mouseX / containerWidth) * 100)
    );
    setSliderPosition(newPosition);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const touchX = e.touches[0].clientX - containerRect.left;

    const newPosition = Math.max(
      0,
      Math.min(100, (touchX / containerWidth) * 100)
    );
    setSliderPosition(newPosition);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Add animation effect when the component comes into view
  useEffect(() => {
    if (inView) {
      // Animate the slider position from 0 to 50 when it comes into view
      const timer = setTimeout(() => {
        setSliderPosition(0);
        setTimeout(() => {
          setSliderPosition(50);
        }, 800);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row max-w-6xl mx-auto p-20 gap-70"
    >
      {/* Image Comparison Component */}
      <motion.div
        ref={containerRef}
        className="relative w-full lg:w-1/2 h-96 overflow-hidden rounded-lg shadow-lg"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.6 }}
      >
        {/* Before Image (hp-01.jpg) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hp-01.jpg"
            alt="Before hair transplant"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* After Image (hp-02.jpg) with Clip Path */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/hp-02.jpg"
            alt="After hair transplant"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Slider Line with Pulse Effect */}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-lg"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          animate={{
            boxShadow: isDraggingRef.current
              ? "0 0 8px 1px rgba(255, 255, 255, 0.8)"
              : "none"
          }}
        >
          {/* Slider Handle */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-300 shadow-md flex items-center justify-center"
            animate={{ scale: isDraggingRef.current ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-0.5">
              <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hair Transplant
        </motion.h1>
        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Hair transplantation is a surgical technique that moves individual
          hair follicles from a part of the body called the 'donor site' to bald
          or balding part of the body known as the 'recipient site'. It is
          primarily used to treat male pattern baldness. In this minimally
          invasive procedure, grafts containing hair follicles that are
          genetically resistant to balding are transplanted to the bald scalp.
          Our advanced techniques ensure natural-looking results with minimal
          recovery time, helping you regain not just your hair, but your
          confidence.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageComparisonSlider;
