<template>
  <main class="news-page">
    <div class="news-page__container">
      <h1 class="news-page__title">
        Новости
      </h1>

      <section
        class="news-page__list"
        aria-label="Список новостей"
      >
        <article
          v-for="item in newsItems"
          :key="item.id"
          class="news-card"
        >
          <img
            class="news-card__image"
            :src="item.image"
            :alt="item.title"
            loading="lazy"
          >
          <div class="news-card__body">
            <div class="news-card__meta">
              <span class="news-card__tag">{{ item.sectionLabel }}</span>
              <time
                class="news-card__date"
                :datetime="item.date"
              >{{ item.date }}</time>
            </div>
            <a
              class="news-card__title"
              :href="item.detailUrl"
            >{{ item.title }}</a>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
import homeLatestNews from '../../mocks/home-latest-news.json'

const newsItems = [homeLatestNews.featured, ...homeLatestNews.more]
</script>

<style scoped>
.news-page {
  width: 100%;
  padding: clamp(16px, 3vw, 32px);
  box-sizing: border-box;
}

.news-page__container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.news-page__title {
  margin: 0 0 clamp(18px, 2.4vw, 28px);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 500;
  font-size: clamp(28px, 2.8vw, 44px);
  line-height: 1.2;
  color: #161221;
}

.news-page__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(14px, 1.8vw, 24px);
}

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
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.news-card__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: clamp(12px, 1.6vw, 18px);
}

.news-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.news-card__tag {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(131, 125, 223, 0.6);
  color: #ffffff;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(13px, 1.1vw, 16px);
  line-height: 1.2;
}

.news-card__date {
  color: rgba(22, 18, 33, 0.55);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(13px, 1.1vw, 16px);
  line-height: 1.2;
}

.news-card__title {
  color: #161221;
  text-decoration: none;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: clamp(17px, 1.5vw, 24px);
  line-height: 1.3;
}

@media (max-width: 900px) {
  .news-page__list {
    grid-template-columns: 1fr;
  }
}
</style>
