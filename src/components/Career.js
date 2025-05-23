import React, { useState } from 'react';
import content from '../data/content';
import { AppBar, Toolbar, Typography, Button, Box  } from '@mui/material';
import '../styles/Career.css';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const Career = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        dob: '',
        addressLine1: '',
        addressLine2: '',
        district: '',
        state: '',
        pincode: '',
        country: '',
        education: '',
        position: '',
        employment: '',
        notice_period: '',
        current_ctc: '',
        expected_ctc: '',
        passport: '',
        license: '',
        phone: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleCopy = () => {
        navigator.clipboard.writeText('sajendraprasad.chandran@simtestlab.se');
        alert('Email copied to clipboard');
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/.netlify/functions/send-career-page', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (response.ok) {
            alert('Form submitted succesfully. Kindly send your resume to sajendraprasad.chandran@simtestlab.se');
            setIsSubmitted(true);
          } else {
            alert('Error sending email. Please try again.');
          }
        } catch (error) {
          alert('Error sending email', error);
        }
      };

    return (
        <section id="career">
            <AppBar position="sticky" className="custom-navbar navbar-light bg-white">
                <Toolbar>
                    <img
                        src={content.header.logoSrc}
                        alt="Logo"
                        width="50"
                        height="50"
                        style={{ padding: '5px' }}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {content.header.brand}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="job-application-header">
                <span>Job Application Form</span>
            </div>

            <div className="career-container">
                <div className="career-form">
                    <h4 className="form-header">Kindly fill the details</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="dob"
                                placeholder="Date of Birth"
                                onFocus={(e) => (e.target.type = 'date')} // Change to date type on focus
                                onBlur={(e) => (e.target.type = e.target.value ? 'date' : 'text')} // Revert to placeholder if no value
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="addressLine1"
                                placeholder="Address Line 1"
                                value={formData.addressLine1}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="addressLine2"
                                placeholder="Address Line 2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="district"
                                placeholder="District"
                                value={formData.district}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                name="pincode"
                                placeholder="Pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                min="100000"
                                max="999999"
                                pattern="\d{6}"
                            />
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="education"
                                placeholder="Education"
                                value={formData.education}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="position"
                                placeholder="Position Applying For"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="employment"
                                placeholder="Employment Status"
                                value={formData.employment}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="notice_period"
                                placeholder="Notice Period"
                                value={formData.notice_period}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="current_ctc"
                                placeholder="Current CTC"
                                value={formData.current_ctc}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="expected_ctc"
                                placeholder="Expected CTC"
                                value={formData.expected_ctc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <div>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Do you have Passport</FormLabel>
                                    <RadioGroup
                                        aria-label="passport"
                                        name="passport"
                                        value={formData.passport}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Do you have Driving License</FormLabel>
                                    <RadioGroup
                                        aria-label="license"
                                        name="license"
                                        value={formData.license}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div>
                            <PhoneInput
                                country={'in'}
                                value={formData.phone}
                                onChange={(phone) => setFormData({ ...formData, phone })}
                                required
                            />
                        </div>
                        <Box display="flex" alignItems="center" mt={2}>
                            <Typography variant="body1" mr={2}>
                                Kindly send your resume to{' '}
                                <Typography variant="body1" component="span" color="primary" fontWeight="bold">
                                sajendraprasad.chandran@simtestlab.se
                                </Typography>
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<ContentCopyIcon />}
                                onClick={handleCopy}
                            >
                            </Button>
                        </Box>

                        <br></br>
                        <button type="submit" className="btn" disabled={isSubmitted}>
                            Submit Application
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

export default Career;
