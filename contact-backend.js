import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Configure your SMTP credentials using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.yourprovider.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, service, message, sourcePage } = req.body;

  // Email to company (receives submissions)
  const mailToInfo = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nMessage: ${message}\nSource: ${sourcePage}`
  };

  // Thank you email to user
  const mailToUser = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Thank you for contacting Cybaem Tech!',
    text: `Dear ${name},\n\nThank you for reaching out to Cybaem Tech. We have received your message and will get back to you soon!\n\nBest regards,\nCybaem Tech Team`
  };

  try {
    await transporter.sendMail(mailToInfo);
    await transporter.sendMail(mailToUser);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, 'localhost', () => {
  console.log(`Server running on localhost:${PORT}`);
});
