const profil = {
    nama: "Arvianta Satya Pramadani",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML","CSS","JavaScript"]
};

const daftarProyek = [
    {judul: "Halaman Profil", tahun: 2026, selesai: true},
    {judul: "Katalog Produk", tahun: 2026, selesai: false}
]

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({nama,peran}) {
    return `${nama} - ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(".");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian))

console.table(profil.keahlian);
console.log(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog)

