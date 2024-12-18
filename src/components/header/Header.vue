<script setup>
import IconEmail from "@/components/icons/IconEmail.vue";
</script>

<template>
  <header class="header">
    <h2 class="logo">Untitled</h2>
    <a
      v-motion
      :initial="{ scale: 1 }"
      :hovered="{ scale: 1.1 }"
      :duration="300"
      class="email-icon"
      href="mailto:business@GTEX.IO">
      <IconEmail />
    </a>
  </header>
</template>

<style scoped>
.email-icon {
  width: 100%;
  max-width: 28px;
}
</style>
