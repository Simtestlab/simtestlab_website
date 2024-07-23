import React from 'react';
import '../styles/Hero.css';
function Hero() {
  return (
    <section id="hero" className="contrast-section">
      <div className="video-container">
        <video autoPlay muted loop id="heroVideo">
          <source src="video/background.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="hero-content">
        <h1>Innovative Simulation Testing Solutions for Your Industry</h1>
        <p>Delivering accurate, reliable, and comprehensive testing services to ensure your products meet the highest standards</p>
        <div className="hero-buttons">
          <a href="#about" className="btn">Learn More</a>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
