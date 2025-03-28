import Image from 'next/image';
import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CustomerReviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: custom => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: custom * 0.1 }
    })
  };
  
  return (
    <motion.div 
      ref={ref}
      className="relative p-8 mb-12"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0">
        <Image 
          src="/images/about/pr-06.jpg" 
          alt="Reviews Background" 
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-5xl font-semibold text-white text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Customer Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id} 
              className="p-6 backdrop-blur-sm relative rounded-lg"
              style={{ minHeight: "fit-content" }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)"
              }}
            >
              <motion.div className="absolute bottom-6 right-3 flex">
                {[...Array(5)].map((_, starIndex) => (
                  starIndex < review.rating ? (
                    <motion.div
                      key={starIndex}
                      variants={starVariants}
                      custom={starIndex}
                      whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={starIndex}
                      variants={starVariants}
                      custom={starIndex}
                    >
                      <FaRegStar className="text-gray-400" />
                    </motion.div>
                  )
                ))}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white mb-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {review.name}
              </motion.h3>
              <motion.p 
                className="mb-3 text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {review.content}
              </motion.p>
              <motion.p 
                className="text-sm text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {review.date}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomerReviews;
