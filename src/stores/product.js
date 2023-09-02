import { ref } from 'vue'
import { defineStore } from 'pinia'

import { get } from '@/lib/axios'
import rupiah from '@/utils/rupiah'

const url = 'http://localhost:3000/products/'
export const urlCustomer = 'http://localhost:3000/customer/products'

export const useProductStore = defineStore('product', () => {
  const search = ref('')
  const toast = ref(false)
  const products = ref([])
  const pagination = ref({})
  const shoppingCart = ref([])

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

  async function getProducts(urlProduct = url) {
    try {
      const { data: productList } = await get(urlProduct)
      productList.data.map((product) => {
        product.quantity = 1
        product.rupiah = rupiah(product.price)
      })

      if (urlProduct !== `http://localhost:3000/products`) {
        pagination.value = productList.pagination
      }

      products.value = productList.data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    toast,
    search,
    products,
    pagination,
    shoppingCart,
    purchase,
    getProducts
  }
})
