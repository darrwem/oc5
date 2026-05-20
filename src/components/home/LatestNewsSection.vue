<template>
  <section
    class="latest-news"
    aria-labelledby="latest-news-heading"
  >
    <h2
      id="latest-news-heading"
      class="latest-news__heading"
    >
      Последние новости
    </h2>
    <div class="latest-news__row">
      <article class="latest-news__featured">
        <a
          class="latest-news__media-link"
          :href="data.featured.detailUrl"
        >
          <img
            class="latest-news__featured-img"
            :src="data.featured.image"
            :alt="data.featured.title"
            loading="lazy"
          >
        </a>
        <div class="latest-news__featured-body">
          <div class="latest-news__meta">
            <SectionDateChip
              :section-label="data.featured.sectionLabel"
              :section-to="`/news/${data.featured.sectionSlug}`"
              :date="data.featured.date"
              large
            />
          </div>
          <a
            class="latest-news__title latest-news__title--featured"
            :href="data.featured.detailUrl"
          >
            {{ data.featured.title }}
          </a>
        </div>
      </article>

      <div
        class="latest-news__list"
        role="list"
      >
        <article
          v-for="item in data.more"
          :key="item.id"
          class="latest-news__compact"
          role="listitem"
        >
          <a
            class="latest-news__thumb-link"
            :href="item.detailUrl"
          >
            <img
              class="latest-news__thumb"
              :src="item.image"
              :alt="item.title"
              loading="lazy"
            >
          </a>
          <div class="latest-news__compact-body">
            <div class="latest-news__meta">
              <SectionDateChip
                :section-label="item.sectionLabel"
                :section-to="`/news/${item.sectionSlug}`"
                :date="item.date"
              />
            </div>
            <a
              class="latest-news__title latest-news__title--compact"
              :href="item.detailUrl"
            >{{
              item.title
            }}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionDateChip from '../news/SectionDateChip.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.latest-news {
  --ln-inline: clamp(16px, 3.2vw, 32px);
  --ln-bottom: clamp(40px, 6vw, 80px);
  --ln-gap: clamp(20px, 2vw, 32px);
  --ln-gap-inner: clamp(16px, 2vw, 24px);
  --ln-radius-lg: clamp(22px, 4.5vw, 52px);
  --ln-radius-sm: clamp(14px, 2.8vw, 24px);
  --ln-tag-bg: rgba(131, 125, 223, 0.6);
  --ln-text: #161221;
  --ln-date: rgba(22, 18, 33, 0.5);
  --ln-title-featured: clamp(20px, 1.7vw + 0.75rem, 32px);
  --ln-lh-featured: calc(38 / 32 * 1em);
  --ln-title-compact: clamp(17px, 1.1vw + 0.65rem, 24px);
  --ln-lh-compact: calc(28 / 24 * 1em);
  --ln-tag-lg: clamp(20px, 1.4vw + 0.65rem, 32px);
  --ln-tag-sm: clamp(16px, 1vw + 0.5rem, 24px);
  --ln-thumb: 27%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--ln-gap);
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 var(--ln-inline) var(--ln-bottom);
  box-sizing: border-box;
}

.latest-news__heading {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.latest-news__row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: var(--ln-gap);
  width: 100%;
  max-width: min(100%, 1800px);
  margin: 0 auto;
  box-sizing: border-box;
}

.latest-news__featured {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--ln-gap);
  flex: 0 1 48%;
  min-width: 0;
}

.latest-news__media-link {
  display: block;
  width: 100%;
  border-radius: var(--ln-radius-lg);
  overflow: hidden;
  line-height: 0;
}

.latest-news__featured-img {
  width: 100%;
  height: auto;
  aspect-ratio: 897 / 544;
  object-fit: cover;
  display: block;
}

.latest-news__featured-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ln-gap-inner);
  width: 100%;
  max-width: 100%;
}

.latest-news__list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--ln-gap);
  flex: 1 1 50%;
  min-width: 0;
}

.latest-news__compact {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--ln-gap-inner);
  width: 100%;
  min-width: 0;
}

.latest-news__thumb-link {
  display: block;
  flex: 0 0 var(--ln-thumb);
  max-width: 40%;
  border-radius: var(--ln-radius-sm);
  overflow: hidden;
  line-height: 0;
}

.latest-news__thumb {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}

.latest-news__compact-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ln-gap-inner);
  flex: 1 1 auto;
  min-width: 0;
}

.latest-news__meta {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ln-gap-inner);
  width: 100%;
}

.latest-news__title {
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  color: var(--ln-text);
  text-decoration: none;
  width: 100%;
  overflow-wrap: anywhere;
}

.latest-news__title--featured {
  font-size: var(--ln-title-featured);
  line-height: var(--ln-lh-featured);
}

.latest-news__title--compact {
  font-size: var(--ln-title-compact);
  line-height: var(--ln-lh-compact);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

@media (max-width: 900px) {
  .latest-news__row {
    flex-direction: column;
  }

  .latest-news__featured {
    flex: 1 1 auto;
    width: 100%;
  }

  .latest-news__list {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: var(--ln-gap);
    padding-bottom: 4px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .latest-news__compact {
    flex: 0 0 min(86%, 22rem);
    flex-direction: column;
    width: min(86%, 22rem);
    max-width: 100%;
  }

  .latest-news__thumb-link {
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
  }
}
</style>
