<template>
  <main
    v-if="newsItem"
    class="news-detail"
  >
    <div class="news-detail__container">
      <Breadcrumbs :items="breadcrumbsItems" />

      <header class="news-detail__header">
        <h1 class="news-detail__title">
          {{ newsItem.title }}
          <span class="news-detail__title-date">{{ newsItem.date }}</span>
        </h1>
      </header>

      <section class="news-detail__lead">
        <img
          class="news-detail__image"
          :src="detailImage"
          :alt="newsItem.title"
          loading="lazy"
        >
        <div
          class="news-detail__announce news-detail__rich"
          v-html="announceText"
        />
      </section>

      <section class="news-detail__content">
        <div
          class="news-detail__rich"
          v-html="bodyText"
        />
      </section>
    </div>
  </main>

  <main
    v-else
    class="news-detail"
  >
    <div class="news-detail__container">
      <h1 class="news-detail__title">
        Новость не найдена
      </h1>
      <RouterLink
        class="news-detail__back-link"
        to="/news"
      >
        Вернуться к списку новостей
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from '../../components/common/Breadcrumbs.vue'
import newsDetails from '../../mocks/news-details.json'
import newsItems from '../../mocks/news-list.json'

const route = useRoute()

const newsItem = computed(() => {
  const sectionSlug = typeof route.params.sectionSlug === 'string' ? route.params.sectionSlug : ''
  const newsSymbolCode = typeof route.params.newsSymbolCode === 'string' ? route.params.newsSymbolCode : ''
  return newsItems.find((item) => item.sectionSlug === sectionSlug && item.symbolCode === newsSymbolCode) ?? null
})

const newsDetail = computed(() => {
  if (!newsItem.value) {
    return null
  }
  return newsDetails.find((item) => item.symbolCode === newsItem.value.symbolCode) ?? null
})

const announceText = computed(() => {
  if (!newsItem.value) {
    return ''
  }
  if (newsDetail.value?.announceText) {
    return newsDetail.value.announceText
  }
  const fallback = newsItem.value.description || 'Анонс новости будет добавлен позже.'
  return `<p>${fallback}</p>`
})

const detailImage = computed(() => {
  if (!newsItem.value) {
    return ''
  }
  return newsDetail.value?.image || newsItem.value.image
})

const bodyText = computed(() => {
  if (!newsItem.value) {
    return ''
  }
  if (newsDetail.value?.bodyText) {
    return newsDetail.value.bodyText
  }
  const fallback = newsItem.value.description || 'Основной текст новости будет добавлен позже.'
  return `<p>${fallback}</p>`
})

const breadcrumbsItems = computed(() => {
  if (!newsItem.value) {
    return []
  }

  return [
    { label: 'Главная', to: '/' },
    { label: 'Новости', to: '/news' },
    { label: newsItem.value.sectionLabel, to: `/news/${newsItem.value.sectionSlug}` },
    { label: newsItem.value.title, current: true }
  ]
})
</script>

<style scoped>
.news-detail {
  width: 100%;
  padding: clamp(16px, 3vw, 32px) 0 clamp(28px, 4vw, 56px);
  box-sizing: border-box;
}

.news-detail__container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 clamp(16px, 3.2vw, 32px);
  box-sizing: border-box;
}

.news-detail__header {
  margin-bottom: clamp(20px, 2.8vw, 36px);
}

.news-detail__title {
  margin: 0;
  width: 100%;
  max-width: 1856px;
  align-self: stretch;
  color: #161221;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
}

.news-detail__title-date {
  margin-left: clamp(10px, 1.2vw, 18px);
  white-space: nowrap;
  color: rgba(22, 18, 33, 0.55);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(14px, 1.1vw, 20px);
}

.news-detail__lead {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  max-width: 100%;
  margin-bottom: clamp(20px, 3vw, 36px);
}

.news-detail__image {
  width: calc((100% - 32px) / 2);
  max-width: calc((100% - 32px) / 2);
  aspect-ratio: 850 / 425;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
  min-width: 0;
}

.news-detail__announce,
.news-detail__paragraph {
  margin: 0;
  color: #161221;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(16px, 1.2vw, 24px);
  line-height: 1.45;
}

.news-detail__announce {
  width: calc((100% - 32px) / 2);
  max-width: calc((100% - 32px) / 2);
  min-width: 0;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(16px, 1.2vw, 24px);
  line-height: 1.45;
  color: #161221;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.news-detail__rich {
  color: #161221;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(16px, 1.2vw, 24px);
  line-height: 1.45;
}

.news-detail__rich :deep(p) {
  margin: 0 0 clamp(14px, 1.8vw, 22px);
}

.news-detail__rich :deep(ul) {
  margin: 0 0 clamp(14px, 1.8vw, 22px);
  padding-left: 1.2em;
}

.news-detail__rich :deep(li) {
  margin: 0 0 8px;
}

.news-detail__back-link {
  color: #161221;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(14px, 1.2vw, 18px);
}

@media (max-width: 900px) {
  .news-detail__lead {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
    gap: clamp(18px, 2vw, 32px);
  }

  .news-detail__image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .news-detail__announce {
    width: 100%;
    max-width: 100%;
    height: auto;
    font-size: clamp(16px, 1.2vw, 24px);
    line-height: 1.45;
  }

  .news-detail__rich {
    font-size: clamp(16px, 1.2vw, 24px);
    line-height: 1.45;
  }
}
</style>
