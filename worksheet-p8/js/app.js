const profil = {
    nama: "Arvianta Satya Pramadani",
    peran: "Mahasiswa Informatika",
    makananKesukaan: ["Nasi Goreng","Nasi Padang","Nasi Kuning"]
};

const daftarMakanan = [
    {judul: "Nasi Goreng", tahun: 2026, favorit: true},
    {judul: "Nasi Padang", tahun: 2026, favorit: true},
    {judul: "Nasi Kuning", tahun: 2026, favorit: true}
]

const kalimat = `Nama saya ${profil.nama}, dan saya memiliki ${profil.makananKesukaan.length} makanan favorit.`;
console.log(kalimat);

function buatPerkenalan({nama,peran}) {
    return `${nama} - ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(".");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.makananKesukaan))

console.table(profil.makananKesukaan);
console.log(daftarMakanan);

const selesai = daftarMakanan.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarMakanan.find((proyek) => proyek.judul === "Katalog Makanan");
console.log(katalog)

