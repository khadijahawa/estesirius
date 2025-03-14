import Image from 'next/image';
import React from 'react';

const About = () => {
  // Define custom turquoise color
  const turquoiseColor = "#40E0D0";
  
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      content: "Their products exceeded my expectations. Highly recommend!",
      date: "March 2, 2025"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      content: "Great quality and excellent customer service. Will definitely purchase again.",
      date: "February 15, 2025"
    },
    {
      id: 3,
      name: "Michael Brown",
      content: "Their team was incredibly helpful throughout the entire process.",
      date: "January 27, 2025"
    }
  ];

  // Updated pricing data
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Plan",
      details: "Praesent ultrices urna purus Sed vitae tristique nisl ultric Donec a ligula lacinia, cons Nunc scelerisque velit a pul"
    },
    {
      id: 2,
      name: "Popular Plan",
      details: "Praesent ultrices urna purus Sed vitae tristique nisl ultric Donec a ligula lacinia, cons Praesent ultrices urna purus Nunc scelerisque velit a pul"
    },
    {
      id: 3,
      name: "Advanced Plan",
      details: "Praesent ultrices urna purus Sed vitae tristique nisl ultric Donec a ligula lacinia, cons Nunc scelerisque velit a pul"
    }
  ];

  return (
    <div className="container mx-auto">
      {/* Header with background image */}
      <div className="relative w-full h-64">
        <Image 
          src="/images/pr-05.jpg" 
          alt="About Us Header" 
          layout="fill" 
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black px-8 py-4">About Us</h1>
        </div>
      </div>
      
      {/* Main content container */}
      <div className="px-4 py-8">
        {/* Top section with image and "From the Start" */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Left image (green area) */}
          <div className="w-full md:w-1/2 aspect-square relative">
            <Image 
              src="/images/pls-08.jpg" 
              alt="Our Company" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
          
          {/* "From the Start" section (now white) */}
          <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center border border-gray-200">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-black">From the Start</h2>
              <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
              <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
              <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </div>
          </div>
        </div>
        
        {/* "Our Commitment" section (now white) */}
        <div className="bg-white p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 aspect-square border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">The Beginning</h3>
              <p className="text-black">Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit. Proin tempor nun. In sit amet augue non dui Proin quis elit lacinia arcu</p>
            </div>
            <div className="bg-white p-6 aspect-square border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Settling</h3>
              <p className="text-black">Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere. In sit amet augue non dui Proin quis elit lacinia arcu</p>
            </div>
            <div className="bg-white p-6 aspect-square border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Production</h3>
              <p className="text-black">Phasellus mattis arcu ut ante hendrerit faucibus. Sed tristique justo sed nunc sagittis, nec. In sit amet augue non dui Proin quis elit lacinia arcu</p>
            </div>
            <div className="bg-white p-6 aspect-square border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-3">Today</h3>
              <p className="text-black">Vivamus quis interdum neque. Aenean convallis urna at sapien dignissim, quis fringilla ipsum. In sit amet augue non dui Proin quis elit lacinia arcu</p>
            </div>
          </div>
        </div>
        
        {/* Reviews section with background image */}
        <div className="relative p-8 mb-12">
          <div className="absolute inset-0">
            <Image 
              src="/images/pr-06.jpg" 
              alt="Reviews Background" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="p-6 backdrop-blur-sm" style={{ minHeight: "fit-content" }}>
                  <h3 className="text-xl font-bold text-white mb-3">{review.name}</h3>
                  <p className="mb-3 text-white">{review.content}</p>
                  <p className="text-sm text-white">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pricing section with background image */}
        <div className="relative p-8">
          <div className="absolute inset-0">
            <Image 
              src="/images/pr-03.jpg" 
              alt="Pricing Background" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Our Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="backdrop-blur-sm bg-white bg-opacity-20 p-6 aspect-square flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-white text-center flex-grow flex items-center justify-center">{plan.name}</h3>
                  <p className="text-white mb-4">{plan.details}</p>
                  <div className="flex items-center mt-auto">
                    <input type="checkbox" id={`check-${plan.id}`} className="mr-2" />
                    <label htmlFor={`check-${plan.id}`} className="text-white">check</label>
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

export default About;