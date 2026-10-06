// Ambil elemen DOM yang dibutuhkan
const inputTeks = document.getElementById('inputTeks');
const jumlahKarakter = document.getElementById('jumlahKarakter');
const jumlahKata = document.getElementById('jumlahKata');
const sisaKarakter = document.getElementById('sisaKarakter');

// Menentukan batas maksimal karakter
const batasMaksimal = 200;

// Pasang event listener 'input' pada textarea
inputTeks.addEventListener('input', function () {
  // Ambil isi teks yang sedang diketik
  const teks = inputTeks.value;

  // Hitung total karakter
  const totalKarakter = teks.length;
  jumlahKarakter.textContent = totalKarakter;

  // Hitung total kata menggunakan trim() dan split(' ')
  const teksBersih = teks.trim();
  if (teksBersih === '') {
    jumlahKata.textContent = 0;
  } else {
    const daftarKata = teksBersih.split(' ');
    jumlahKata.textContent = daftarKata.length;
  }

  // Hitung sisa kuota karakter
  const sisa = batasMaksimal - totalKarakter;
  sisaKarakter.textContent = sisa;

  // Ubah warna sisa kuota menjadi merah jika melebihi batas (200 karakter)
  if (sisa < 0) {
    sisaKarakter.classList.add('habis');
  } else {
    sisaKarakter.classList.remove('habis');
  }
});
