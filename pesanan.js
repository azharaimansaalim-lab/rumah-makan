const express = require('express');
const router = express.Router();

let daftarPesanan = [];

router.get('/', (req, res) => {
  res.json(daftarPesanan);
});

router.post('/', (req, res) => {
  const pesananBaru = {
    id: Date.now(),
    items: req.body.items || [],
    total: req.body.total || 0
  };

  daftarPesanan.push(pesananBaru);
  res.json({ status: "Sukses", pesan: "Pesanan berhasil dicatat!" });
});

module.exports = router;
