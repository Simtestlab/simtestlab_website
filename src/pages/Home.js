import React from 'react';

function Home() {
  return (
    <main>
      <section id="hero" className="contrast-section">
        <div className="video-container">
          <video autoplay muted loop id="heroVideo">
            <source src="assets/videos/background.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="hero-content">
          <h1>Innovative Simulation Testing Solutions for Your Industry</h1>
          <p>Delivering accurate, reliable, and comprehensive testing services to ensure your products meet the highest standards</p>
          <div className="hero-buttons">
            <a href="#about" className="btn">Learn More</a>
            <a href="#contact" className="btn">Contact Us</a>
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="content">
          <div className="about-header">
            <h2>OUR SERVICES</h2>
            <div className="tabs">
              <button className="tab-button active" data-tab="it-services">MODEL BASED DEVELOPMENT</button>
              <button className="tab-button" data-tab="business-services">BATTERY MANAGEMENT SYSTEM</button>
              <button className="tab-button" data-tab="product-information">TESTING AUTOMATION</button>
            </div>
          </div>

          <div className="services-images" data-category="it-services">
            <div className="service-item">
              <img src="assets/images/models/board.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Model in Loop</h5>
                <p>Validates the model by testing its behavior and functionality without any physical hardware or software implementation.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/software.jpg" alt="Software in Loop" />
              <div className="service-caption">
                <h5>Software in Loop</h5>
                <p>Evaluates the correctness of the generated code by executing it within a simulation model.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/testing.jpg" alt="Hardware in Loop" />
              <div className="service-caption">
                <h5>Hardware in Loop</h5>
                <p>Integrates the actual hardware components with the control software in a real-time simulation environment.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/testing.jpg" alt="IT Outsourcing Services" />
              <div className="service-caption">
                <h5>Process in Loop</h5>
                <p>Innovative testing methods for modern development.</p>
              </div>
            </div>
          </div>

          <div className="services-images" data-category="business-services" style={{ display: 'none' }}>
            <div className="service-item">
              <img src="assets/images/models/monitoring.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Monitoring</h5>
                <p>Comprehensive testing solutions for battery cells, including performance, safety, and reliability tests.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/battery.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Management</h5>
                <p>Advanced testing services for battery packs to ensure optimal performance and longevity.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/security.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Protection</h5>
                <p>Advanced testing services for battery packs to ensure optimal performance and longevity.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/connections.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Communication</h5>
                <p>Advanced testing services for battery packs to ensure optimal performance and longevity.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/prognostics.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Prognostics</h5>
                <p>Advanced testing services for battery packs to ensure optimal performance and longevity.</p>
              </div>
            </div>
          </div>

          <div className="services-images" data-category="product-information" style={{ display: 'none' }}>
            <div className="service-item">
              <img src="assets/images/models/function.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Automated Functional Testing</h5>
                <p>Automate your functional testing processes to improve accuracy and efficiency.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/analysis.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Requirement Specification and Analysis</h5>
                <p>Integrate automated testing into your CI pipeline for faster and more reliable releases.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/modeling.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Modeling and Simulation</h5>
                <p>Integrate automated testing into your CI pipeline for faster and more reliable releases.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/scripting.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Test Case and Script Development</h5>
                <p>Integrate automated testing into your CI pipeline for faster and more reliable releases.</p>
              </div>
            </div>
            <div className="service-item">
              <img src="assets/images/models/environment.jpg" alt="Model in Loop" />
              <div className="service-caption">
                <h5>Test Environment Setup</h5>
                <p>Integrate automated testing into your CI pipeline for faster and more reliable releases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="employees">
        <div className="container">
          <div className="section-header">
            <h2 className="title">Our Employees</h2>
          </div>
          <div className="testimonials-content">
            <div className="swiper testimonials-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide testimonials-item">
                  <div className="info">
                    <img src="assets/images/profile1.jpg" alt="Image" />
                    <div className="text-box">
                      <h3 className="name">John Doe</h3>
                      <span className="job">Web Developer</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis consequatur laudantium excepturi alias expedita placeat earum sit, voluptate molestias?</p>
                </div>
                <div className="swiper-slide testimonials-item">
                  <div className="info">
                    <img src="assets/images/profile2.jpg" alt="Image" />
                    <div className="text-box">
                      <h3 className="name">John Doe</h3>
                      <span className="job">Web Developer</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis consequatur laudantium excepturi alias expedita placeat earum sit, voluptate molestias?</p>
                </div>
                <div className="swiper-slide testimonials-item">
                  <div className="info">
                    <img src="assets/images/profile3.jpg" alt="Image" />
                    <div className="text-box">
                      <h3 className="name">John Doe</h3>
                      <span className="job">Web Developer</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis consequatur laudantium excepturi alias expedita placeat earum sit, voluptate molestias?</p>
                </div>
                <div className="swiper-slide testimonials-item">
                  <div className="info">
                    <img src="assets/images/profile4.jpg" alt="Image" />
                    <div className="text-box">
                      <h3 className="name">Jane Doe</h3>
                      <span class="job">Project Manager</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis consequatur laudantium excepturi alias expedita placeat earum sit, voluptate molestias?</p>
                </div>
                <div className="swiper-slide testimonials-item">
                  <div className="info">
                    <img src="assets/images/profile5.jpg" alt="Image" />
                    <div className="text-box">
                      <h3 className="name">Alice Smith</h3>
                      <span className="job">Designer</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis consequatur laudantium excepturi alias expedita placeat earum sit, voluptate molestias?</p>
                </div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </section>

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
              <div>
                <h2>Statistics</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in quidem maiores ratione? Debitis veniam, modi, temporibus, dolore doloribus explicabo officiis nobis iure iste eos et voluptas ex est dolor.</p>
              </div>
              <div>
                <h2>Data Analysis</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sapiente consectetur doloremque possimus facere id earum velit aut eveniet a voluptatem illo unde inventore dicta laboriosam numquam voluptate, placeat aspernatur?</p>
              </div>
              <div>
                <h2>Precision</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sapiente consectetur doloremque possimus facere id earum velit aut eveniet a voluptatem illo unde inventore dicta laboriosam numquam voluptate, placeat aspernatur?</p>
              </div>
              <div>
                <h2>Expert Team</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sapiente consectetur doloremque possimus facere id earum velit aut eveniet a voluptatem illo unde inventore dicta laboriosam numquam voluptate, placeat aspernatur?</p>
              </div>
              <div>
                <h2>Trainned Professionals</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sapiente consectetur doloremque possimus facere id earum velit aut eveniet a voluptatem illo unde inventore dicta laboriosam numquam voluptate, placeat aspernatur?</p>
              </div>
            </div>
            <div className="right">
              <div>
                <img src="assets/images/image1.png" alt="" />
              </div>
              <div>
                <img src="assets/images/image2.png" alt="" />
              </div>
              <div>
                <img src="assets/images/image3.png" alt="" />
              </div>
              <div>
                <img src="assets/images/image4.png" alt="" />
              </div>
              <div>
                <img src="assets/images/image5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
