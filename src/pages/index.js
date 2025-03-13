import { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Define constants for timing to ensure consistency
  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const ANIMATION_INTERVAL = 100; // Update progress every 100ms
  const PROGRESS_INCREMENT = (100 * ANIMATION_INTERVAL) / SLIDE_DURATION; // Calculate exact increment
  const FADE_DURATION = 500; // Duration of fade transition between slides
  const PRIMARY_BUTTON_DELAY = 300; // Delay for primary button animation
  const SECONDARY_BUTTON_DELAY = 600; // Delay for secondary button animation
  
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

  const startTimer = () => {
    // Clear any existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Reset progress
    setProgress(0);
    
    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + PROGRESS_INCREMENT; // Use calculated increment for precision
      });
    }, ANIMATION_INTERVAL);
    
    // Set slide transition
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsAnimating(false);
        setProgress(0);
      }, FADE_DURATION); // Use constant for fade duration
    }, SLIDE_DURATION); // Use constant for consistent timing
    
    return progressInterval;
  };

  useEffect(() => {
    const progressInterval = startTimer();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearInterval(progressInterval);
    };
  }, [slides.length]);

  const handleSlideChange = (index) => {
    if (index === currentSlide) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
      startTimer();
    }, FADE_DURATION / 2); // Half the fade duration for manual transitions
  };

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
            className={`absolute inset-0 transition-opacity duration-${FADE_DURATION} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
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
                  style={{ transitionDuration: `${SLIDE_DURATION}ms` }} // Match slide duration
                />
              </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
              <div 
                className={`max-w-2xl transition-all ${
                  index === currentSlide && !isAnimating 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDuration: `${FADE_DURATION * 2}ms` }}
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
                    style={{ animationDelay: `${PRIMARY_BUTTON_DELAY}ms` }} // Use constant
                  >
                    {slide.primaryButton}
                  </button>
                  <button 
                    className={`bg-white hover:bg-gray-100 text-turquoise font-bold py-3 px-8 rounded transition ${
                      index === currentSlide && !isAnimating 
                        ? 'animate-fadeIn' 
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${SECONDARY_BUTTON_DELAY}ms` }} // Use constant
                  >
                    {slide.secondaryButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators and timer */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
          {/* Circular countdown */}
          <div className="relative h-8 w-8">
            <svg className="h-8 w-8 transform -rotate-90" viewBox="0 0 36 36">
              <circle 
                cx="18" 
                cy="18" 
                r="16" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.2)" 
                strokeWidth="3"
              />
              <circle 
                cx="18" 
                cy="18" 
                r="16" 
                fill="none" 
                stroke="var(--turquoise)" 
                strokeWidth="3" 
                strokeDasharray="100"
                strokeDashoffset={100 - progress}
                className="transition-all duration-100 ease-linear"
                style={{ transitionDuration: `${ANIMATION_INTERVAL}ms` }}
              />
            </svg>
          </div>
          
          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-turquoise w-6' : 'bg-white/50'
                }`}
                style={{ transitionDuration: `${FADE_DURATION / 2}ms` }}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
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
