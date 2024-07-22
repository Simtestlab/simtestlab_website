import React, { useState } from 'react';
import content from '../data/content';
import '../styles/About.css';

function About() {
  const [activeTab, setActiveTab] = useState("it-services");

  return (
    <section className="about-section" id="about">
      <div className="content">
        <div className="about-header">
          <h2>{content.about.title}</h2>
          <div className="tabs">
            {content.about.tabs.map((tab) => (
              <button key={tab.id} className={`tab-button ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {content.about.services[activeTab].map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.imgSrc} alt={service.title} />
            <div className="service-caption">
              <h5>{service.title}</h5>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;