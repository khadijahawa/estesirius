import Image from 'next/image';
import React from 'react';

const DailyPromotions = () => {
  return (
    <div className="relative p-8 mb-12">
      <div className="absolute inset-0">
        <Image 
          src="/images/pr-04.jpg" 
          alt="Daily Promotions Background" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center py-16">
        <h2 className="text-5xl font-semibold text-white text-center mb-6">Daily Promotions</h2>
        <p className="text-white text-center max-w-2xl mb-8">
          Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis egestas. 
          Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit.
        </p>
        <button className="bg-white text-black py-2 px-6 rounded inline-block">Contact</button>
      </div>
    </div>
  );
};

export default DailyPromotions;
