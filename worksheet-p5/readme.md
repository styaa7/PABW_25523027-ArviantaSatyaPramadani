# Worksheet P5 — Layout Modern: Flexbox dan Grid
**Pengembangan Aplikasi Berbasis Web · SIF302**

- **NIM:** 25523027
- **Nama:** Arvianta Satya Pramadani

---

## Lembar A — Rencana Kerangka Halaman

### A.1 Kerangka Halaman
| Bagian halaman | Peran | Nilai yang saya pakai |
|---|---|---|
| Baris pertama | Kepala halaman: logo, judul, menu | `auto` · tinggi mengikuti isi |
| Baris kedua | Isi: sidebar dan konten | `1fr` · mengisi sisa tinggi |
| Baris ketiga | Kaki halaman | `auto` · tinggi mengikuti isi |
| Kolom isi | Sidebar tetap, konten lentur | `16rem 1fr` · sidebar tetap |

### A.2 Sumbu dan Arah
| Komponen | Arah | Sumbu utama | Sumbu silang |
|---|---|---|---|
| Navbar | baris | horizontal | vertikal |
| Baris tombol pada kartu | baris | horizontal | vertikal |
| Daftar menu samping | kolom | vertikal | horizontal |

### A.3 Kapan Flex, Kapan Grid
| Bagian | Pilihan saya | Alasan satu baris |
|---|---|---|
| Kepala halaman | flex | Menyusun elemen berderet satu dimensi dengan jarak seragam |
| Isi dua kolom | grid | Membagi ruang dua dimensi (kolom tetap dan kolom fleksibel) |
| Galeri kartu | grid | Mengatur kolom adaptif dengan auto-fit dan minmax tanpa media query |
| Isi di dalam satu kartu | flex | Menyusun elemen anak secara satu arah (baris/kolom) |

---

## Lembar F — Pemeriksaan, Tiket Keluar, dan Penilaian Mandiri

### F.1 Periksa Satu per Satu
- [x] Kerangka halaman: matikan sementara isi, baris tetap tiga
- [x] Jarak memakai gap: tidak ada margin tempelan pada layout.css dan komponen.css
- [x] Lebar memakai fr atau rem: tidak ada nilai px pada deklarasi lebar kolom
- [x] Galeri adaptif: seret jendela, jumlah kolom berubah tanpa media query
- [x] Tidak meluber: uji pada 360 px dan 1 280 px
- [x] Tema gelap Pertemuan 4: tombol pengalih masih bekerja

### F.2 Satu Baris untuk Diingat
- **Potongan kode:** `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`
- **Dipakai pada:** Galeri kartu adaptif responsif tanpa media query

### F.3 Penilaian Mandiri
| Bagian | Bobot | Nilai saya | Bukti |
|---|---|---|---|
| Kerangka halaman: baris dan kolom | 30 | 30 | baris grid terbaca, tiga baris utuh |
| Flexbox: navbar dan isi kartu | 25 | 25 | gap dipakai, tidak ada float |
| Grid: galeri adaptif dan penempatan | 30 | 30 | kolom berubah, span atau area dipakai |
| Kerapian: nol luberan, nol !important | 15 | 15 | lolos pada dua lebar uji |
| **TOTAL** | **100** | **100** | |

### F.4 Tiket Keluar
1. **Bagian halaman mana yang memakai flex, dan mengapa flex yang cocok:**
   Navbar dan isi kartu, karena membutuhkan penyusunan elemen satu arah (horizontal/vertikal) dengan perataan dan spasi yang fleksibel.
2. **Bagian halaman mana yang memakai grid, dan mengapa grid yang cocok:**
   Kerangka halaman (`.page`), area isi dua kolom (`.isi`), dan galeri kartu (`.galeri`), karena membutuhkan pembagian struktur layout dua dimensi dan kolom responsif berbasis pecahan (`fr`).
3. **Satu kasus meluber yang Anda temui hari ini, dan perbaikannya:**
   Teks panjang atau item flex/grid yang mendorong kolom melebar, diperbaiki dengan memberikan `min-width: 0;` dan `overflow-wrap: anywhere;`.

### F.5 Catatan untuk Pengampu
- **Bagian yang paling sulit:** Menentukan batas `minmax` yang tepat agar kolom tidak meluber pada viewport kecil (360px).
- **Bagian yang saya ingin dibahas di kelas:** Penggunaan advanced named grid areas saat dipadukan dengan responsivitas mobile.

