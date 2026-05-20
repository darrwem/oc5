<template>
  <section
    class="news-featured"
    aria-label="Последняя новость"
  >
    <div class="news-featured__media">
      <RouterLink
        class="news-featured__image-link"
        :to="buildNewsDetailPath(item.sectionSlug, item.symbolCode)"
      >
        <img
          class="news-featured__image"
          :src="item.image"
          :alt="item.title"
          loading="lazy"
        >
      </RouterLink>
    </div>
    <div class="news-featured__body">
      <SectionDateChip
        :section-label="item.sectionLabel"
        :date="item.date"
        large
      />
      <RouterLink
        class="news-featured__title"
        :to="buildNewsDetailPath(item.sectionSlug, item.symbolCode)"
      >{{ item.title }}</RouterLink>
      <p
        v-if="item.description"
        class="news-featured__description"
      >
        {{ item.description }}
      </p>
    </div>
  </section>
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
.news-featured {
  display: flex;
  align-items: stretch;
  gap: clamp(24px, 4.2vw, 80px);
  width: 100%;
  margin: 0 0 clamp(30px, 4.2vw, 80px);
  border: 1px solid rgba(22, 18, 33, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
}

.news-featured__media {
  width: 0;
  min-width: 0;
  align-self: stretch;
  flex: 1 1 0;
}

.news-featured__image-link {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.news-featured__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.news-featured__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(16px, 1.7vw, 32px);
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  max-width: none;
}

.news-featured__title {
  color: #161221;
  text-decoration: none;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(24px, 2vw, 36px);
  line-height: 1.2;
}

.news-featured__description {
  margin: 0;
  color: rgba(22, 18, 33, 0.6);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(14px, 1.15vw, 24px);
  line-height: calc(28 / 24);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  overflow: hidden;
}

@media (max-width: 900px) {
  .news-featured {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .news-featured__media {
    display: block;
    width: 100%;
    flex: 0 0 auto;
  }

  .news-featured__image {
    display: block;
    width: 100%;
    height: auto;
  }

  .news-featured__description {
    display: none;
  }

  .news-featured__body {
    width: 100%;
    max-width: 100%;
    padding: clamp(12px, 1.6vw, 18px);
  }
}
</style>
