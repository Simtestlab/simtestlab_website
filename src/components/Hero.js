import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import content from '../data/content';
import '../styles/Hero.css';

const Hero = () => {
  const slides = content.hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Smooth scrolling to section
  const scrollToSection = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    const navbar = document.querySelector('.MuiAppBar-root');

    if (targetElement && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const scrollTop = targetElement.offsetTop - navbarHeight + 1;

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="contrast-section">
      <div className="video-container">
        <video autoPlay muted loop id="heroVideo">
          <source src={content.hero.videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-carousel" key={currentSlide}>
          <Typography variant="h2" className="hero-title">
            {slides[currentSlide].title}
          </Typography>
          <Typography variant="subtitle1" className="hero-text">
            {slides[currentSlide].text}
          </Typography>
        </div>
        <div className="hero-buttons">
          {content.hero.buttons.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              href={button.href}
              onClick={(e) => scrollToSection(e, button.href)}
              className="MuiButton-root"
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
