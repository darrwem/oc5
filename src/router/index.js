import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import News from '../pages/news/News.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
