import { createRouter, createWebHistory } from 'vue-router'

import TemplatePage from '@/components/TemplatePage.vue'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ProductView from '@/views/ProductView.vue'
import ShoppingView from '@/views/ShoppingView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

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
          component: CatalogView
        },
        {
          path: 'about',
          name: 'about',
          component: ShoppingView
        },
        {
          path: 'premium',
          name: 'premium',
          component: CheckoutView
        },
        {
          path: 'shopping',
          name: 'shopping-bag',
          component: ShoppingView
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: CheckoutView
        },
        {
          path: 'product/:id',
          name: 'product detail',
          component: ProductView
        }
      ]
    }
  ]
})

export default router
