import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Solution {
  title: string;
  text: string;
  imgSrc: string;
}

const solutions: Solution[] = [
  {
    title: "Intelligent Energy Management",
    text: "Control every watt. Our advanced Energy Management Systems (EMS) optimize energy distribution, integrate renewables, and ensure grid stability. From industrial microgrids to smart commercial buildings, we deliver efficiency and resilience.",
    imgSrc: "/images/image1.png",
  },
  {
    title: "Advanced Battery Intelligence", 
    text: "Unlock peak performance and safety at the core. Our cutting-edge Battery Management Systems (BMS) provide high-fidelity monitoring, precision balancing, and predictive diagnostics. We ensure your batteries operate at maximum efficiency and longevity.",
    imgSrc: "/images/image2.jpg",
  },
  {
    title: "Scalable Storage Solutions",
    text: "Power for any scale. We design and deploy robust Battery Energy Storage Systems (BESS) tailored to your needs. From utility-scale systems that stabilize the grid to behind-the-meter solutions for businesses, we build the energy reserves of tomorrow.",
    imgSrc: "/images/image3.jpg",
  },
  {
    title: "Assurance, Integration & Safety",
    text: "Build with confidence. Our world-class testing, validation, and certification services ensure your battery systems meet the highest global standards for safety, performance, and reliability.",
    imgSrc: "/images/image4.jpg",
  },
  {
    title: "Circular Economy & Sustainability",
    text: "Create value that lasts. We are committed to a zero-waste battery ecosystem. Our services include end-of-life management, sustainable recycling, and innovative second-life applications.",
    imgSrc: "/images/image5.jpg",
  },
];

const SolutionsSimple = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = solutions.length;

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section 
      id="solutions" 
      className="relative h-screen bg-[#033f63] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 md:gap-4">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-[#1b828d] hover:text-white 
                   text-[#033f63] rounded-full flex items-center justify-center 
                   transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-[#1b828d] hover:text-white 
                   text-[#033f63] rounded-full flex items-center justify-center 
                   transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Next slide"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="h-full flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-1/2 relative overflow-hidden bg-[#1b828d]">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-center 
                       text-white transition-all duration-500 ease-in-out ${
                         index === currentSlide 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-8 pointer-events-none'
                       }`}
              style={{
                transform: `translateY(${(index - currentSlide) * 100}%)`,
              }}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-sm md:text-base font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px bg-white/30 flex-1 max-w-12" />
                  <span className="text-xs md:text-sm">
                    {solutions.length} Solutions
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold 
                             leading-tight">
                  {solution.title}
                </h2>
                
                <p className="text-sm md:text-lg lg:text-xl leading-relaxed 
                            text-white/90 max-w-2xl">
                  {solution.text}
                </p>
                
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 
                                   hover:bg-white/20 text-white border border-white/20 
                                   rounded-full transition-all duration-300 hover:scale-105">
                    <span>Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateY(${(currentSlide - index) * 100}%)`,
                opacity: Math.abs(index - currentSlide) <= 1 ? 1 : 0,
              }}
            >
              <img
                src={solution.imgSrc}
                alt={solution.title}
                className="w-full h-full object-cover"
                loading={Math.abs(index - currentSlide) <= 1 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1b828d]/10" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 right-6 text-white/80 text-sm">
                Image {index + 1} of {totalSlides}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSimple;