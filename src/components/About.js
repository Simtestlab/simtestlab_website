import React, { useEffect } from 'react';
import content from '../data/content';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    const servicesSection = document.querySelector('.services-section');
    const servicesGrid = document.querySelector('.services-grid');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          servicesGrid.classList.add('animate-services');
          observer.unobserve(servicesSection); // Stop observing once animation is triggered
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(servicesSection);
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">{content.about.title}</h2>
      <div className="services-grid">
        {content.about.services.map((service, index) => (
          <div
            className="service-item"
            key={index}
            style={{ backgroundImage: `url(${service.imgSrc})` }}
          >
            <div className="service-caption">
              <h3>{service.category}</h3>
              <ul>
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
