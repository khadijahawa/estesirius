// components/FacialHero.js
import React from "react";
import Image from "next/image";

const FacialHero = () => {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/images/about/pr-04.jpg"
        alt="Facial Hero"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Best Care for Your Skin
        </h1>
        <p className="text-xl text-white max-w-2xl">
          Professional facial care services for healthy, radiant, and youthful
          skin.
        </p>
      </div>
    </div>
  );
};

export default FacialHero;
