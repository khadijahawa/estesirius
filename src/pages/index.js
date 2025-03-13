import { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>CLINICA WP - Premium Plastic Surgery Clinic</title>
        <meta name="description" content="Premium plastic surgery clinic focused on providing the highest quality care and results" />
      </Head>
      
      <div className="home-hero relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/pr-10.jpg"
              alt="CLINICA WP Hero"
              layout="fill"
              objectFit="cover"
              className="filter brightness-90"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Beauty & Health <span className="text-turquoise">Redefined</span></h1>
            <p className="text-white text-lg mb-8 text-wrap-balance">
              Experience the pinnacle of aesthetic transformations with our expert team of plastic surgeons and state-of-the-art facilities. Your journey to confidence starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-turquoise hover:bg-turquoise/80 text-white font-bold py-3 px-8 rounded transition">
                BOOK CONSULTATION
              </button>
              <button className="bg-white hover:bg-gray-100 text-turquoise font-bold py-3 px-8 rounded transition">
                VIEW SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Welcome to <span className="text-turquoise">CLINICA WP</span></h2>
          {/* Additional homepage content would go here */}
        </div>
      </div>
    </>
  );
}
