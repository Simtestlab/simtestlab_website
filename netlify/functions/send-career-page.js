const nodemailer = require('nodemailer');
const formidable = require('formidable');
require('dotenv').config();

const handler = async (event, context) => {
  const form = new formidable.IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(event.body, async (err, fields, files) => {
      if (err) {
        return reject({
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to parse form data' }),
        });
      }

      const { name, email, phone, subject, message } = fields;
      const resumeFile = files.resume; 

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
        attachments: [
          {
            filename: resumeFile.name,
            path: resumeFile.path,
          },
        ],
      };

      try {
        await transporter.sendMail(mailOptions);
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: 'Email sent successfully' }),
        });
      } catch (error) {
        console.error(error);
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: 'Error sending email' }),
        });
      }
    });
  });
};

module.exports = { handler };
