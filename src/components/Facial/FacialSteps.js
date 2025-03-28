import React from 'react';
import Image from 'next/image';

const FacialSteps = () => {
  const steps = [
    { id: 1, title: 'Skin Analysis', description: 'Examining your skin to determine treatment needs' },
    { id: 2, title: 'Cleansing', description: 'Removing makeup, dirt, and impurities' },
    { id: 3, title: 'Exfoliation & Peeling', description: 'Removing dead skin cells' },
    { id: 4, title: 'Steam Therapy', description: 'Opening pores for deeper cleansing' },
    { id: 5, title: 'Mask & Serum Application', description: 'Targeted treatment for specific concerns' },
    { id: 6, title: 'Moisturizing & Massage', description: 'Hydrating and relaxing the facial muscles' },
    { id: 7, title: 'Finalizing with SPF Protection', description: 'Protecting your skin from UV damage' }
  ];

  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facial Process</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-lg overflow-hidden shadow-lg relative h-96 w-full">
              <Image
                src="/images/pr-04.jpg"
                alt="Facial Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="bg-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialSteps;