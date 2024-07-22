import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

const Slider = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper('.testimonials-slider', {
      grabCursor: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      effect: 'slide',
      speed: 600,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  useEffect(() => {
    const upButton = document.querySelector('.controls .up');
    const downButton = document.querySelector('.controls .down');
    const leftSlides = document.querySelectorAll('.wrapper .left > div');
    const rightSlides = document.querySelectorAll('.wrapper .right > div');
    let currentSlide = 0;
    const totalSlides = leftSlides.length;
    let intervalId = null;

    function updateSlides() {
      leftSlides.forEach((slide, index) => {
        slide.style.transform = `translateY(${(index - currentSlide) * 100}%)`;
      });
      rightSlides.forEach((slide, index) => {
        slide.style.transform = `translateY(${(currentSlide - index) * 100}%)`;
      });
    }

    function startAutoSlide() {
      if (!intervalId) {
        intervalId = setInterval(() => {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateSlides();
        }, 3000);
      }
    }

    function stopAutoSlide() {
      clearInterval(intervalId);
      intervalId = null;
    }

    upButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
      }
    });

    downButton.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlides();
      }
    });

    upButton.addEventListener('mouseenter', stopAutoSlide);
    downButton.addEventListener('mouseenter', stopAutoSlide);
    upButton.addEventListener('mouseleave', startAutoSlide);
    downButton.addEventListener('mouseleave', startAutoSlide);

    // Initialize the slides' positions
    updateSlides();

    // Start auto sliding when the section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoSlide();
        } else {
          stopAutoSlide();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('#services'));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Tab switching functionality
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-tab');

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.services-images').forEach(item => {
          if (item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Initialize by showing the first tab's content
    document.querySelector('.tab-button[data-tab="it-services"]').click();

    return () => {
      buttons.forEach(button => button.removeEventListener('click', null));
    };
  }, []);

  return (
    <div ref={swiperContainerRef} className="swiper-container testimonials-slider">
      {/* Swiper content here */}
    </div>
  );
};

export default Slider;
