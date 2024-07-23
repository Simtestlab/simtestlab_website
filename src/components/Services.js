import React, { useEffect, useState } from 'react';
import content from '../data/content';
import '../styles/Services.css';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = content.services.items.length;

  useEffect(() => {
    const updateSlides = () => {
      const leftSlides = document.querySelectorAll('.wrapper .left > div');
      const rightSlides = document.querySelectorAll('.wrapper .right > div');
      leftSlides.forEach((slide, index) => {
        slide.style.transform = `translateY(${(index - currentSlide) * 100}%)`;
      });
      rightSlides.forEach((slide, index) => {
        slide.style.transform = `translateY(${(currentSlide - index) * 100}%)`;
      });
    };

    updateSlides();
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const updateSlides = () => {
      const leftSlides = document.querySelectorAll('.wrapper .left > div');
      const rightSlides = document.querySelectorAll('.wrapper .right > div');
      leftSlides.forEach((slide, index) => {
        slide.style.transform = `translateY(${(index - currentSlide) * 100}%)`;
      });
      rightSlides.forEach((slide, index) => {
        slide.style.transform = `translateY(${(currentSlide - index) * 100}%)`;
      });
    };

    updateSlides();
  }, [currentSlide]);

  const handleUpClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDownClick = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section id="services">
      <div className="slider">
        <div className="controls">
          <div className="up" onClick={handleUpClick}>
            <i className="fas fa-chevron-up"></i>
          </div>
          <div className="down" onClick={handleDownClick}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="wrapper" style={{ backgroundColor: '#287094' }}>
          <div className="left">
            {content.services.items.map((service, index) => (
              <div key={index}>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
          <div className="right">
            {content.services.items.map((service, index) => (
              <div key={index}>
                <img src={service.imgSrc} alt={service.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
