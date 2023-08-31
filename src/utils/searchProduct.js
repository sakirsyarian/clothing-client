/**
 * Searches for a product in the store based on a search term.
 *
 * @param {Store} store - The store object.
 * @return {Promise<void>} - A promise that resolves once the search is complete.
 */

export default async function searchProduct(store) {
  await store.getProducts()
  const filterProduct = store.products.filter((item) => {
    return item.name.toLowerCase().match(store.search.toLowerCase())
  })

  store.products = filterProduct
}
