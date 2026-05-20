<template>
  <section
    class="news-grid"
    aria-label="Список новостей"
  >
    <NewsCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script setup>
import NewsCard from './NewsCard.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 1.8vw, 24px);
}

@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
