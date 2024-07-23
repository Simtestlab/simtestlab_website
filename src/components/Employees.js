import React from 'react';
import content from '../data/content';
import '../styles/Employees.css';

const Employees = () => {
  return (
    <section className="testimonials" id="employees">
      <div className="container">
        <div className="section-header">
          <h2 className="title">{content.employees.title}</h2>
        </div>
        <div className="testimonials-content">
          <div className="swiper testimonials-slider">
            <div className="swiper-wrapper">
              {content.employees.members.map((member, index) => (
                <div className="swiper-slide testimonials-item" key={index}>
                  <div className="info">
                    <img src={member.imgSrc} alt={member.name} />
                    <div className="text-box">
                      <h3 className="name">{member.name}</h3>
                      <span className="job">{member.job}</span>
                    </div>
                  </div>
                  <p>{member.feedback}</p>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employees;
