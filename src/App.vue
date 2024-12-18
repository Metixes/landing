<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer class="container" />
</template>

<style scoped></style>
