import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import TemplatePage from '@/components/TemplatePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TemplatePage,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'catalog',
          name: 'catalog',
          component: CatalogView
        }
      ]
    }
  ]
})

export default router
