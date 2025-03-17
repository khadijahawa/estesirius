import Image from 'next/image';
import React from 'react';

const About = () => {
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

  // Services data
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

  // Commitment data
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
          <h1 className="text-8xl font-bold text-gray-500 opacity-60">About Us</h1>
        </div>
      </div>
      
      {/* Main content container */}
      <div className="px-4 py-8">
        {/* Top section with image and "From the Start" */}
        <div className="flex flex-col md:flex-row mb-12">
          {/* Left image - height matching the "From the Start" title */}
          <div className="w-full md:w-1/2 relative" style={{ height: "20rem" }}>
            <Image 
              src="/images/pls-08.jpg" 
              alt="Our Company" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
          
          {/* "From the Start" section - no border, dynamic sizing */}
          <div className="w-full md:w-1/2 bg-white p-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-4 text-black">From the Start</h2>
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
        
        {/* "Our Commitment" section - no background, equal sized boxes */}
        <div className="p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-left">Our Commitment</h2>
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
        
        {/* New "Daily Promotions" section */}
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
            <h2 className="text-3xl font-semibold text-white text-center mb-6">Daily Promotions</h2>
            <p className="text-white text-center max-w-2xl mb-8">
              Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis egestas. 
              Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit.
            </p>
            <button className="bg-white text-black py-2 px-6 rounded inline-block">Contact</button>
          </div>
        </div>

        {/* Services Section with circular images - title aligned left */}
        <div className="p-8 bg-white">
          <h2 className="text-3xl font-semibold mb-8 ml-4">Our Services</h2>
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
      </div>
    </div>
  );
};

export default About;