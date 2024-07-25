const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build')); // Serve the static files from the React app

const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER, // The email address where you want to receive the form data
    subject: `New message from ${name}: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
