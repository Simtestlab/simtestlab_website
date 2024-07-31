import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper';
import content from '../data/content';
import '../styles/Employees.css';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow]);

const Employees = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const closePopup = useCallback(() => {
    setActiveMember(null);
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (swiperInstance && swiperInstance.autoplay) {
      const handleMouseEnter = () => {
        swiperInstance.autoplay.stop();
      };

      const handleMouseLeave = () => {
        if (isVisible && activeMember === null) {
          swiperInstance.autoplay.start();
        }
      };

      const swiperSlides = document.querySelectorAll('.swiper-slide');
      swiperSlides.forEach((slide) => {
        slide.addEventListener('mouseenter', handleMouseEnter);
        slide.addEventListener('mouseleave', handleMouseLeave);
      });

      const prevButton = document.querySelector('.swiper-button-prev');
      const nextButton = document.querySelector('.swiper-button-next');

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', closePopup);
        nextButton.addEventListener('click', closePopup);
      }

      return () => {
        swiperSlides.forEach((slide) => {
          slide.removeEventListener('mouseenter', handleMouseEnter);
          slide.removeEventListener('mouseleave', handleMouseLeave);
        });

        if (prevButton && nextButton) {
          prevButton.removeEventListener('click', closePopup);
          nextButton.removeEventListener('click', closePopup);
        }
      };
    }
  }, [swiperInstance, isVisible, activeMember, closePopup]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
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
      { threshold: 0.5 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [swiperInstance]);

  const handleButtonClick = (index, event) => {
    const buttonRect = event.target.getBoundingClientRect();
    const parentRect = event.target.parentNode.getBoundingClientRect();
    setPopupPosition({
      top: buttonRect.top + window.scrollY,
      left: buttonRect.left + window.scrollX,
      width: parentRect.width,
      height: parentRect.height,
    });
    setActiveMember(index);
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

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
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              const activeSlide = document.querySelector('.swiper-slide-active .testimonials-item');
              if (activeSlide) {
                activeSlide.classList.add('testimonials-item-active');
              }
              const inactiveSlides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-active) .testimonials-item');
              inactiveSlides.forEach((slide) => {
                slide.classList.remove('testimonials-item-active');
              });
            }}
          >
            {content.employees.members.map((member, index) => (
              <SwiperSlide key={index} className="swiper-slide testimonials-item">
                <div className="info">
                  <img src={member.imgSrc} alt="Employee" />
                  <div className="text-box">
                    <h3 className="name">{member.name}</h3>
                    <span className="job"><strong>{member.job}</strong></span>
                    <p>{member.description}</p>
                  </div>
                </div>
                <button
                  className="see-more-button"
                  onClick={(event) => handleButtonClick(index, event)}
                >
                  See More
                </button>
                {activeMember === index && (
                  <div
                    className={`popup-container ${activeMember !== null ? 'open' : ''}`}
                    style={{
                      top: popupPosition.top,
                      left: popupPosition.left,
                      width: popupPosition.width,
                      height: popupPosition.height,
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    <div className="popup-content">
                      <button className="close-popup" onClick={closePopup}>&times;</button>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Employees;
