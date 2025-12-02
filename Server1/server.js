import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

/* eslint-env node */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import contactRoute from './contact.js';

const app = express();

// -----------------------------
// ✔ FIXED CORS SECTION
// -----------------------------
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://hillary-bett-ujvs.vercel.app',
  'https://my-portfolio-h0n8.onrender.com' // backend domain needed
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS blocked: " + origin));
    }
  },
  credentials: false, // ❗ FIX: remove credentials (you don’t use cookies)
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
// -----------------------------


// Body parser
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
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
