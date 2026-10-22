import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");

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

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

function buatKartu(item, daftarFavorit) {
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

  const tombolFav = document.createElement("button");
  tombolFav.className = "favorit";
  tombolFav.type = "button";
  tombolFav.dataset.id = item.id;
  tombolFav.textContent = daftarFavorit.includes(item.id) ? "★" : "☆";

  divIsi.append(h3, p, tombolFav);
  divKartu.append(img, divIsi);
  return divKartu;
}

export function render(state) {
  if (!wadah) return;
  wadah.textContent = "";

  const dataTampil = saring(state.daftarProyek, state.kategoriAktif);

  if (dataTampil.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  dataTampil.forEach((item) => {
    wadah.append(buatKartu(item, state.favorit));
  });

  tandaiTombolAktif(state.kategoriAktif);
}