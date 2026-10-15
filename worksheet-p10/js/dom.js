const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");
const barisFilter = document.querySelector("#filter");
const form = document.querySelector("#form-makanan");
const inputNama = document.querySelector("#nama");
const galatNama = document.querySelector("#galat-nama");

let sumberData = [];

export function aturMemuat(sedangMemuat) {
  if (pesanMuat) pesanMuat.hidden = !sedangMemuat;
  if (sedangMemuat) {
    if (pesanGalat) pesanGalat.hidden = true;
    if (pesanKosong) pesanKosong.hidden = true;
  }
}

export function tampilkanGalat(pesan) {
  if (pesanGalat) {
    pesanGalat.textContent = pesan;
    pesanGalat.hidden = false;
  }
}

function buatKartu(item) {
  const divKartu = document.createElement("div");
  divKartu.className = "kartu";

  const img = document.createElement("img");
  img.src = item.gambar || "nasigoreng.jpg";
  img.alt = item.judul;

  const divIsi = document.createElement("div");
  divIsi.className = "kartu__isi";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = item.judul;

  const p = document.createElement("p");
  p.textContent = item.deskripsi || "Deskripsi makanan favorit.";

  divIsi.append(h3, p);
  divKartu.append(img, divIsi);
  return divKartu;
}


export function render(daftar) {
  wadah.textContent = "";

  if (!daftar || daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

 
  daftar.forEach((item) => wadah.append(buatKartu(item)));
}

export function setSumberData(data) {
  sumberData = data;
}

// Event filter
if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    document.querySelectorAll("#filter button").forEach((t) => {
      t.classList.toggle("aktif", t === tombol);
    });

    const kategori = tombol.dataset.kategori;
    const terpilih = sumberData.filter(
      (item) => kategori === "semua" || item.kategori === kategori
    );
    render(terpilih);
  });
}

// Validasi Form
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const namaNilai = inputNama.value.trim();
    if (namaNilai === "") {
      galatNama.textContent = "Nama makanan tidak boleh kosong.";
      inputNama.focus();
      return;
    }
    galatNama.textContent = "";
    const baru = {
      id: Date.now(),
      judul: namaNilai,
      kategori: "Tradisional",
      deskripsi: "Makanan baru ditambahkan.",
      gambar: "nasigoreng.jpg",
      tahun: 2026,
      favorit: true
    };
    sumberData.push(baru);
    render(sumberData);
    form.reset();
  });
}