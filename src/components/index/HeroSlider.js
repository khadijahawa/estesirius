import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedMessage } from "react-intl";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/index/pr-29.jpg",
      title: <FormattedMessage id="HeroSlider.title1" />,
      titleHighlight: <FormattedMessage id="HeroSlider.titleHighlight1" />,
      description: <FormattedMessage id="HeroSlider.description1" />,
      primaryButton: <FormattedMessage id="HeroSlider.primaryButton1" />,
      secondaryButton: <FormattedMessage id="HeroSlider.secondaryButton1" />,
      phoneNumber: "+905395204530"
    },
    {
      id: 2,
      image: "/images/index/pr-10.jpg",
      title: <FormattedMessage id="HeroSlider.title2" />,
      titleHighlight: <FormattedMessage id="HeroSlider.titleHighlight2" />,
      description: <FormattedMessage id="HeroSlider.description2" />,
      primaryButton: <FormattedMessage id="HeroSlider.primaryButton2" />,
      secondaryButton: <FormattedMessage id="HeroSlider.secondaryButton2" />,
      phoneNumber: "+905395204530"
    },
    {
      id: 3,
      image: "/images/index/pr-29.jpg",
      title: <FormattedMessage id="HeroSlider.title3" />,
      titleHighlight: <FormattedMessage id="HeroSlider.titleHighlight3" />,
      description: <FormattedMessage id="HeroSlider.description3" />,
      primaryButton: <FormattedMessage id="HeroSlider.primaryButton3" />,
      secondaryButton: <FormattedMessage id="HeroSlider.secondaryButton3" />,
      phoneNumber: "+905395204530"
    }
  ];

  // State and refs
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Constants
  const SLIDE_DURATION = 6000;
  const ANIMATION_INTERVAL = 100;
  const PROGRESS_INCREMENT = (100 * ANIMATION_INTERVAL) / SLIDE_DURATION;

  // Animation variants - consolidated
  const variants = {
    slide: {
      enter: { opacity: 0 },
      center: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
      exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
    },
    image: {
      enter: { scale: 1 },
      center: {
        scale: 1.05,
        transition: { duration: SLIDE_DURATION / 1000, ease: "linear" }
      }
    },
    content: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
      }
    },
    button: (custom) => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5, delay: custom * 0.3 }
      }
    })
  };

  // Timer function
  const startTimer = () => {
    // Clear existing intervals
    [intervalRef, progressIntervalRef].forEach(
      (ref) => ref.current && clearInterval(ref.current)
    );

    // Reset progress
    setProgress(0);

    // Start progress animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + PROGRESS_INCREMENT));
    }, ANIMATION_INTERVAL);

    // Set slide transition
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);
  };

  // Initialize timer
  useEffect(() => {
    startTimer();
    setTimeout(() => setInitialLoad(false), 100);

    return () => {
      [intervalRef, progressIntervalRef].forEach(
        (ref) => ref.current && clearInterval(ref.current)
      );
    };
  }, [slides.length]);

  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
      startTimer();
    }
  };

  const handleWhatsAppRedirect = (phoneNumber) => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="home-hero relative h-[100vh] w-full flex items-center overflow-hidden bg-secondary">
      <AnimatePresence mode="crossfade">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                variants={variants.slide}
                initial={initialLoad && index === 0 ? false : "enter"}
                animate="center"
                exit="exit"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="relative w-full h-full">
                    <motion.div
                      className="w-full h-full"
                      variants={variants.image}
                      initial="enter"
                      animate="center"
                    >
                      <Image
                        src={slide.image}
                        alt={`ESTE SIRIUS - ${slide.title}`}
                        fill
                        priority={index === 0}
                        className="filter brightness-90 object-cover"
                        loading="eager"
                        sizes="100vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-secondary opacity-10 z-1"></div>
                  </div>
                </div>

                {/* Slide Content */}
                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                  <motion.div
                    className="max-w-2xl pt-16 md:pt-24"
                    variants={variants.content}
                    initial="hidden"
                    animate="visible"
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-sans">
                      {slide.title}{" "}
                      <span className="text-primary">
                        {slide.titleHighlight}
                      </span>
                    </h1>
                    <p className="text-white text-lg md:text-xl mb-8 text-wrap-balance">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {["primary", "secondary"].map((type, i) => (
                        <motion.button
                          key={type}
                          className={`font-bold py-3 px-8 rounded transition ${
                            type === "primary"
                              ? "bg-primary hover:bg-primary-dark text-white font-sans"
                              : "bg-white hover:bg-gray text-secondary"
                          }`}
                          custom={i + 1}
                          variants={variants.button(i + 1)}
                          initial="hidden"
                          animate="visible"
                          onClick={
                            type === "primary"
                              ? () => handleWhatsAppRedirect(slide.phoneNumber)
                              : undefined
                          }
                        >
                          {slide[`${type}Button`]}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Slide Controls */}
      <div className="absolute bottom-16 right-8 flex items-center gap-4 z-20">
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
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="3"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 100 - progress }}
              transition={{
                duration: ANIMATION_INTERVAL / 1000,
                ease: "linear"
              }}
            />
          </svg>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              className={`h-3 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
              initial={false}
              animate={{ width: index === currentSlide ? "1.5rem" : "0.75rem" }}
              transition={{ duration: 0.3 }}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
