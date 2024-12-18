<script setup>
import { useI18n } from "vue-i18n";
import { defineAsyncComponent } from "vue";
import SectionCard from "@/components/SectionCard.vue";
import GridSectionCard from "@/components/GridSectionCards.vue";

const { t } = useI18n();
const dataFirstGridInfoCards = [
  {
    title: t("services.title1"),
    subText: t("services.subText1"),
  },
  {
    title: t("services.title2"),
    subText: t("services.subText2"),
  },
  {
    title: t("services.title3"),
    subText: t("services.subText3"),
  },
  {
    title: t("services.title4"),
    subText: t("services.subText4"),
  },
];
const dataSecondGridInfoCards = [
  {
    title: t("with_us.title1"),
    subText: t("with_us.subText1"),
  },
  {
    title: t("with_us.title2"),
    subText: t("with_us.subText2"),
  },
  {
    title: t("with_us.title3"),
    subText: t("with_us.subText3"),
  },
  {
    title: t("with_us.title4"),
    subText: t("with_us.subText4"),
  },
];
const dataGridUserCards = [];
const dataGridEventCards = [
  {
    title: t("events_section.row1.title"),
    description: t("events_section.row1.description"),
  },
  {
    description: t("events_section.row1.location"),
  },
  {
    icons: ["calendar"],
  },
  {
    title: t("events_section.row2.title"),
    description: t("events_section.row2.description"),
  },
  {
    description: t("events_section.row1.location"),
  },
  {
    icons: ["calendar"],
  },
];
</script>

<template>
  <main>
    <SectionCard
      :img="'/images/image03.jpg'"
      :imgAlt="'Image 1'"
      :title="t('hero.title')"
      :description="t('hero.desc')"
      :subText="t('hero.subText')"
      :linkText="t('button.free_request')"
      :link="'mailto:business@GTEX.IO'"
      :directionReverse="false" />
    <div class="grid-cards">
      <GridSectionCard
        v-for="(card, index) of dataFirstGridInfoCards"
        :key="index"
        :description="card.title"
        :subText="card.subText" />
    </div>
    <SectionCard
      :img="'/images/image02.jpg'"
      :imgAlt="'Image 2'"
      :title="t('about_block.title')"
      :description="t('about_block.desc')"
      :subText="t('about_block.subText')"
      :linkText="t('button.start_project')"
      :link="'mailto:business@GTEX.IO'"
      :directionReverse="true" />
    <!-- <div class="grid-cards">
      <GridSectionCard
        v-for="(card, index) of dataGridUserCards"
        :key="index"
        :img="card.img"
        :imgAlt="card.imgAlt"
        :title="card.title"
        :description="card.description"
        :subText="card.subText" />
    </div> -->
    <SectionCard
      :img="'/images/image06.jpg'"
      :imgAlt="'Image 3'"
      :title="t('our_cases.title')"
      :description="t('our_cases.desc')"
      :subText="t('our_cases.subText')"
      :linkText="t('button.ready_to_start')"
      :link="'mailto:business@GTEX.IO'"
      :directionReverse="false" />
    <div class="grid-cards">
      <GridSectionCard
        v-for="(card, index) of dataSecondGridInfoCards"
        :key="index"
        :description="card.title"
        :subText="card.subText" />
    </div>
    <SectionCard
      :img="'/images/image04.jpg'"
      :imgAlt="'Image 3'"
      :title="t('start_with_us.title')"
      :description="t('start_with_us.desc')"
      :subText="t('start_with_us.subText')"
      :linkText="t('button.ready_to_start')"
      :link="'mailto:business@GTEX.IO'"
      :directionReverse="true" />
    <div class="grid-cards grid-events">
      <GridSectionCard
        v-for="card of dataGridEventCards"
        :key="card.title"
        :img="card.img"
        :icons="card.icons"
        :imgAlt="card.imgAlt"
        :title="card.title"
        :description="card.description"
        :subText="card.subText" />
    </div>
    <SectionCard
      :img="'/images/image01.jpg'"
      :imgAlt="'Image 3'"
      :title="t('transform_your_future.title')"
      :description="t('transform_your_future.desc')"
      :subText="t('transform_your_future.subText')"
      :linkText="t('button.ready_to_start')"
      :link="'mailto:business@GTEX.IO'"
      :directionReverse="false" />
  </main>
</template>

<style lang="scss">
.grid-cards {
  --line-offset: calc(1px / 2);

  display: grid;
  grid-template-columns: repeat(2, minmax(380px, 1fr));
  overflow: hidden;
  gap: 1px;
}

.grid-events {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (320px <= width <= 768px) {
  .grid-cards {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
