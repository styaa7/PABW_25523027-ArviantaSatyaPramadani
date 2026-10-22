<template>
  <input type="checkbox" id="tema" class="pengalih-tema">
  <div class="page">
    <header>
      <h1 class="header1">Makanan Favorit</h1>
      <nav class="navbar">
        <a href="#">Nasi Goreng</a>
        <a href="#">Pizza</a>
        <a href="#">Nasi Kuning</a>
      </nav>
    </header>
    <hr class="line">
    <main class="isi">
      <section>
        <h2>Daftar Makanan Favorit</h2>
        <div id="filter">
          <button type="button" id="atur-ulang" class="tombol-filter">Atur ulang</button>
          <button type="button" data-kategori="semua" class="tombol-filter aktif">Semua</button>
          <button type="button" data-kategori="Tradisional" class="tombol-filter">Tradisional</button>
          <button type="button" data-kategori="Internasional" class="tombol-filter">Internasional</button>
          <button type="button" data-kategori="Minuman" class="tombol-filter">Minuman</button>
        </div>
        <div id="daftar" class="galeri"></div>
        <p id="pesan-kosong" hidden>Tidak ada makanan dalam kategori ini.</p>
        <br>
        <table>
          <caption>Tabel Makanan Favorit</caption>
          <thead>
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Bahan Utama</th>
              <th scope="col">Asal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nasi Goreng</td>
              <td>Nasi dan kecap</td>
              <td>Indonesia</td>
            </tr>
            <tr>
              <td>Pizza</td>
              <td>Tepung dan saos</td>
              <td>Italia</td>
            </tr>
            <tr>
              <td>Sushi</td>
              <td>Ikan</td>
              <td>Jepang</td>
            </tr>
          </tbody>
        </table>
      </section>
      <br>
      <section>
        <h2>Form Tambah Makanan Favorit</h2>
        <form id="form-makanan">
          <label class="fontForm" for="nama">Nama Makanan</label><br>
          <input type="text" id="nama" name="nama"><br>
          <p id="galat-nama" style="color: red; margin: 4px 0;"></p>
          <label class="fontForm" for="bahan">Bahan</label><br>
          <input type="text" id="bahan" name="bahan"><br>
          <label class="fontForm" for="asal">Asal</label><br>
          <input type="text" id="asal" name="asal"><br>
          <button type="submit" class="tombol-filter">Simpan</button>
        </form>
      </section>
    </main>
    <footer>Arvianta Satya Pramadani 25523027, 2026</footer>
  </div>
</template>