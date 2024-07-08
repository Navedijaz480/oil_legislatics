const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stalliapp0@gmail.com', // Replace with your Gmail email address
    pass: 'ehflmmcsciqsifhb', // Replace with your Gmail email password
  },
});

// Function to send verification link to email
async function sendVerificationLinkToEmail(email ,id) {
  // Specify email options
  const mailOptions = {
    from: 'stalliapp0@gmail.com', // Replace with your Gmail email address
    to: email,
    subject: 'Email Verification',
    text: `Click the following link to verify your email: http://localhost:4000/api/user/verifyLink/${id}`,
  };

  // Send the email
  const result = await transporter.sendMail(mailOptions);
  console.log('Email sent:', result);

  // You might want to save the token in a database associated with the user's email for verification
  // For simplicity, this example doesn't handle token storage.
}

module.exports = {
  sendVerificationLinkToEmail,
};
