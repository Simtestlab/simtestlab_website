import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li>SWEDEN (HQ) - Sprintergången 7</li>
          <li>ramesh@simtestlab.se</li>
          <li>+46 (0) 73 9768 263</li>
          <li>Copyright 2022. All Rights Reserved.</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#employees">Employees</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Follow us</h4>
        <div className="links">
          <a href="https://www.linkedin.com/company/simtestlab"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
