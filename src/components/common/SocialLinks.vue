<template>
  <div class="social-links">
    <a
      v-for="item in items"
      :key="item.label"
      class="social-links__link"
      :href="item.href"
      :aria-label="item.label"
    >
      <img
        class="social-links__icon"
        :src="item.icon"
        :alt="item.label"
      >
    </a>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => ([
      { label: 'VK', href: 'https://vk.ru/educational_center_5', icon: '/assets/vk_logo.png' },
      { label: 'Мессенджер', href: 'https://max.ru/join/ZfQ1E_IFE_IF93_z0zBmSv4l66oHoVEIJy6lg3iyDAk', icon: '/assets/max_logo.png' }
    ])
  }
})
</script>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  width: fit-content;
}

.social-links__link {
  display: inline-flex;
  width: 54px;
  height: 54px;
}

.social-links__icon {
  width: 54px;
  height: 54px;
  object-fit: contain;
  display: block;
}
</style>
