<script setup>
import { defineAsyncComponent } from "vue";
import dataFirstGridInfoCards from "@/utils/dataFirstGridInfoCards.js";
import dataSecondGridInfoCards from "@/utils/dataSecondGridInfoCards.js";
import dataGridUserCards from "@/utils/dataGridUserCards.js";
import dataGridEventCards from "@/utils/dataGridEventCards.js";
import SectionCard from "@/components/SectionCard.vue";
import GridSectionCard from "@/components/GridSectionCards.vue";
</script>

<template>
  <main>
    <SectionCard
      :img="'/images/image03.jpg'"
      :imgAlt="'Image 1'"
      :title="'Semper feugiat'"
      :description="'Sit Amet'"
      :subText="'Sem astrum tortor consequat porta ornare arcu odio ut sem nulla pharetra elementum pulvinar etiam quam lacus.'"
      :linkText="'Imperdiet etiam'"
      :directionReverse="false" />
    <div class="grid-cards">
      <GridSectionCard
        v-for="card of dataFirstGridInfoCards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :subText="card.subText" />
    </div>
    <SectionCard
      :img="'/images/image02.jpg'"
      :imgAlt="'Image 2'"
      :title="'Quam dignissim'"
      :description="'Semper tortor'"
      :subText="'Suspendisse in est ante tellus in hac habitasse platea vestibulum rhoncus turpis massa tincidunt.'"
      :linkText="'Magna ultrices'"
      :directionReverse="true" />
    <div class="grid-cards">
      <GridSectionCard
        v-for="card of dataGridUserCards"
        :key="card.title"
        :img="card.img"
        :imgAlt="card.imgAlt"
        :title="card.title"
        :description="card.description"
        :subText="card.subText" />
    </div>
    <SectionCard
      :img="'/images/image06.jpg'"
      :imgAlt="'Image 3'"
      :title="'Aliquam bibendum'"
      :description="'Arcu elementum'"
      :subText="'Sem viverra aliquet eget sit amet tellus. Lectus mauris ultrices in turpis massa tincidunt. Sodales neque.'"
      :linkText="'Commodo amet'"
      :directionReverse="false" />
    <div class="grid-cards">
      <GridSectionCard
        v-for="card of dataSecondGridInfoCards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :subText="card.subText" />
    </div>
    <SectionCard
      :img="'/images/image04.jpg'"
      :imgAlt="'Image 3'"
      :title="'Eu volutpat'"
      :description="'Risus varius'"
      :subText="'Pharetra et ultrices neque ornare aenean euismod elementum nisi quis ullamcorper velit. Lorem ipsum dolor sit amet.'"
      :linkText="'Sed interdum'"
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
      :title="'Viverra nam'"
      :description="'Aliquam'"
      :subText="'Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Aliquam diam maecenas ultricies massa enim.'"
      :linkText="'Risus nullam'"
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
