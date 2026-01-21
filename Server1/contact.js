import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Log environment credentials for debugging
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***HIDDEN***' : undefined);
console.log('RECEIVING_EMAIL:', process.env.RECEIVING_EMAIL);

/* eslint-env node */

import express from 'express';
import nodemailer from 'nodemailer';
import ContactMessage from './contactSchema.js';

const router = express.Router();

// Create transporter using Brevo SMTP (same config as working E-Shop)
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  logger: true, // Enable logging
  debug: true   // Show debug output
});

router.post('/contact', async (req, res) => {
  console.log('\n🎯 FRONTEND HIT BACKEND - /api/contact');
  console.log('📨 Timestamp:', new Date().toISOString());
  console.log('📦 Payload Received:', JSON.stringify(req.body, null, 2));
  console.log('🔗 Request Headers:', {
    contentType: req.headers['content-type'],
    origin: req.headers.origin
  });

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    console.log('❌ Validation Error: Missing required fields');
    console.log('   - name:', name ? '✓' : '✗');
    console.log('   - email:', email ? '✓' : '✗');
    console.log('   - message:', message ? '✓' : '✗');
    return res.status(400).json({ 
      error: 'All fields are required.' 
    });
  }

  console.log('✅ Validation Passed');
  console.log('📝 Processing contact message from:', email);

  try {
    // 1. Save to database
    console.log('💾 Saving to MongoDB...');
    await ContactMessage.create({ name, email, message });
    console.log('✅ Saved to database successfully');

    // 2. Notify you (using verified sender email)
    console.log('📧 Sending notification email to admin...');
    await transporter.sendMail({
      from: `"Portfolio Contact" <llarykiplangat@gmail.com>`, // Must match verified sender in Brevo
      to: process.env.RECEIVING_EMAIL, // bettllary672@gmail.com
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });
    console.log('✅ Admin notification sent');

    // 3. Auto-reply to submitter (using same verified sender)
    console.log('📧 Sending auto-reply to:', email);
    await transporter.sendMail({
      from: `"Hillary Bett" <llarykiplangat@gmail.com>`, // Must match verified sender
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I've received your message and will respond soon.</p>
        <p>Best regards,<br/>Hillary Bett</p>
      `
    });
    console.log('✅ Auto-reply sent');

    console.log('🎉 Contact submission completed successfully\n');
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully.' 
    });

  } catch (err) {
    console.error('\n❌ ERROR OCCURRED:');
    console.error('Error Type:', err.name);
    console.error('Error Message:', err.message);
    console.error('SMTP Error Details:', {
      error: err.response || err.message,
      code: err.code,
      stack: err.stack
    });
    console.log('');
    
    res.status(500).json({ 
      error: 'Failed to send message.',
      details: err.response || err.message 
    });
  }
});

export default router;