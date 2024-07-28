import React, { useState, useEffect } from 'react';
import content from '../data/content';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log('isSubmitted state changed:', isSubmitted);
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Email sent successfully');
        setIsSubmitted(true);
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      alert('Error sending email');
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn" disabled={isSubmitted}>
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;
