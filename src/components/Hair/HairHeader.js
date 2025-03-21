// components/HairHeader.js
import React from 'react';
import Image from 'next/image';

export default function HairHeader({ title, backgroundImage }) {
  return (
    <div className="relative w-full h-[50vh]">
      <Image 
        src={backgroundImage || "/images/pr-10.jpg"}
        alt={`${title} Header Image`}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-6xl font-bold tracking-wider text-center px-4">{title || "Hairplant"}</h1>
      </div>
    </div>
  );
}