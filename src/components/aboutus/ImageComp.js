import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

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
    
    const newPosition = Math.max(0, Math.min(100, (mouseX / containerWidth) * 100));
    setSliderPosition(newPosition);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const touchX = e.touches[0].clientX - containerRect.left;
    
    const newPosition = Math.max(0, Math.min(100, (touchX / containerWidth) * 100));
    setSliderPosition(newPosition);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-4 gap-8">
      {/* Image Comparison Component */}
      <div 
        ref={containerRef}
        className="relative w-full lg:w-1/2 h-96 overflow-hidden rounded-lg shadow-lg"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (hp-01.jpg) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/image/hp-01.jpg" 
            alt="Before hair transplant" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* After Image (hp-02.jpg) with Clip Path */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
          }}
        >
          <img 
            src="/image/hp-02.jpg" 
            alt="After hair transplant" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-lg"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-300 shadow-md flex items-center justify-center">
            <div className="flex flex-col gap-0.5">
              <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Hair Transplant</h1>
        <p className="text-gray-600 leading-relaxed">
          Hair transplantation is a surgical technique that moves individual hair follicles from a part of the body called the 'donor site' to bald or balding part of the body known as the 'recipient site'. It is primarily used to treat male pattern baldness. In this minimally invasive procedure, grafts containing hair follicles that are genetically resistant to balding are transplanted to the bald scalp. Our advanced techniques ensure natural-looking results with minimal recovery time, helping you regain not just your hair, but your confidence.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;