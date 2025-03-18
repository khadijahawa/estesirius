import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DailyPromotions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      className="relative p-8 mb-12"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0">
        <Image 
          src="/images/pr-04.jpg" 
          alt="Daily Promotions Background" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <motion.div 
        className="relative flex flex-col items-center justify-center py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className="text-5xl font-semibold text-white text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Daily Promotions
        </motion.h2>
        <motion.p 
          className="text-white text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis egestas. 
          Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit.
        </motion.p>
        <motion.button 
          className="bg-white text-black py-2 px-6 rounded inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DailyPromotions;
