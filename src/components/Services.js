import React, { useEffect, useState, useRef } from 'react';
import content from '../data/content';
import '../styles/Services.css';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = content.services.items.length;
  const intervalId = useRef(null);
  const isHovering = useRef(false);

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

  const startAutoSlide = () => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        if (!isHovering.current) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }
      }, 3000);
    }
  };

  const stopAutoSlide = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  useEffect(() => {
    updateSlides();
    startAutoSlide();

    const upButton = document.querySelector('.controls .up');
    const downButton = document.querySelector('.controls .down');

    const handleMouseEnter = () => {
      isHovering.current = true;
      stopAutoSlide();
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      startAutoSlide();
    };

    upButton.addEventListener('mouseenter', handleMouseEnter);
    downButton.addEventListener('mouseenter', handleMouseEnter);
    upButton.addEventListener('mouseleave', handleMouseLeave);
    downButton.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stopAutoSlide();
      upButton.removeEventListener('mouseenter', handleMouseEnter);
      downButton.removeEventListener('mouseenter', handleMouseEnter);
      upButton.removeEventListener('mouseleave', handleMouseLeave);
      downButton.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [currentSlide, totalSlides, updateSlides, startAutoSlide]);

  useEffect(() => {
    updateSlides();
  }, [currentSlide, updateSlides]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutoSlide();
          } else {
            stopAutoSlide();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('#services'));

    return () => {
      if (document.querySelector('#services')) {
        observer.unobserve(document.querySelector('#services'));
      }
    };
  }, [startAutoSlide]);

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
