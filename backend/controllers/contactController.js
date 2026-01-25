const emailService = require('../utils/emailService');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Prepare email content
    const emailData = {
      name,
      email,
      message,
      date: new Date().toLocaleString()
    };

    // Send notification email to yourself
    await emailService.sendNotification(emailData);
    
    // Send auto-reply to user
    await emailService.sendAutoReply(emailData);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! You will receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
};

module.exports = {
  submitContactForm
};