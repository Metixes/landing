<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
const props = defineProps({
  text: String,
  link: String,
});
</script>

<template>
  <a
    v-motion
    :initial="{ scale: 1, transition: { duration: 300, ease: 'ease' } }"
    :hovered="{ scale: 1.1, transition: { duration: 300, ease: 'ease' } }"
    class="button"
    :href="link"
    >{{ text }}
    <IconArrow class="arrow-icon" />
  </a>
</template>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 37px;
  padding-inline-start: 37px;
  padding-inline-end: 37px;
  border-radius: 2.5rem;
  background-color: var(--primary);
  color: var(--primary-surface-color);
  white-space: nowrap;
  align-self: flex-start;
  cursor: pointer;
}

.arrow-icon {
  width: 12px;
}
</style>
