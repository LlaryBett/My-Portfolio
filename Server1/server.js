import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Ensure __dirname is defined in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always resolve .env relative to this file's directory
dotenv.config({ path: path.resolve(__dirname, '.env') });

/* eslint-env node */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import contactRoute from './contact.js';

const app = express();

// CORS Configuration - ONLY THIS PART WAS ADDED
const corsOptions = {
  origin: [
    'https://my-portfolio-h0n8.onrender.com',
    'https://hillary-bett-ujvs.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use('/api', contactRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('✅ MongoDB connected');
  console.log('🌐 CORS enabled for:', corsOptions.origin);
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));