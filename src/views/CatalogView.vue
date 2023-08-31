<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { useProductStore } from '@/stores/product';
import SortSection from '@/components/catalog/SortSection.vue';
import ListSection from '@/components/catalog/ListSection.vue';

const productStore = useProductStore();
onMounted(async () => {
    await productStore.getProducts()
});
</script>

<template>
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">Catalog</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>Catalog</li>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-20">
            <SortSection />
            <ListSection :products="productStore.products" />
        </div>
    </section>
</template>