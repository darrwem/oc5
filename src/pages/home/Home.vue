<template>
  <main class="home">
    <LatestNewsSection :data="latestNews" />
    <FirstBanner :banner="firstBanner" />
    <StaticInfoGrid
      v-for="section in staticSections"
      :key="section.id"
      :section="section"
    />
    <SchoolQuestionsBanner :banner="schoolQuestionsBanner" />
  </main>
</template>

<script setup>
import homeBanners from '../../mocks/home-banners.json'
import homeLatestNews from '../../mocks/home-latest-news.json'
import schoolQuestionsBanner from '../../mocks/home-school-questions-banner.json'
import staticSections from '../../mocks/home-static-tiles.json'

import FirstBanner from '../../components/home/FirstBanner.vue'
import LatestNewsSection from '../../components/home/LatestNewsSection.vue'
import SchoolQuestionsBanner from '../../components/home/SchoolQuestionsBanner.vue'
import StaticInfoGrid from '../../components/home/StaticInfoGrid.vue'

const firstBanner = homeBanners[0]
const latestNews = homeLatestNews
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
