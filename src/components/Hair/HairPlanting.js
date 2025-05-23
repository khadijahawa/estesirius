import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

export default function HairPlanting({
  title,
  description,
  image,
  benefits,
  content
}) {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-dark">{title}</h2>
            <p className="text-lg text-gray-dark leading-relaxed">
              {description}
            </p>
            <p className="text-lg text-gray-dark leading-relaxed">
              {showMore && (
                <p className="text-lg text-gray-dark leading-relaxed">
                  {content}
                </p>
              )}
            </p>
            <div className="pt-4">
              <button
                onClick={handleToggle}
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt="Procedure Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Additional Info Section */}
      <section className="bg-gray-light py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-dark mb-4">
              <FormattedMessage id="HairTransplant.benefits.title" />
            </h2>
            <p className="text-lg text-gray-dark">
              <FormattedMessage id="HairTransplant.benefits.description" />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits &&
              benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-dark">{benefit.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
