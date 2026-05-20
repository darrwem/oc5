<template>
  <main class="news-page">
    <div class="news-page__container">
      <h1 class="news-page__title">
        Новости
      </h1>
    </div>

    <NewsSectionsFilter
      :sections="sections"
      :active-slug="activeSectionSlug"
    />

    <div class="news-page__container">
      <FeaturedNewsCard
        v-if="featuredNews"
        :item="featuredNews"
      />
      <NewsGrid :items="regularNews" />
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FeaturedNewsCard from '../../components/news/FeaturedNewsCard.vue'
import NewsGrid from '../../components/news/NewsGrid.vue'
import NewsSectionsFilter from '../../components/news/NewsSectionsFilter.vue'
import newsItems from '../../mocks/news-list.json'

const route = useRoute()

const sections = computed(() => {
  const map = new Map()
  for (const item of newsItems) {
    if (!map.has(item.sectionSlug)) {
      map.set(item.sectionSlug, {
        sectionSlug: item.sectionSlug,
        sectionLabel: item.sectionLabel,
        count: 0
      })
    }
    map.get(item.sectionSlug).count += 1
  }
  return [...map.values()]
})

const activeSectionSlug = computed(() => {
  const sectionSlug = route.params.sectionSlug
  return typeof sectionSlug === 'string' ? sectionSlug : ''
})

const filteredNews = computed(() => {
  if (!activeSectionSlug.value) {
    return newsItems
  }
  return newsItems.filter((item) => item.sectionSlug === activeSectionSlug.value)
})

const featuredNews = computed(() => filteredNews.value[0] ?? null)
const regularNews = computed(() => filteredNews.value.slice(1))
</script>

<style scoped>
.news-page {
  width: 100%;
  padding: clamp(16px, 3vw, 32px) 0;
  box-sizing: border-box;
}

.news-page__container {
  width: 100%;
  max-width: 1920px;
  padding: 0 clamp(16px, 3.2vw, 32px);
  margin: 0 auto;
  box-sizing: border-box;
}

.news-page__title {
  margin: 0 0 clamp(18px, 2.4vw, 28px);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 500;
  font-size: clamp(28px, 2.8vw, 44px);
  line-height: 1.2;
  color: #161221;
}
</style>
