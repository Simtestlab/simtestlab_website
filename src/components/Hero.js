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
    <section
      id="hero"
      className="contrast-section"
      style={{
        position: 'relative',
        backgroundImage: `url(${content.hero.imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="background-blur"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: 'blur(5px)', // Apply blur to the background image
          zIndex: -1,
        }}
      ></div>
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)', // Dark overlay for contrast
          zIndex: 1,
        }}
      ></div>
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          margin: '0 auto',
          paddingBottom: '150px', // Reserve space for buttons at the bottom
        }}
      >
        <div className="hero-carousel" key={currentSlide}>
          <Typography variant="h2" className="hero-title">
            {slides[currentSlide].title}
          </Typography>
          <Typography variant="subtitle1" className="hero-text">
            {slides[currentSlide].text}
          </Typography>
        </div>
      </div>
      <div
        className="hero-buttons"
        style={{
          position: 'absolute',
          bottom: '50px', // Fix the position from the bottom
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        {content.hero.buttons.map((button, index) => (
          <Button
            key={index}
            variant="contained"
            href={button.href}
            onClick={(e) => scrollToSection(e, button.href)}
            className="MuiButton-root"
            style={{
              backgroundColor: '#E3D1B8', // Paper-like color based on the image
              color: '#262626', // Dark text color
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '700',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              margin: '0 10px',
            }}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
