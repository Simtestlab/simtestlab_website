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

  return (
    <section className="about-section" id="services" style={{ height: '100vh' }}>
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