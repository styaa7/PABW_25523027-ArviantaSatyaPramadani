import { daftarMakanan } from "./app.js";

// --- LEMBAR A: Pemilihan Elemen ---
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const form = document.querySelector("#form-makanan");
const inputNama = document.querySelector("#nama");
const galatNama = document.querySelector("#galat-nama");

// --- LEMBAR B: Membuat Elemen dari Data ---
function buatKartu(proyek) {
    const divKartu = document.createElement("div");
    divKartu.className = "kartu";

    // Buat elemen gambar
    const img = document.createElement("img");
    img.src = proyek.gambar;
    img.alt = proyek.judul;

    // Buat wadah teks
    const divIsi = document.createElement("div");
    divIsi.className = "kartu__isi";

    const h3 = document.createElement("h3");
    h3.className = "kartu__judul";
    h3.textContent = proyek.judul;

    divIsi.append(h3);
    divKartu.append(img, divIsi);

    return divKartu;
}

// --- LEMBAR D: Pola Render Terpusat ---
function render(daftar) {
    // 1. Kosongkan wadah lebih dulu agar kartu tidak berlipat
    wadah.textContent = "";

    // 2. Periksa keadaan kosong
    if (daftar.length === 0) {
        pesanKosong.hidden = false;
        return;
    }
    pesanKosong.hidden = true;

    // 3. Isi ulang wadah dari data
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// --- LEMBAR C: Event Delegation pada Tombol Filter ---
function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

// Pasang pendengar sekali di induk
barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // Abaikan klik di luar tombol

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarMakanan.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
});

// --- LEMBAR D: Validasi Form ---
if (form) {
    form.addEventListener("submit", (event) => {
        // Hentikan pengiriman bawaan agar halaman tidak reload
        event.preventDefault();

        const namaNilai = inputNama.value.trim();

        if (namaNilai === "") {
            galatNama.textContent = "Nama makanan tidak boleh kosong atau hanya berisi spasi.";
            inputNama.setAttribute("aria-invalid", "true");
            inputNama.focus();
            return;
        }

        // Bersihkan tanda galat jika sudah benar
        galatNama.textContent = "";
        inputNama.removeAttribute("aria-invalid");

        // Masukkan data baru dan gambar ulang
        daftarMakanan.push({
            judul: namaNilai,
            kategori: "Tradisional",
            tahun: 2026,
            favorit: true
        });

        render(daftarMakanan);
        form.reset();
    });
}

// Render awal saat halaman baru dibuka
render(daftarMakanan);