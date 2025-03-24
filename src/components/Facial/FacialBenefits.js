// components/FacialBenefits.js
import React from 'react';
import Image from 'next/image';

const FacialBenefits = () => {
  const benefits = [
    { id: 1, title: 'Removes dead skin cells', icon: '🧼' },
    { id: 2, title: 'Opens and tightens pores', icon: '🔄' },
    { id: 3, title: 'Evens out skin tone', icon: '🎨' },
    { id: 4, title: 'Reduces wrinkles and fine lines', icon: '✂️' },
    { id: 5, title: 'Moisturizes and nourishes the skin', icon: '💦' }
  ];

  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 relative">
            <div className="rounded-lg overflow-hidden shadow-lg relative h-64 w-full">
              <Image
                src="/images/pr-04.jpg"
                alt="Facial Benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Benefits of Our Facials</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-4">
                  <div className="text-2xl bg-white p-3 rounded-full shadow-md">{benefit.icon}</div>
                  <p className="text-lg">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialBenefits;