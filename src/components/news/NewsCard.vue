<template>
  <article class="news-card">
    <RouterLink
      class="news-card__image-link"
      :to="buildNewsDetailPath(item.sectionSlug, item.symbolCode)"
    >
      <img
        class="news-card__image"
        :src="item.image"
        :alt="item.title"
        loading="lazy"
      >
    </RouterLink>
    <div class="news-card__body">
      <SectionDateChip
        :section-label="item.sectionLabel"
        :date="item.date"
      />
      <RouterLink
        class="news-card__title"
        :to="buildNewsDetailPath(item.sectionSlug, item.symbolCode)"
      >{{ item.title }}</RouterLink>
    </div>
  </article>
</template>

<script setup>
import SectionDateChip from './SectionDateChip.vue'
import { buildNewsDetailPath } from '../../utils/news-routing'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(22, 18, 33, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
}

.news-card__image {
  width: 100%;
  aspect-ratio: 596 / 338;
  object-fit: cover;
  display: block;
}

.news-card__image-link {
  display: block;
  line-height: 0;
}

.news-card__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: clamp(12px, 1.6vw, 18px);
}

.news-card__title {
  color: #161221;
  text-decoration: none;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(17px, 1.5vw, 24px);
  line-height: 1.3;
}

@media (max-width: 700px) {
  .news-card__image {
    aspect-ratio: auto;
    height: auto;
    object-fit: unset;
  }
}
</style>
