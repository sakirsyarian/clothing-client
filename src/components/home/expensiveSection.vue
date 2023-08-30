<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { useProductStore } from '@/stores/product';

const expensive = ref([])
const productStore = useProductStore();

onMounted(async () => {
    await productStore.getProducts()
    expensive.value = productStore.products
        .sort((a, b) => b.price - a.price)
        .slice(0, 5)
});
</script>

<template>
    <section class="pt-10 pb-5">
        <!-- heading -->
        <div class="pb-8 flex justify-between items-center border-b">
            <h2 class="font-semibold text-2xl uppercase">Most Expensive Items</h2>
            <RouterLink to="/catalog">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </RouterLink>
        </div>

        <!-- card -->
        <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 font-semibold">
            <div v-for="product in expensive" :key="product.id" class="p-5 space-y-5 uppercase bg-base-200">
                <RouterLink :to="'/product/' + product.id">{{ product.name }}</RouterLink>
                <img :src="'/products/' + product.image" class="mx-auto" :alt="product.name">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>{{ product.rupiah }}</p>
                    <button @click="productStore.purchase(product.id)" class="underline">Buy</button>
                </div>
            </div>
        </div>
    </section>
</template>

