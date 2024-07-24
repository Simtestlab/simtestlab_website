import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import content from '../data/content';
import '../styles/Employees.css';

SwiperCore.use([Pagination, Autoplay, EffectCoverflow]);

const Employees = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (swiperInstance && swiperInstance.autoplay) {
      const handleMouseEnter = () => {
        swiperInstance.autoplay.stop();
      };

      const handleMouseLeave = () => {
        if (isVisible && swiperInstance.autoplay) {
          swiperInstance.autoplay.start();
        }
      };

      const swiperSlides = document.querySelectorAll('.swiper-slide');
      swiperSlides.forEach((slide) => {
        slide.addEventListener('mouseenter', handleMouseEnter);
        slide.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        swiperSlides.forEach((slide) => {
          slide.removeEventListener('mouseenter', handleMouseEnter);
          slide.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, [swiperInstance, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setIsVisible(true);
            if (swiperInstance && swiperInstance.autoplay) {
              swiperInstance.autoplay.start();
            }
          } else {
            setIsVisible(false);
            if (swiperInstance && swiperInstance.autoplay) {
              swiperInstance.autoplay.stop();
            }
          }
        });
      },
      { threshold: 1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [swiperInstance]);

  return (
    <section className="testimonials" id="employees" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{content.employees.title}</h2>
        </div>
        <div className="testimonials-content">
          <Swiper
            className="testimonials-slider"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={setSwiperInstance}
          >
            {content.employees.members.map((member, index) => (
              <SwiperSlide key={index} className="swiper-slide testimonials-item">
                <div className="info">
                  <img src={member.imgSrc} alt="Employee" />
                  <div className="text-box">
                    <h3 className="name">{member.name}</h3>
                    <span className="job">{member.job}</span>
                  </div>
                </div>
                <p>{member.feedback}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Employees;
