<script setup>
import { computed } from 'vue';
import { state, tambahFavorit } from '../state.js';
import { saring } from '../data.js';

const daftarTampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif);
});
</script>

<template>
  <section>
    <h2>Daftar Makanan Favorit</h2>

    <div id="daftar" class="galeri">
      <div v-for="item in daftarTampil" :key="item.id" class="kartu">
        <img :src="item.gambar || 'nasigoreng.jpg'" :alt="item.judul">
        <div class="kartu__isi">
          <h3 class="kartu__judul">{{ item.judul }}</h3>
          <p>{{ item.deskripsi || 'Deskripsi makanan favorit.' }}</p>
          <button
            type="button"
            class="favorit"
            @click="tambahFavorit(item.id)"
          >
            {{ state.favorit.includes(item.id) ? '★' : '☆' }}
          </button>
        </div>
      </div>
    </div>

    <p id="pesan-kosong" v-if="daftarTampil.length === 0">
      Tidak ada makanan dalam kategori ini.
    </p>

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
</template>