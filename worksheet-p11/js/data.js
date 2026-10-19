export const profil = {
  nama: "Arvianta Satya Pramadani",
  nim: "25523027"
};

export function saring(daftar, kategori) {
  if (!daftar) return [];
  if (kategori === "semua" || !kategori) return daftar;
  return daftar.filter((item) => item.kategori === kategori);
}