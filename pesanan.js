const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../pesanan.json');

// Fungsi pembantu baca data
function bacaData() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data || '[]');
}

// Fungsi pembantu simpan data
function simpanData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET: Ambil semua pesanan
router.get('/', (req, res) => {
  const daftarPesanan = bacaData();
  res.json(daftarPesanan);
});

// POST: Simpan pesanan baru
router.post('/', (req, res) => {
  const daftarPesanan = bacaData();
  const pesananBaru = {
    id: Date.now(),
    items: req.body.items,
    total: req.body.total
  };

  daftarPesanan.push(pesananBaru);
  simpanData(daftarPesanan);

  console.log("\n🛒 [PESANAN TERPISAH]");
  console.log("Total : Rp", pesananBaru.total);
  pesananBaru.items.forEach((item, index) => {
    console.log("  ", index + 1 + ".", item.nama, "- Rp", item.harga);
  });

  res.json({ status: "Sukses", pesan: "Pesanan berhasil dicatat!" });
});

module.exports = router;