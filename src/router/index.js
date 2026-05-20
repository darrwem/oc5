import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Contacts from '../pages/contacts/Contacts.vue'
import News from '../pages/news/News.vue'
import NewsDetail from '../pages/news/NewsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news/:sectionSlug?',
    name: 'News',
    component: News
  },
  {
    path: '/news/:sectionSlug/:newsSymbolCode',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
