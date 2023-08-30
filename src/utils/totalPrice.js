import rupiah from '@/utils/rupiah'

/**
 * The function calculates the total price of a list of products by multiplying the price of each
 * product by its quantity and summing them up.
 * @param products - An array of objects representing different products. Each object has two
 * properties: "price" (number) and "quantity" (number).
 * @returns the total price of all the products in the given array.
 */
export default function totalPrice(products) {
  let total = 0
  products.forEach((product) => {
    total += product.price * product.quantity
  })

  return rupiah(total)
}
