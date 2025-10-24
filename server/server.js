import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routers/auth.js';

dotenv.config();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MONGO_URI = process.env.MONGO_URI || 'your_mongodb_connection_string';

const app = express();

console.log(__dirname);
console.log(__filename);

// Serve static files from 'client'
app.use(express.static(path.join(__dirname, '../client')));
// Use auth routes
app.use('/api/auth', authRoutes);
app.use(express.json());

// Serve index.html on '/' route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'App.jsx'));
});


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err)
);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
