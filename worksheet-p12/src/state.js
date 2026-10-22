import { reactive } from 'vue';

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: ''
});

export function simpan(stateObj) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateObj.kategoriAktif,
    favorit: stateObj.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif ?? "semua";
  state.favorit = Array.isArray(isi.favorit) ? isi.favorit : [];
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((fId) => fId !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
}