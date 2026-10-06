// ambil elemen
const inputTeks = document.getElementById('inputTeks');
const jumlahKarakter = document.getElementById('jumlahKarakter');
const jumlahKata = document.getElementById('jumlahKata');
const sisaKarakter = document.getElementById('sisaKarakter');

// batas maksimal
const batasMaksimal = 200;

// buat event input
inputTeks.addEventListener('input', function () {
  // ambil teks dari input
  const teks = inputTeks.value;

  // hitung total karakter
  const totalKarakter = teks.length;
  jumlahKarakter.textContent = totalKarakter;

  // hitung total kata
  const teksBersih = teks.trim();
  if (teksBersih === '') {
    jumlahKata.textContent = 0;
  } else {
    const daftarKata = teksBersih.split(' ');
    jumlahKata.textContent = daftarKata.length;
  }

  // hitung sisa kuota huruf
  const sisa = batasMaksimal - totalKarakter;
  sisaKarakter.textContent = sisa;

  // ubah warna teks sisa huruf kalo udah melebihi bates
  if (sisa < 0) {
    sisaKarakter.classList.add('habis');
  } else {
    sisaKarakter.classList.remove('habis');
  }
});
