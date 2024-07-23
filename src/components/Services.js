import React from 'react';
import content from '../data/content';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="slider">
        <div className="controls">
          <div className="up">
            <i className="fas fa-chevron-up"></i>
          </div>
          <div className="down">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="wrapper" style={{ backgroundColor: '#287094' }}>
          <div className="left">
            {content.services.items.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="right">
            {content.services.items.map((item, index) => (
              <div key={index}>
                <img src={item.imgSrc} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
