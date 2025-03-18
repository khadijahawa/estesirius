import Image from 'next/image';
import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      content: "Their products exceeded my expectations. Highly recommend!",
      date: "March 2, 2025",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      content: "Great quality and excellent customer service. Will definitely purchase again.",
      date: "February 15, 2025",
      rating: 4
    },
    {
      id: 3,
      name: "Michael Brown",
      content: "Their team was incredibly helpful throughout the entire process.",
      date: "January 27, 2025",
      rating: 3
    }
  ];
  
  return (
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
        <h2 className="text-5xl font-semibold text-white text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 backdrop-blur-sm relative" style={{ minHeight: "fit-content" }}>
              <div className="absolute bottom-6 right-3 flex">
                {[...Array(5)].map((_, index) => (
                  index < review.rating ? (
                    <FaStar key={index} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={index} className="text-gray-400" />
                  )
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{review.name}</h3>
              <p className="mb-3 text-white">{review.content}</p>
              <p className="text-sm text-white">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
