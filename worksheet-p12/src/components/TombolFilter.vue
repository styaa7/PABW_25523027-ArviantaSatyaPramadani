<script setup>
import { state, pilihKategori, aturUlang } from '../state.js';

const kategoriList = ['semua', 'Tradisional', 'Internasional', 'Minuman'];
</script>

<template>
  <div id="filter">
    <button type="button" id="atur-ulang" class="tombol-filter" @click="aturUlang">
      Atur ulang
    </button>
    <button
      v-for="kat in kategoriList"
      :key="kat"
      type="button"
      class="tombol-filter"
      :class="{ aktif: state.kategoriAktif === kat }"
      @click="pilihKategori(kat)"
    >
      {{ kat === 'semua' ? 'Semua' : kat }}
    </button>
  </div>
</template>