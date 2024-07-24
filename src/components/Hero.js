import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import content from '../data/content';

const Hero = () => {
  const slides = content.hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slides every 4 seconds to match the CSS animation duration

    return () => clearInterval(interval);
  }, [slides.length]);

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
        <div className="hero-carousel">
          <div className="hero-slide">
            <h1 className="hero-title">{slides[currentSlide].title}</h1>
            <p className="hero-text">{slides[currentSlide].text}</p>
          </div>
        </div>
        <div className="hero-buttons">
          {content.hero.buttons.map((button, index) => (
            <a key={index} href={button.href} className="btn">{button.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
