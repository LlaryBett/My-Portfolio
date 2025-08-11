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
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'All fields are required.' 
    });
  }

  try {
    // 1. Save to database
    await ContactMessage.create({ name, email, message });

    // 2. Notify you (using verified sender email)
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

    // 3. Auto-reply to submitter (using same verified sender)
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

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully.' 
    });

  } catch (err) {
    console.error('SMTP Error Details:', {
      error: err.response || err.message,
      stack: err.stack
    });
    
    res.status(500).json({ 
      error: 'Failed to send message.',
      details: err.response || err.message 
    });
  }
});

export default router;