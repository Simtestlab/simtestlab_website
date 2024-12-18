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
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h4>Main Branch</h4>
          <ul>
            <li>{content.contact.main_branch.name}</li>
            <li>{content.contact.main_branch.org_num}</li>
            <li>{content.contact.main_branch.vat_number}</li>
            <li>{content.contact.main_branch.address}</li>
            <li>{content.contact.main_branch.email}</li>
            <li>{content.contact.main_branch.phone}</li>
            <li>{content.contact.main_branch.copyright}</li>
          </ul>
        </div>
        <div className="contact-form">
          <h4 className="form-header">Get In Touch</h4>
          <form onSubmit={handleSubmit}>
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
      </div>
      <footer>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>India Branch</h4>
            <ul>
              <li>{content.contact.branch1.name}</li>
              <li>{content.contact.branch1.address_line_1}</li>
              <li>{content.contact.branch1.address_line_2}</li>
              <li>{content.contact.branch1.email}</li>
              <li>{content.contact.branch1.phone}</li>        
              <li>{content.contact.branch1.cin_number}</li>
              <li>{content.contact.branch1.gst_number}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Battery Lab Facility</h4>
            <ul>
              <li>{content.contact.branch2.name}</li>
              <li>{content.contact.branch2.address_line_1}</li>
              <li>{content.contact.branch2.address_line_2}</li>
              <li>{content.contact.branch2.email}</li>
              <li>{content.contact.branch2.phone}</li>          
              <li>{content.contact.branch2.cin_number}</li> 
              <li>{content.contact.branch2.gst_number}</li> 
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
        </div>
      </footer>
    </section>
  );
};

export default Contact;
