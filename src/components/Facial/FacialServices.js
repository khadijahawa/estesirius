// components/FacialServices.js
import React from 'react';
import Image from 'next/image';

const FacialServices = () => {
  const services = [
    { id: 1, title: 'Deep Cleansing Facial', icon: '✨' },
    { id: 2, title: 'Hydrating Facial', icon: '💧' },
    { id: 3, title: 'Anti-Aging Facial', icon: '⏱️' },
    { id: 4, title: 'Acne Treatment Facial', icon: '🌱' },
    { id: 5, title: 'Skin Renewal Facial', icon: '♻️' },
    { id: 6, title: 'Lifting & Firming Facial', icon: '⤴️' }
  ];

  return (
    <div className="relative py-16 px-4">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/image/pr-04.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facial Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacialServices;