<script setup>
const props = defineProps({
  img: { type: String, default: "" },
  imgAlt: { type: String, default: "" },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  subText: { type: String, default: "" },
  icons: { type: Array, default: "" || [] },
});
</script>

<template>
  <section class="grid-card">
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1 }"
      :duration="300"
      v-if="!img && !icons.length"
      class="grid-card-info">
      <h3 class="grid-card-title">{{ title }}</h3>
      <h4 class="grid-card-desc">{{ description }}</h4>
      <p class="grid-card-subtext">{{ subText }}</p>
    </div>

    <div v-if="img" class="grid-card-icon-wrapper">
      <img class="grid-card-icon" :src="img" :alt="imgAlt" />
    </div>
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1 }"
      :duration="300"
      v-if="img"
      class="grid-card-info">
      <h4 class="grid-card-title">{{ title }}</h4>
      <h3 class="grid-card-desc">{{ description }}</h3>
      <p class="grid-card-subtext">{{ subText }}</p>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="300"
      v-if="icons.length"
      class="icon-container">
      <svg v-for="icon of icons" :key="icon" :class="`icon icon-${icon}`">
        <use :href="`/icons/sprite.svg#${icon}`" />
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.grid-card {
  padding: 88px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.grid-card::before,
.grid-card::after {
  content: "";
  position: absolute;
  background-color: var(--line-color);
  z-index: 1;
}

.grid-card::after {
  inline-size: 100vw;
  block-size: 1px;
  inset-inline-start: 0;
  inset-block-start: calc(var(--line-offset) * -1);
}

.grid-card::before {
  inline-size: 1px;
  block-size: 100vh;
  inset-block-start: 0;
  inset-inline-start: calc(var(--line-offset) * -1);
}

.grid-card-icon-wrapper {
  width: 150px;
  height: 150px;
  position: relative;
  padding: 12px;
  outline: 1px solid #e6e6e6;
  outline-offset: 12px;
  border-radius: 50%;
}

.grid-card-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.grid-card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.grid-card-desc {
  margin: 30px 0;
}

.grid-card-subtext {
  max-width: 430px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.icon {
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.icon-calendar {
  background-color: var(--primary);
}

.icon-facebook {
  background-color: #5b7ac8;
}

@media (768px <= width <= 980px) {
  .grid-card-icon-wrapper {
    width: 124px;
    height: 124px;
  }
}

@media (320px <= width <= 768px) {
  .grid-card {
    padding: 44px;
    width: 100%;
  }
}
</style>
