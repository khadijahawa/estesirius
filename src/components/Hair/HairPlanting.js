import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HairPlanting({ title, description, image, benefits }) {
  return (
    <>
      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hairplant Definition */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800">{title || "Hairplant Definition"}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description || "Hairplant is our revolutionary approach to hair restoration that combines cutting-edge technology with natural techniques..."}
            </p>
            <div className="pt-4">
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image 
              src={image || "/images/pr-15.jpg"}
              alt="Procedure Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Additional Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Our Treatment?</h2>
            <p className="text-lg text-gray-600">Discover the advantages that make our approach stand out from conventional treatments.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits && benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}