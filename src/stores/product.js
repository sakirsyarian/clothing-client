import { ref } from 'vue'
import { defineStore } from 'pinia'

import { get } from '@/lib/axios'
import rupiah from '@/utils/rupiah'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const shoppingCart = ref([])
  const url = 'http://localhost:3000/products/'

  function purchase(itemId) {
    const found = shoppingCart.value.find((el) => el.id === itemId)
    const findProduct = products.value.find((el) => el.id === itemId)

    if (!found) {
      return shoppingCart.value.push({
        id: findProduct.id,
        name: findProduct.name,
        image: findProduct.image,
        description: findProduct.description,
        price: findProduct.price,
        quantity: findProduct.quantity
      })
    }

    return (found.quantity = findProduct.quantity)
  }

  async function getProducts() {
    try {
      const { data: productList } = await get(url)
      productList.data.map((product) => {
        product.quantity = 1
        product.rupiah = rupiah(product.price)
      })

      products.value = productList.data
    } catch (error) {
      console.error(error)
    }
  }

  return { url, products, shoppingCart, purchase, getProducts }
})
