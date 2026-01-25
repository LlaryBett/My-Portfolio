const { Resend } = require('resend');
const nodemailer = require('nodemailer');  // Add this
require('dotenv').config();

// Initialize Resend for notifications
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Gmail transporter for auto-replies
const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Test Gmail connection
gmailTransporter.verify((error, success) => {
  if (error) {
    console.error('❌ Gmail Connection Error:', error.message);
    console.log('🔧 Troubleshooting:');
    console.log('1. Make sure 2-Step Verification is ON');
    console.log('2. Use App Password (16 chars), NOT your regular password');
    console.log('3. Check GMAIL_USER in .env is correct');
  } else {
    console.log('✅ Gmail SMTP is ready for auto-replies!');
  }
});

// Send notification to yourself using Resend
const sendNotification = async (data) => {
  console.log('📨 Sending notification via Resend...');
  
  try {
    const { data: result, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.TO_EMAIL,
      reply_to: data.email,
      subject: `New Contact: ${data.name}`,
      html: `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 16px">
          <p style="padding-top: 16px; border-top: 1px solid #eaeaea">New Contact Form Submission</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Date:</strong> ${data.date}</p>
          <p style="padding-top: 16px; border-top: 1px solid #eaeaea">
            <strong>Message:</strong><br />
            ${data.message}
          </p>
        </div>
      `,
      text: `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Date: ${data.date}

Message:
${data.message}`
    });

    if (error) throw error;
    
    console.log('✅ Notification sent via Resend!');
    return result;
    
  } catch (error) {
    console.error('❌ Resend Notification Error:', error.message);
    throw error;
  }
};

// Send auto-reply to user using Gmail
const sendAutoReply = async (data) => {
  console.log('📧 Sending auto-reply via Gmail...');
  console.log('To:', data.email);
  
  try {
    const info = await gmailTransporter.sendMail({
      from: 'Larry Bett <bettllary672@gmail.com>',
      to: data.email,
      subject: `Thanks for your message, ${data.name}!`,
      html: `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 16px">
          <p style="padding-top: 16px; border-top: 1px solid #eaeaea">Hi ${data.name},</p>
          <p>
            Thank you for reaching out! I have received your message and I'll do my
            best to get back to you within 24 hours.
          </p>
          <p style="padding-top: 16px; border-top: 1px solid #eaeaea">
            Best regards,<br />Larry Bett
          </p>
        </div>
      `,
      text: `Hi ${data.name},

Thank you for reaching out! I have received your message and I'll do my best to get back to you within 24 hours.

Best regards,
Larry Bett`
    });

    console.log('✅ Gmail auto-reply sent! Message ID:', info.messageId);
    return info;
    
  } catch (error) {
    console.error('❌ Gmail Auto-reply Error:', error.message);
    throw error;
  }
};

module.exports = {
  sendNotification,
  sendAutoReply
};