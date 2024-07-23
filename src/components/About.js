import React from 'react';
import content from '../data/content';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="content">
        <div className="about-header">
          <h2>{content.about.title}</h2>
          <div className="tabs">
            {content.about.tabs.map((tab, index) => (
              <button className="tab-button" key={index} data-tab={tab.id}>{tab.label}</button>
            ))}
          </div>
        </div>
        {Object.keys(content.about.services).map(category => (
          <div key={category} className="services-images" data-category={category}>
            {content.about.services[category].map((service, index) => (
              <div className="service-item" key={index}>
                <img src={service.imgSrc} alt={service.title} />
                <div className="service-caption">
                  <h5>{service.title}</h5>
                  <p>{service.text}</p>
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
