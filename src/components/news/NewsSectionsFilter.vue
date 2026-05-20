<template>
  <section
    class="news-sections"
    aria-label="Рубрики новостей"
  >
    <div class="news-sections__row">
      <RouterLink
        v-for="section in sections"
        :key="section.sectionSlug"
        class="news-sections__chip"
        :class="{ 'news-sections__chip--active': section.sectionSlug === activeSlug }"
        :to="getSectionLink(section.sectionSlug)"
      >
        <span class="news-sections__label">{{ section.sectionLabel }}</span>
        <span class="news-sections__count">{{ section.count }}</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeSlug: {
    type: String,
    default: ''
  }
})

function getSectionLink(sectionSlug) {
  return sectionSlug === props.activeSlug ? '/news' : `/news/${sectionSlug}`
}
</script>

<style scoped>
.news-sections {
  width: 100%;
  padding: 0 clamp(16px, 3.2vw, 32px) clamp(20px, 2.2vw, 32px);
  box-sizing: border-box;
}

.news-sections__row {
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.6vw, 30px);
  width: 100%;
  max-width: 1856px;
  margin: 0 auto;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.news-sections__chip {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  min-height: clamp(44px, 3.25vw, 62px);
  padding: clamp(8px, 0.7vw, 12px) clamp(16px, 1.3vw, 24px);
  border: 1px solid #837ddf;
  border-radius: 30px;
  text-decoration: none;
  white-space: nowrap;
  color: #161221;
  background: #ffffff;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: clamp(18px, 1.45vw, 32px);
  line-height: 1.2;
  gap: 0;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.news-sections__label {
  white-space: nowrap;
}

.news-sections__count {
  opacity: 0.5;
  white-space: nowrap;
  min-width: 2ch;
  padding-left: 0.35ch;
  text-align: right;
}

.news-sections__chip:hover,
.news-sections__chip--active {
  background: #837ddf;
  color: #ffffff;
}

@media (max-width: 768px) {
  .news-sections__row {
    padding-bottom: 2px;
  }
}
</style>
