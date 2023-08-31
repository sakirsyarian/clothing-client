<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useProductStore } from '@/stores/product';

const props = defineProps([
    'products']
);

const random = ref([])
const productStore = useProductStore();

function randomProducts(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

onMounted(async () => {
    await productStore.getProducts()
    random.value = randomProducts(productStore.products)
        .slice(0, 5)
});

onUpdated(async () => {
    // await productStore.getProducts()
}) 
</script>

<template>
    <!-- heading -->
    <div class="pt-8">
        <h2 class="font-semibold text-2xl uppercase">You May Also Like</h2>
    </div>

    <!-- shirt -->
    <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 font-semibold">
        <div v-for="product in products" :key="product.id" class="p-5 space-y-5 uppercase bg-base-200">
            <RouterLink :to="'/product/' + product.id">{{ product.name }}</RouterLink>
            <img :src="'/products/' + product.image" class="mx-auto" :alt="product.name">
            <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                <p>{{ product.rupiah }}</p>
                <button @click="productStore.purchase(product.id)" class="underline">Buy</button>
            </div>
        </div>
    </div>
</template>

