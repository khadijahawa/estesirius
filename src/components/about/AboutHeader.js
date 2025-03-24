import Image from 'next/image';
import React from 'react';

const AboutHeader = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Image 
        src="/images/about/pr-05.jpg" 
        alt="About Us Header" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="center" // Görünen kısmı ayarlamak için
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#1A2A4A] opacity-30">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutHeader;
