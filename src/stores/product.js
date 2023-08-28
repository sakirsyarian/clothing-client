import { ref } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const url = 'http://localhost:3000/products'

  return { products, url }
})
