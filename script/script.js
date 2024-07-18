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

document.addEventListener('DOMContentLoaded', () => {
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
});
