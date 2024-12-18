<script setup>
import IconEmail from "@/components/icons/IconEmail.vue";
</script>

<template>
  <header class="header">
    <h2 class="logo">Untitled</h2>
    <IconEmail
      v-motion
      :initial="{ scale: 1 }"
      :hovered="{ scale: 1.1 }"
      :duration="300"
      class="email-icon" />
  </header>
</template>

<style scoped>
.email-icon {
  max-width: 28px;
}
</style>
