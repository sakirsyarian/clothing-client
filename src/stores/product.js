import { ref } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios'

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

  return { url, products, shoppingCart, purchase }
})
