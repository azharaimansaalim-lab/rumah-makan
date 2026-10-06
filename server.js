const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Import Jalur (Routes) Terpisah
const komentarRoute = require('./routes/komentar');
const pesananRoute = require('./routes/pesanan');

// Gunakan Routes
app.use('/api/komentar', komentarRoute);
app.use('/api/pesanan', pesananRoute);

app.listen(PORT, () => {
  console.log("==========================================");
  console.log("Server Modern Back-end Aktif di http://localhost:3000");
  console.log("Fitur Komentar & Pesanan Sudah Terpisah!");
  console.log("==========================================");
});
// Tambahkan baris ini di PALING BAWAH file server.js kamu
module.exports = app;