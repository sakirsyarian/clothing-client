<script setup>
import { onMounted } from 'vue'

import { get } from '@/lib/axios';
import rupiah from '@/utils/rupiah';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();
onMounted(async () => {
    const { data: productList } = await get(productStore.url)

    productList.data.map(product => product.price = rupiah(product.price))
    productStore.products = productList.data
});
</script>

<template>
    <section class="md:col-span-3 lg:col-span-4 border-t">
        <!-- tshirt -->
        <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-semibold">
            <div v-for="product in productStore.products" :key="product.id" class="p-5 space-y-5 uppercase bg-base-200">
                <a :href="'/product/' + product.id">{{ product.name }}</a>
                <img :src="'/products/' + product.image" class="mx-auto" alt="javascript">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>{{ product.price }}</p>
                    <a href="#" class="underline">Buy</a>
                </div>
            </div>
        </div>

        <!-- pagination -->
        <div className="join rounded-none">
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
        </div>
    </section>
</template>