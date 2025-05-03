import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const DailyPromotions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/+905395204530`;
    window.open(whatsappURL, "_blank");
  };

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
          src="/images/about/pr-04.jpg"
          alt="Daily Promotions Background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
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
          Daily Promotions on Aesthetic Treatments
        </motion.h2>
        <motion.p
          className="text-white text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Discover exclusive deals on our premium aesthetic treatments. Whether
          you&lsquo;re looking for rejuvenating facials, body contouring, or
          non-surgical facial enhancements, we have something special for
          everyone. Enjoy high-quality, safe, and effective procedures at
          discounted prices. Act now and book your session today!
        </motion.p>
        <motion.button
          className="bg-white text-black py-2 px-6 rounded inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleWhatsAppRedirect()}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DailyPromotions;
