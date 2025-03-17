import Image from 'next/image';
import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      image: "ar_01 (1).jpg",
      title: "Cosmetic Surgery"
    },
    {
      id: 2,
      image: "ar_01 (2).jpg",
      title: "Hair Transplant"
    },
    {
      id: 3,
      image: "ar_01 (3).jpg",
      title: "Laser Hair Removal"
    },
    {
      id: 4,
      image: "ar_01 (4).jpg",
      title: "Hydrafacial"
    },
    {
      id: 5,
      image: "ar_01 (5).jpg",
      title: "Aesthetic Medicine"
    },
    {
      id: 6,
      image: "ar_01 (6).jpg",
      title: "Machines"
    }
  ];
  
  return (
    <div className="p-8 bg-white">
      <h2 className="text-5xl font-semibold mb-8 ml-4 text-center">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
              <Image 
                src={`/images/${service.image}`} 
                alt={service.title} 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <h3 className="text-center font-medium">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
