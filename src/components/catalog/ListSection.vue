<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '@/stores/product';

defineProps(['products', 'pagination', 'pageNumber']);
const productStore = useProductStore();
</script>

<template>
    <section class="md:col-span-3 lg:col-span-4 border-t">
        <!-- tshirt -->
        <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-semibold">
            <div v-for="product in products" :key="product.id" class="p-5 space-y-5 uppercase bg-base-200">
                <RouterLink :to="'/product/' + product.id">{{ product.name }}</RouterLink>
                <img :src="'/products/' + product.image" class="mx-auto" :alt="product.name">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>{{ product.rupiah }}</p>
                    <button @click="productStore.purchase(product.id)" class="underline">Buy</button>
                </div>
            </div>
        </div>

        <!-- pagination -->
        <div class="join rounded-none">
            <template v-for="number in pagination?.totalPage" :key="number">
                <button @click="pageNumber(number)" class="join-item btn"
                    :class="{ 'btn-active': pagination.currentPage === number }">
                    {{ number }}
                </button>
            </template>
        </div>
    </section>
</template>