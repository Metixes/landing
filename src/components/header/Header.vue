<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
</script>

<template>
  <header class="header">
    <!-- <h2 class="logo">Untitled</h2> -->
    <IconLogo class="logo" />
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
.logo {
  max-width: 200px;
}
.email-icon {
  width: 100%;
  max-width: 28px;
}

@media (320px <= width <= 768px) {
  .logo {
    max-width: 180px;
  }
}
</style>
