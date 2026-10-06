const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../komentar.json');

// Fungsi pembantu baca data
function bacaData() {
  if (!fs.existsSync(filePath)) return [{ nama: "Budi", pesan: "Ayam bakarnya mantap!" }];
  const data = fs.readFileSync(filePath, 'utf-8'); 
  return JSON.parse(data || '[]');
}

// Fungsi pembantu simpan data
function simpanData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET: Ambil semua komentar
router.get('/', (req, res) => {
  const daftarKomentar = bacaData();
  res.json(daftarKomentar);
});

// POST: Simpan komentar baru
router.post('/', (req, res) => {
  const daftarKomentar = bacaData();
  const komentarBaru = {
    id: Date.now(),
    nama: req.body.nama,
    pesan: req.body.pesan
  };

  daftarKomentar.push(komentarBaru);
  simpanData(daftarKomentar);

  console.log("\n💬 [KOMENTAR TERPISAH]");
  console.log("Nama  :", komentarBaru.nama);
  console.log("Pesan :", komentarBaru.pesan);

  res.json({ status: "Sukses", pesan: "Komentar berhasil disimpan!" });
});

module.exports = router;
