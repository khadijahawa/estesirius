import { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    {
      id: 1,
      image: "/images/pr-10.jpg",
      title: "Beauty & Health",
      titleHighlight: "Redefined",
      description: "Experience the pinnacle of aesthetic transformations with our expert team of plastic surgeons and state-of-the-art facilities. Your journey to confidence starts here.",
      primaryButton: "BOOK CONSULTATION",
      secondaryButton: "VIEW SERVICES"
    },
    {
      id: 2,
      image: "/images/pr-29.jpg",
      title: "Advanced",
      titleHighlight: "Treatments",
      description: "Discover our innovative procedures and cutting-edge technologies designed to deliver natural-looking results with minimal recovery time.",
      primaryButton: "EXPLORE PROCEDURES",
      secondaryButton: "MEET OUR DOCTORS"
    },
    {
      id: 3,
      image: "/images/pr-15.jpg",
      title: "Your Beauty",
      titleHighlight: "Our Passion",
      description: "Let our skilled professionals guide you through a personalized transformation journey tailored to your unique aesthetic goals.",
      primaryButton: "GET STARTED",
      secondaryButton: "READ TESTIMONIALS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsAnimating(false);
      }, 500); // Duration of fade out
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Head>
        <title>ESTE SIRIUS - Premium Plastic Surgery Clinic</title>
        <meta name="description" content="Premium plastic surgery clinic focused on providing the highest quality care and results" />
      </Head>
      
      <div className="home-hero relative h-[600px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`ESTE SIRIUS - ${slide.title}`}
                  layout="fill"
                  objectFit="cover"
                  className={`filter brightness-90 transition-transform duration-6000 ${
                    index === currentSlide ? 'scale-105 origin-center' : 'scale-100'
                  }`}
                />
              </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
              <div 
                className={`max-w-2xl transition-all duration-1000 ${
                  index === currentSlide && !isAnimating 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {slide.title} <span className="text-turquoise">{slide.titleHighlight}</span>
                </h1>
                <p className="text-white text-lg mb-8 text-wrap-balance">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    className={`bg-turquoise hover:bg-turquoise/80 text-white font-bold py-3 px-8 rounded transition ${
                      index === currentSlide && !isAnimating 
                        ? 'animate-fadeIn' 
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.3s' }}
                  >
                    {slide.primaryButton}
                  </button>
                  <button 
                    className={`bg-white hover:bg-gray-100 text-turquoise font-bold py-3 px-8 rounded transition ${
                      index === currentSlide && !isAnimating 
                        ? 'animate-fadeIn' 
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.6s' }}
                  >
                    {slide.secondaryButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-turquoise w-6' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Welcome to <span className="text-turquoise">ESTE SIRIUS</span></h2>
          {/* Additional homepage content would go here */}
        </div>
      </div>
    </>
  );
}
