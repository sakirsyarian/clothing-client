<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'

import { useProductStore } from '@/stores/product';
import ShoppingSection from '@/components/shop/ShoppingSection.vue';

function quantityPlus(id) {
    const found = productStore.shoppingCart.find((el) => el.id === id)
    found.quantity++
}

function quantityMinus(id) {
    const found = productStore.shoppingCart.find((el) => el.id === id)
    found.quantity--
}

function deleteProduct(id) {
    const filter = productStore.shoppingCart.filter(el => el.id !== id)
    productStore.shoppingCart = filter
}

const productStore = useProductStore();

onMounted(async () => {
    await productStore.getProducts()
});
</script>

<template>
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">Shopping Bag</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/catalog">Product</RouterLink>
                    </li>
                    <li>Shopping Bag</li>
                </ul>
            </div>
        </div>

        <ShoppingSection :products="productStore.shoppingCart" :quantityPlus="quantityPlus" :quantityMinus="quantityMinus"
            :deleteProduct="deleteProduct" />
    </section>
</template>