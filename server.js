const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const komentarRoute = require('./routes/komentar');
const pesananRoute = require('./routes/pesanan');

// Gunakan Routes
app.use('/api/komentar', komentarRoute);
app.use('/api/pesanan', pesananRoute);

// Export app untuk Vercel
module.exports = app;
