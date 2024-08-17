import React, { useState, useEffect } from 'react';
import content from '../data/content';
import '../styles/About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('it-services');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Simulate the initial click to show the first tab content
    document.querySelector('.tab-button[data-tab="it-services"]').click();
  }, []);

  useEffect(() => {
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.25 // Adjusted threshold to 25% for better performance
    });

    // Apply the observer only if the device is mobile
    if (window.innerWidth <= 767.98) {
      serviceItems.forEach(item => {
        observer.observe(item);
      });
    }

    return () => {
      serviceItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="about-section" id="services">
      <div className="content">
        <div className="about-header">
          <h2>{content.about.title}</h2>
          <div className="tabs">
            {content.about.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                data-tab={tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {Object.keys(content.about.services).map((category) => (
          <div
            key={category}
            className={`services-images ${activeTab === category ? 'active' : 'hidden'}`}
            data-category={category}
          >
            {content.about.services[category].map((service, index) => (
              <div className="service-item" key={index}>
                <img src={service.imgSrc} alt={service.title} />
                <div className="service-caption">
                  <h5>{service.title}</h5>
                  <p className="hidden-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
