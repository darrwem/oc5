<template>
  <nav
    class="breadcrumbs"
    aria-label="Хлебные крошки"
  >
    <template
      v-for="(item, index) in items"
      :key="`${item.label}-${index}`"
    >
      <RouterLink
        v-if="item.to && !item.current"
        class="breadcrumbs__item"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
      <span
        v-else
        class="breadcrumbs__item"
      >
        {{ item.label }}
      </span>
      <span
        v-if="index < items.length - 1"
        class="breadcrumbs__sep"
      > - </span>
    </template>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 0 0 32px;
  box-sizing: border-box;
}

.breadcrumbs__item,
.breadcrumbs__sep {
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(13px, 1vw, 16px);
  line-height: 1.2;
  color: rgba(22, 18, 33, 0.5);
}

.breadcrumbs__item {
  text-underline-offset: 2px;
}

@media (max-width: 1000px) {
  .breadcrumbs {
    padding: 0 0 20px;
    gap: 8px;
  }

  .breadcrumbs__item,
  .breadcrumbs__sep {
    font-size: clamp(13px, 1vw, 16px);
    line-height: 1.2;
  }
}
</style>
