<script setup>
import { onMounted } from 'vue';
import { profil } from './data.js';
import { state, pulihkan, muat, isiProyek } from './state.js';
import { ambilProyek } from './api.js';

import KepalaProfil from './components/KepalaProfil.vue';
import TombolFilter from './components/TombolFilter.vue';
import DaftarProyek from './components/DaftarProyek.vue';
import FormKontak from './components/FormKontak.vue';

onMounted(async () => {
  pulihkan(muat());
  try {
    const data = await ambilProyek();
    isiProyek(data);
  } catch (galat) {
    console.error('Galat memuat data proyek:', galat.message);
  }
});
</script>

<template>
  <input type="checkbox" id="tema" class="pengalih-tema">
  <div class="page">
    <KepalaProfil :profil="profil" />
    <main class="isi">
      <TombolFilter />
      <DaftarProyek />
      <br>
      <FormKontak />
    </main>
    <footer>{{ profil.nama }} {{ profil.nim }}, 2026</footer>
  </div>
</template>