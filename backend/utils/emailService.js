const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter for Brevo
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Test transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to send messages');
  }
});

// Send notification to yourself
const sendNotification = async (data) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL,
    subject: `New Contact Form: ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-left: 4px solid #4F46E5;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending notification email:', error);
    throw error;
  }
};

// Send auto-reply to user
const sendAutoReply = async (data) => {
  const mailOptions = {
    from: `"Your Name - Portfolio" <${process.env.FROM_EMAIL}>`,
    to: data.email,
    subject: 'Thank you for contacting me!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Hi ${data.name},</h2>
        <p>Thank you for reaching out through my portfolio! I've received your message and will get back to you within 24 hours.</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Your message:</strong></p>
          <p style="font-style: italic;">"${data.message}"</p>
        </div>
        
        <p>In the meantime, you can:</p>
        <ul>
          <li>Check out my <a href="https://yourportfolio.com/projects">projects</a></li>
          <li>Connect with me on <a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
          <li>Browse my <a href="https://github.com/yourusername">GitHub</a></li>
        </ul>
        
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
        
        <p>Best regards,<br>
        <strong>Your Name</strong><br>
        Full Stack Developer</p>
        
        <p style="font-size: 12px; color: #666;">
          This is an automated response. Please don't reply to this email.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Auto-reply email sent successfully');
  } catch (error) {
    console.error('Error sending auto-reply email:', error);
    throw error;
  }
};

module.exports = {
  sendNotification,
  sendAutoReply
};