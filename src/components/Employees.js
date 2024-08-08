import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper';
import '../styles/Employees.css';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow]);

const Employees = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from Django API
    fetch('http://127.0.0.1:8000/api/employees/')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employee data:', error));
  }, []);

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

  const handleButtonClick = (index) => {
    setActiveMember(index);
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  return (
    <section className="testimonials" id="employees" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="title">Who we are</h2>
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
            speed={1500}
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
            {employees.map((employee, index) => (
              <SwiperSlide key={index} className="swiper-slide testimonials-item">
                <div className="info">
                  <img src={employee.img_src} alt={employee.name} />
                  <div className="text-box">
                    <h3 className="name">{employee.name}</h3>
                    <span className="job"><strong>{employee.job}</strong></span>
                    <p>{employee.description}</p>
                  </div>
                </div>
                <button
                  className="see-more-button"
                  onClick={() => handleButtonClick(index)}
                >
                  See More
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {activeMember !== null && (
        <div className="popup-container open">
          <div className="popup-content">
            <button className="close-popup" onClick={closePopup}>&times;</button>
            <h2>{employees[activeMember].name}</h2>
            <img src={employees[activeMember].img_src} alt={employees[activeMember].name} className="popup-img"/>
            {employees[activeMember].job && (
              <h4>{employees[activeMember].job}</h4>
            )}
            <p>{employees[activeMember].full_description || employees[activeMember].description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Employees;
