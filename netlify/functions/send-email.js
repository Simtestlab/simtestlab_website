const nodemailer = require('nodemailer');
require('dotenv').config();

const handler = async (event, context) => {  
  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_RECEIVER) {
      throw new Error('Missing required environment variables');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } catch (error) {
      console.error('Error sending email:', error.message);
      console.error('Error stack:', error.stack);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error sending email', message: error.message }),
      };
    }
  } catch (parseError) {
    console.error('Error parsing event body or missing environment variables:', parseError.message);
    console.error('Error stack:', parseError.stack);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid request body or missing environment variables', message: parseError.message }),
    };
  }
};

// Correctly export the handler function
module.exports = { handler };
