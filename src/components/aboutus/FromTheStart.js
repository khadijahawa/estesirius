import Image from 'next/image';
import React from 'react';

const FromTheStart = () => {
  return (
    <div className="flex flex-col md:flex-row mb-12">
      {/* Left image - height matching the "From the Start" title */}
      <div className="w-full md:w-1/2 relative" style={{ height: "24rem" }}>
        <Image 
          src="/images/pls-08.jpg" 
          alt="Our Company" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      
      {/* "From the Start" section - no border, dynamic sizing */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col">
        <h2 className="text-5xl font-semibold mb-4 text-black">From the Start</h2>
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            <div className="p-2">
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </div>
            <div className="p-2">
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </div>
            <div className="p-2">
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </div>
            <div className="p-2">
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromTheStart;
