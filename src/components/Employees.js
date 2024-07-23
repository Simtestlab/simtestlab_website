import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import content from '../data/content';
import '../styles/Employees.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Employees = () => {
  return (
    <section className="testimonials" id="employees">
      <div className="container">
        <div className="section-header">
          <h2 className="title">{content.employees.title}</h2>
        </div>
        <div className="testimonials-content">
          <Swiper
            className="testimonials-slider"
            spaceBetween={10}
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {content.employees.members.map((member, index) => (
              <SwiperSlide key={index} className="swiper-slide testimonials-item">
                <div className="info">
                  <img src={member.imgSrc} alt="Employee" />
                  <div className="text-box">
                    <h3 className="name">{member.name}</h3>
                    <span className="job">{member.job}</span>
                  </div>
                </div>
                <p>{member.feedback}</p>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Employees;
