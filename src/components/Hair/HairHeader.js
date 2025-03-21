// components/HairHeader.js
import React from 'react';
import Image from 'next/image';

export default function HairHeader() {
  return (
    <div className="relative w-full h-[50vh]">
      <Image 
        src="/images/pr-10.jpg"
        alt="Hairplant Header Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold tracking-wider">Hairplant</h1>
      </div>
    </div>
  );
}