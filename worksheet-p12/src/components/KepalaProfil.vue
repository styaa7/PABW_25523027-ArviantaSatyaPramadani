<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <header>
    <h1 class="header1">{{ props.profil.nama }}</h1>
    <nav class="navbar">
      <a href="#">Nasi Goreng</a>
      <a href="#">Pizza</a>
      <a href="#">Nasi Kuning</a>
    </nav>
  </header>
  <hr class="line">
</template>