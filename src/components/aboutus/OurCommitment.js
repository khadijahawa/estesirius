import Image from 'next/image';
import React from 'react';

const OurCommitment = () => {
  const commitments = [
    {
      id: 1,
      title: "The Beginning",
      content: "Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit. Proin tempor nun. In sit amet augue non dui Proin quis elit lacinia arcu"
    },
    {
      id: 2,
      title: "Settling",
      content: "Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere. In sit amet augue non dui Proin quis elit lacinia arcu"
    },
    {
      id: 3,
      title: "Production",
      content: "Phasellus mattis arcu ut ante hendrerit faucibus. Sed tristique justo sed nunc sagittis, nec. In sit amet augue non dui Proin quis elit lacinia arcu"
    },
    {
      id: 4,
      title: "Today",
      content: "Vivamus quis interdum neque. Aenean convallis urna at sapien dignissim, quis fringilla ipsum. In sit amet augue non dui Proin quis elit lacinia arcu"
    }
  ];
  
  return (
    <div className="p-8 mb-12">
      <h2 className="text-5xl font-semibold mb-8 text-left">Our Commitment</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {commitments.map((commitment) => (
          <div key={commitment.id} className="relative">
            {/* Background image for each box */}
            <div className="absolute inset-0">
              <Image 
                src="/images/pr-03.jpg" 
                alt="Box Background" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div className="relative p-6 h-full flex flex-col">
              <div className="text-4xl font-bold text-white mb-2">{commitment.id}</div>
              <h3 className="text-xl font-bold text-white mb-3">{commitment.title}</h3>
              <p className="text-white">{commitment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCommitment;
