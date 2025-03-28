import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div className="p-8 mb-12" ref={ref}>
      <motion.h2 
        className="text-5xl font-semibold mb-8 text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
      >
        Our Commitment
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {commitments.map((commitment, index) => (
          <motion.div 
            key={commitment.id} 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
          >
            {/* Background image for each box */}
            <div className="absolute inset-0">
              <Image 
                src="/images/about/pr-03.jpg" 
                alt="Box Background" 
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <motion.div 
              className="relative p-6 h-full flex flex-col"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {commitment.id}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{commitment.title}</h3>
              <p className="text-white">{commitment.content}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurCommitment;
