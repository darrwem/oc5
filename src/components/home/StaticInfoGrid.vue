<template>
  <section class="static-grid" :style="{ paddingBottom: `${section.paddingBottom}px` }">
    <article
      v-for="(item, index) in section.items"
      :key="`${section.id}-${index}`"
      class="static-grid__card"
      :class="{ 'static-grid__card--text': !item.link }"
    >
      <h3 class="static-grid__title">{{ item.title }}</h3>
      <a v-if="item.link" class="static-grid__link" :href="item.link" aria-label="Перейти">
        <img src="/assets/tile-arrow.svg" alt="" />
      </a>
      <p v-else-if="item.text" class="static-grid__text">{{ item.text }}</p>
      <div v-else class="static-grid__spacer" />
    </article>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.static-grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1920px;
  padding: 0 32px;
  margin: 0 auto;
  box-sizing: border-box;
}

.static-grid__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px;
  width: calc((100% - 96px) / 4);
  min-height: 271px;
  background: rgba(131, 125, 223, 0.5);
  border-radius: 30px;
  box-sizing: border-box;
  flex: 1 1 0;
}

.static-grid__card--text {
  align-items: center;
}

.static-grid__title {
  margin: 0;
  width: 100%;
  min-height: 94px;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  color: #0b147d;
}

.static-grid__link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 44px;
  height: 44px;
  border-radius: 30px;
  text-decoration: none;
  background: transparent;
  transition: background-color 0.2s ease;
}

.static-grid__link:hover {
  background: #ffffff;
}

.static-grid__link img {
  width: 24px;
  height: 24px;
  display: block;
}

.static-grid__text {
  margin: 0;
  width: 100%;
  white-space: pre-line;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 29.6571px;
  line-height: 35px;
  color: rgba(22, 18, 33, 0.5);
}

.static-grid__spacer {
  width: 100%;
  min-height: 105px;
}

@media (max-width: 1600px) {
  .static-grid__title {
    font-size: 32px;
    line-height: 1.2;
  }

  .static-grid__text {
    font-size: 24px;
    line-height: 1.35;
  }
}

@media (max-width: 1200px) {
  .static-grid {
    flex-wrap: wrap;
    padding: 0 20px;
    gap: 20px;
  }

  .static-grid__card {
    width: calc((100% - 20px) / 2);
    min-height: 240px;
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .static-grid {
    padding: 0 16px;
  }

  .static-grid__card {
    width: 100%;
  }

  .static-grid__title {
    font-size: 28px;
  }
}
</style>
