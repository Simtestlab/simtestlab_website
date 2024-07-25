import React from 'react';
import content from '../data/content';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <footer id="contact">
      <div className="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li>{content.contact.address}</li>
          <li>{content.contact.email}</li>
          <li>{content.contact.phone}</li>
          <li>{content.contact.copyright}</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          {content.contact.companyLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-col">
        <h4>Follow us</h4>
        <div className="links">
          {content.contact.socialLinks.map((link, index) => (
            <a key={index} href={link.href}><i className={link.icon}></i></a>
          ))}
        </div>
      </div>
      <div className="footer-col">
        <h4>Get In Touch</h4>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="contact-form">Send Message</button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;
