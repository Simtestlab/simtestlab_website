const nodemailer = require('nodemailer');
require('dotenv').config();

const handler = async (event, context) => {
  const {
    firstname,
    lastname,
    email,
    dob,
    addressLine1,
    addressLine2,
    district,
    state,
    pincode,
    country,
    education,
    position,
    employment,
    notice_period,
    current_ctc,
    expected_ctc,
    passport,
    license,
    phone
  } = JSON.parse(event.body);

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
    subject: `Career Form Submission from ${firstname} ${lastname}`,
    text: `Candidate Details:\n
          First Name: ${firstname}\n
          Last Name: ${lastname}\n
          Email: ${email}\n
          Phone: +${phone}\n
          DOB: ${dob}\n
          Address Line 1: ${addressLine1}\n
          Address Line 2: ${addressLine2}\n
          District: ${district}\n
          State: ${state}\n
          Pin code: ${pincode}\n
          Country: ${country}\n
          Education: ${education}\n
          Position: ${position}\n
          Employment: ${employment}\n
          Notice Period: ${notice_period}\n
          Current CTC: ${current_ctc}\n
          Expected CTC: ${expected_ctc}\n
          Passport Status: ${passport}\n
          License Status: ${license}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted succesfully. Kindly send you resume to support@simtestlab.se' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email. Please try again.' }),
    };
  }
};

module.exports = { handler };
