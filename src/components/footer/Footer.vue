<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <p class="footer">
    GTEX Innovations Ltd, © {{ currentYear }}. {{ t("all_rights_reserved") }}
  </p>
</template>

<style scoped>
.footer {
  text-align: center;
}
</style>
