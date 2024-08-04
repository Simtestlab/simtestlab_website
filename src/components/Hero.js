import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid, Fade } from '@mui/material';
import content from '../data/content';
import '../styles/Hero.css';

const Hero = () => {
  const slides = content.hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsVisible(true);
      }, 800);
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
      <Grid container className="hero-content" alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Fade in={isVisible}>
            <div className="hero-carousel">
              <Typography variant="h2" className="hero-title" style={{ marginBottom: '20px' }}>
                {slides[currentSlide].title}
              </Typography>
              <Typography variant="subtitle1" className="hero-text" style={{ marginBottom: '30px' }}>
                {slides[currentSlide].text}
              </Typography>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} className="hero-buttons" container justifyContent="center">
          {content.hero.buttons.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              href={button.href}
              onClick={(e) => scrollToSection(e, button.href)}
              style={{
                padding: '0.75rem 1.5rem',
                margin: '0 0.75rem',
                background: 'linear-gradient(135deg, #1497B9, #1BB48D)',
                color: '#EBF2FA',
                borderRadius: '8px',
                fontSize: '14px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textTransform: 'uppercase',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, #1BB48D, #1497B9)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'linear-gradient(135deg, #1497B9, #1BB48D)';
              }}
            >
              {button.label}
            </Button>
          ))}
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
