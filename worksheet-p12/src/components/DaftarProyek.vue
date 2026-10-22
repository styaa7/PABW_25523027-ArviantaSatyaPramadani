<script setup>
import { computed } from 'vue';
import { state, tambahFavorit } from '../state.js';
import { saring } from '../data.js';

const tampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif);
});
</script>

<template>
  <section>
    <h2>Daftar Makanan Favorit</h2>

    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0">Belum ada data.</p>

    <div v-else id="daftar" class="galeri">
      <div v-for="item in tampil" :key="item.id" class="kartu">
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