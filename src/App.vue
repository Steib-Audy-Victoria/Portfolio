<script setup>
import { RouterLink, RouterView } from "vue-router";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header></Header>

  <main class="bg-[#222] text-white">
    <RouterView />
  </main>

  <Footer></Footer>
</template>

<style scoped>

</style>