import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

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

const SolutionsSwiper = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .solutions-swiper {
            height: 100vh;
          }
          
          .solutions-swiper .swiper-button-prev,
          .solutions-swiper .swiper-button-next {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            color: #033f63;
            transition: all 0.3s ease;
            margin: 0;
            padding: 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .solutions-swiper .swiper-button-prev {
            transform: translate(-50%, calc(-50% - 30px));
          }
          
          .solutions-swiper .swiper-button-next {
            transform: translate(-50%, calc(-50% + 30px));
          }
          
          .solutions-swiper .swiper-button-prev:hover,
          .solutions-swiper .swiper-button-next:hover {
            background: #1b828d;
            color: white;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
          }
          
          .solutions-swiper .swiper-button-prev::after,
          .solutions-swiper .swiper-button-next::after {
            content: '';
          }
          
          .solutions-swiper .swiper-pagination {
            bottom: 20px;
            z-index: 20;
          }
          
          .solutions-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.3s ease;
          }
          
          .solutions-swiper .swiper-pagination-bullet-active {
            background: white;
            width: 24px;
            border-radius: 6px;
          }
          
          @media (min-width: 768px) {
            .solutions-swiper .swiper-pagination {
              display: none;
            }
          }
          
          @media (max-width: 768px) {
            .solutions-swiper .swiper-button-prev,
            .solutions-swiper .swiper-button-next {
              display: none;
            }
          }
        `
      }} />
      
      <section id="solutions" className="relative h-screen bg-[#033f63] overflow-hidden">
      
      <Swiper
        className="solutions-swiper"
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        direction="vertical"
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={600}
        effect="slide"
        grabCursor={true}
        touchRatio={1}
        threshold={5}
        longSwipesRatio={0.5}
      >
        {solutions.map((solution, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col md:flex-row">
              {/* Text Content */}
              <div className="w-full md:w-1/2 bg-[#1b828d] p-6 md:p-12 lg:p-16 
                            flex flex-col justify-center text-white">
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold 
                             mb-4 md:mb-6 leading-tight">
                  {solution.title}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl leading-relaxed 
                            text-white/90 max-w-2xl">
                  {solution.text}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-1/2 relative overflow-hidden">
                <img
                  src={solution.imgSrc}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1b828d]/20 to-transparent" />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev">
          <ChevronUp size={20} />
        </div>
        <div className="swiper-button-next">
          <ChevronDown size={20} />
        </div>
      </Swiper>
    </section>
    </>
  );
};

export default SolutionsSwiper;