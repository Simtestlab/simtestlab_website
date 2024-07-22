import React from 'react';
import content from '../data/content';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="contrast-section">
      <div className="video-container">
        <video autoplay muted loop id="heroVideo">
          <source src={content.hero.videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="hero-content">
        <h1>{content.hero.title}</h1>
        <p>{content.hero.text}</p>
        <div className="hero-buttons">
          {content.hero.buttons.map((button, index) => (
            <a href={button.href} className="btn" key={index}>{button.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;