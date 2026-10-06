const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Import Routes
const komentarRoute = require('./routes/komentar');
const pesananRoute = require('./routes/pesanan');

// Gunakan Routes
app.use('/api/komentar', komentarRoute);
app.use('/api/pesanan', pesananRoute);

// Agar tetap bisa dites di laptop lokal (CMD)
app.listen(PORT, () => {
  console.log(Server aktif di http://localhost:${PORT});
});

// Export untuk Vercel
module.exports = app;
