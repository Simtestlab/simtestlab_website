import React from 'react';
import content from '../data/content';
import '../styles/Contact.css';

function Contact() {
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
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div className="footer-col">
        <h4>Follow us</h4>
        <div className="links">
          {content.contact.socialLinks.map((link, index) => (
            <a href={link.href} key={index}><i className={link.icon}></i></a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Contact;