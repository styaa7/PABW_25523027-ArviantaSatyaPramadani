<script setup>
import { ref } from 'vue';

const nama = ref('');
const bahan = ref('');
const asal = ref('');
const pesanGalat = ref('');

function simpanForm() {
  if (!nama.value.trim()) {
    pesanGalat.value = 'Nama makanan wajib diisi!';
    return;
  }
  pesanGalat.value = '';
  // Logika submit / simpan formulir
}
</script>

<template>
  <section>
    <h2>Form Tambah Makanan Favorit</h2>
    <form id="form-makanan" @submit.prevent="simpanForm">
      <label class="fontForm" for="nama">Nama Makanan</label><br>
      <input type="text" id="nama" v-model="nama"><br>
      <p id="galat-nama" v-if="pesanGalat" style="color: red; margin: 4px 0;">
        {{ pesanGalat }}
      </p>

      <label class="fontForm" for="bahan">Bahan</label><br>
      <input type="text" id="bahan" v-model="bahan"><br>

      <label class="fontForm" for="asal">Asal</label><br>
      <input type="text" id="asal" v-model="asal"><br>

      <button type="submit" class="tombol-filter">Simpan</button>
    </form>
  </section>
</template>