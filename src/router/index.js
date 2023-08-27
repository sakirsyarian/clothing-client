import { createRouter, createWebHistory } from 'vue-router'
import TemplatePage from '@/components/TemplatePage.vue'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ProductView from '@/views/ProductView.vue'

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
        },
        {
          path: 'tshirt',
          name: 'tshirt',
          component: ProductView
        }
      ]
    }
  ]
})

export default router
