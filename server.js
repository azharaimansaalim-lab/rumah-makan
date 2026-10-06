const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Import Routes
const komentarRoute = require('./routes/komentar');
const pesananRoute = require('./routes/pesanan');

// Gunakan Routes
app.use('/api/komentar', komentarRoute);
app.use('/api/pesanan', pesananRoute);

// Bagian ini WAJIB ada biar di CMD lokal tetep jalan:
app.listen(PORT, () => {
  console.log("==========================================");
  console.log(Server aktif di http://localhost:${PORT});
  console.log("==========================================");
});

module.exports = app;
