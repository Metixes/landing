<script setup>
import Button from "@/components/ui/Button.vue";

const props = defineProps({
  img: { type: String, default: "" },
  imgAlt: { type: String, default: "" },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  subText: { type: String, default: "" },
  linkText: { type: String, default: "" },
  link: { type: String, default: "" },
  directionReverse: { type: Boolean, default: false },
});
</script>

<template>
  <section class="wrapper">
    <div :class="['card', 'container', { reverse: directionReverse }]">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :duration="300"
        class="card-img-wrapper">
        <img class="card-img" :src="img" :alt="imgAlt" />
      </div>
      <div class="card-info">
        <h3 class="card-title">{{ title }}</h3>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1000,
              ease: 'easy',
            },
          }"
          :duration="300"
          class="card-desc">
          {{ description }}
        </h1>
        <p class="card-subtext">{{ subText }}</p>
        <Button :text="linkText" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  padding-block-start: 96px;
  padding-block-end: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 72px;

  &-img-wrapper {
    flex: 1 0 0;
    width: 100%;
    max-width: 450px;
    height: 430px;
    overflow: hidden;
    border-radius: 1.25rem;
  }

  &-img {
    height: 100% !important;
    object-fit: cover;
    object-position: center;
    width: 100% !important;
  }
}

.card-info {
  flex: 1 1 auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
}

.card-desc {
  margin: 30px 0;
}

.card-subtext {
  margin-bottom: 30px;
}

.card-subtext {
  max-width: 450px;
}

.reverse {
  flex-direction: row-reverse;
}

@media (320px <= width <= 980px) {
  .card-img-wrapper {
    max-width: 350px;
    height: 350px;
  }
}

@media (320px <= width <= 768px) {
  .card {
    padding: 48px 32px;
    flex-direction: column;
    gap: 50px;
  }

  .card-img-wrapper {
    width: 100%;
    height: 240px;
    max-width: 100%;
    flex: 1 1 auto;
  }

  .card-info {
    max-width: 100%;
    text-align: center;
  }

  .button {
    margin: 0 auto;
  }

  .card-desc {
    margin: 32px 0;
  }

  .card-subtext {
    margin-bottom: 32px;
  }
}
@media (320px <= width <= 480px) {
  .card-img-wrapper {
    width: 100%;
    height: 190px;
    max-width: 100%;
    flex: 1 1 auto;
  }

  .card-desc {
    margin: 28px 0;
  }

  .card-subtext {
    margin-bottom: 28px;
  }

  .button {
    width: 100%;
    align-self: center;
    justify-content: space-between;
  }
}
</style>
