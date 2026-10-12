const profil = {
    nama: "Arvianta Satya Pramadani",
    peran: "Mahasiswa Informatika",
    makananKesukaan: ["Nasi Goreng","Nasi Padang","Nasi Kuning"]
};

export const daftarMakanan = [
    { 
        judul: "Nasi Goreng", 
        kategori: "Tradisional", 
        gambar: "nasigoreng.jpg", 
        deskripsi: "Nasi goreng merupakan sajian nasi yang digoreng dalam sebuah wajan atau penggorengan yang menghasilkan cita rasa berbeda karena dicampur dengan bumbu-bumbu seperti garam, bawang putih, bawang merah, merica, rempah-rempah tertentu, saos dan kecap manis. Selain itu, ditambahkan bahan-bahan pelengkap seperti telur, sayur-sayuran, makanan laut, atau daging.", 
        tahun: 2026, 
        favorit: true 
    },
    { 
        judul: "Pizza", 
        kategori: "Internasional", 
        gambar: "pizza.jpg", 
        deskripsi: "Piza (bahasa Italia: pizza) adalah hidangan gurih asal Italia sejenis adonan bundar dan pipih, yang dipanggang di oven dan biasanya dilumuri saus tomat serta keju dengan bahan makanan tambahan lainnya yang bisa dipilih sesuai selera.", 
        tahun: 2026, 
        favorit: true 
    },
    { 
        judul: "Nasi Kuning", 
        kategori: "Tradisional", 
        gambar: "nasikuning.jpg", 
        deskripsi: "Nasi kuning adalah makanan khas Indonesia. Makanan ini terbuat dari beras yang dimasak bersama dengan kunyit serta santan dan rempah-rempah. Penambahan bumbu-bumbu dan santan membuat nasi kuning lebih gurih daripada nasi putih.", 
        tahun: 2026, 
        favorit: true 
    }
];

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



