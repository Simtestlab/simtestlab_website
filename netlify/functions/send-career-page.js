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

      const { name, email, phone } = fields;
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
        subject: `Registration Form Submission: ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Date of Birth: ${fields.dob}
          Address Line 1: ${fields.addressLine1}
          Address Line 2: ${fields.addressLine2}
          District: ${fields.district}
          State: ${fields.state}
          Pincode: ${fields.pincode}
          Country: ${fields.country}
          Education: ${fields.education}
          Position: ${fields.position}
          Employment Status: ${fields.employment}
          Notice Period: ${fields.notice_period}
          Current CTC: ${fields.current_ctc}
          Expected CTC: ${fields.expected_ctc}
          Passport: ${fields.passport}
          License: ${fields.license}
        `,
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
