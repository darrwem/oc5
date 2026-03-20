<template>
  <div id="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
</script>

<style>
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

