<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '@/stores/product';

defineProps(['cheapest']);
const productStore = useProductStore();
</script>

<template>
    <section class="py-5">
        <!-- heading -->
        <div class="pb-8 flex justify-between items-center border-b">
            <h2 class="font-semibold text-2xl uppercase">Cheapest Items</h2>
            <RouterLink to="/catalog?price=lowest">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </RouterLink>
        </div>

        <!-- card -->
        <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 font-semibold">
            <div v-for="product in cheapest" :key="product.id" class="p-5 space-y-5 uppercase bg-base-200">
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

