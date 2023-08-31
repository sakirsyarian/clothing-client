<script setup>
defineProps(['products', 'pushRouter']);
</script>

<template>
    <!-- heading -->
    <div class="pt-8">
        <h2 class="font-semibold text-2xl uppercase">You May Also Like</h2>
    </div>

    <!-- shirt -->
    <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 font-semibold">
        <div v-for="product in products" :key="product.id" class="p-5 space-y-5 uppercase bg-base-200">
            <button class="uppercase" @click="pushRouter(product.id)">
                {{ product.name }}
            </button>
            <img :src="'/products/' + product.image" class="mx-auto" :alt="product.name">
            <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                <p>{{ product.rupiah }}</p>
                <button @click="productStore.purchase(product.id)" class="underline">Buy</button>
            </div>
        </div>
    </div>
</template>

