import React, { useState, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useViewportSection, useFitToViewport } from '../hooks/useViewportSection';

// Import assets
import emsDashboard from '../assets/EMS_Dashboard.png';
import bmsImage from '../assets/BMS.png';
import bessImage from '../assets/BESS.png';
import boardImage from '../assets/Board.jpg';
import storageImage from '../assets/Storage.png';

interface Solution {
  title: string;
  text: string;
  imgSrc: string;
}

const solutions: Solution[] = [
  {
    title: "Intelligent Energy Management",
    text: "Control every watt. Our advanced Energy Management Systems (EMS) optimize energy distribution, integrate renewables, and ensure grid stability. From industrial microgrids to smart commercial buildings, we deliver efficiency and resilience.",
    imgSrc: emsDashboard,
  },
  {
    title: "Advanced Battery Intelligence", 
    text: "Unlock peak performance and safety at the core. Our cutting-edge Battery Management Systems (BMS) provide high-fidelity monitoring, precision balancing, and predictive diagnostics. We ensure your batteries operate at maximum efficiency and longevity.",
    imgSrc: bmsImage,
  },
  {
    title: "Scalable Storage Solutions",
    text: "Power for any scale. We design and deploy robust Battery Energy Storage Systems (BESS) tailored to your needs. From utility-scale systems that stabilize the grid to behind-the-meter solutions for businesses, we build the energy reserves of tomorrow.",
    imgSrc: bessImage,
  },
  {
    title: "Assurance, Integration & Safety",
    text: "Build with confidence. Our world-class testing, validation, and certification services ensure your battery systems meet the highest global standards for safety, performance, and reliability.",
    imgSrc: boardImage,
  },
  {
    title: "Circular Economy & Sustainability",
    text: "Create value that lasts. We are committed to a zero-waste battery ecosystem. Our services include end-of-life management, sustainable recycling, and innovative second-life applications.",
    imgSrc: storageImage,
  },
];

const Solutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [oldSectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  
  // Use viewport section management
  const { ref: viewportRef, isFullyVisible } = useViewportSection({
    threshold: 0.4,
    rootMargin: '0px 0px -5% 0px'
  });
  const { ref: containerRef, adjustedHeight } = useFitToViewport(700);

  // Combine refs
  const setCombinedRefs = (element: HTMLElement | null) => {
    if (oldSectionRef.current !== element) {
      (oldSectionRef as any).current = element;
    }
    viewportRef(element);
    containerRef(element);
  };

  const totalSlides = solutions.length;

  // Auto-slide effect
  useEffect(() => {
    if (!isIntersecting || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isIntersecting, isAutoPlaying, totalSlides]);

  // Start auto-play when section comes into view
  useEffect(() => {
    setIsAutoPlaying(isIntersecting);
  }, [isIntersecting]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleControlsHover = (isHovering: boolean) => {
    setIsAutoPlaying(!isHovering && isIntersecting);
  };

  return (
    <section 
      ref={setCombinedRefs} 
      id="solutions" 
      className="relative min-h-screen h-screen bg-background overflow-hidden flex flex-col"
    >
      {/* Section Title - Fixed at top with proper spacing */}
      <div className="flex-shrink-0 pt-16 md:pt-20 pb-3 md:pb-4 text-center">
        <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3">
          Our Solutions
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance leading-tight">
          Complete <span className="text-primary">Battery Technology</span> Ecosystem
        </h2>
      </div>
      {/* Navigation Controls - Hidden on mobile, visible on desktop */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 z-20 flex-col gap-2 md:gap-4
                   left-1/2 -translate-x-1/2 hidden md:flex"
        onMouseEnter={() => handleControlsHover(true)}
        onMouseLeave={() => handleControlsHover(false)}
      >
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-card/90 hover:bg-primary hover:text-primary-foreground 
                   text-foreground rounded-full flex items-center justify-center 
                   transition-all duration-300 shadow-lg hover:shadow-xl border border-border"
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={goToNext}
          className="w-12 h-12 bg-card/90 hover:bg-primary hover:text-primary-foreground 
                   text-foreground rounded-full flex items-center justify-center 
                   transition-all duration-300 shadow-lg hover:shadow-xl border border-border"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Slide Indicators - Fixed at bottom */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 md:hidden">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/50 hover:bg-primary/70 w-1'
            }`}
          />
        ))}
      </div>

      {/* Main Content - Takes remaining space */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Text Content */}
        <div className="w-full h-3/5 md:h-full md:w-1/2 relative overflow-hidden bg-card">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="absolute inset-0 px-3 py-2 md:p-6 lg:p-8 flex flex-col justify-center 
                       text-foreground transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(${(index - currentSlide) * 100}%)`,
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold 
                           mb-3 md:mb-4 leading-tight text-foreground">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed 
                          text-muted-foreground max-w-2xl">
                {solution.text}
              </p>
            </div>
          ))}
        </div>

        {/* Image Content */}
        <div className="w-full h-2/5 md:h-full md:w-1/2 relative overflow-hidden bg-muted">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(${(currentSlide - index) * 100}%)`,
              }}
            >
              <img
                src={solution.imgSrc}
                alt={solution.title}
                className="w-full h-full object-cover opacity-90"
                loading={Math.abs(index - currentSlide) <= 1 ? "eager" : "lazy"}
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-l from-background/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
