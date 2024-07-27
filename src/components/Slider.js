import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import LazyLoad from 'react-lazyload';
import content from '../data/content';

const Slider = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper('.testimonials-slider', {
      grabCursor: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      effect: 'slide',
      speed: 600,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div ref={swiperContainerRef} className="swiper-container testimonials-slider">
      <div className="swiper-wrapper">
        {content.employees.members.map((member, index) => (
          <div className="swiper-slide testimonials-item" key={index}>
            <div className="info">
              <LazyLoad height={200} offset={100}>
                <img src={member.imgSrc} alt={member.name} />
              </LazyLoad>
              <div className="text-box">
                <h3 className="name">{member.name}</h3>
                <span className="job">{member.job}</span>
              </div>
            </div>
            <p>{member.feedback}</p>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slider;
