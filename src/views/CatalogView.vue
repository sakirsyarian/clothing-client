<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { useProductStore } from '@/stores/product';
import searchProduct from '@/utils/searchProduct';
import SortSection from '@/components/catalog/SortSection.vue';
import ListSection from '@/components/catalog/ListSection.vue';

const url = 'http://localhost:3000/customer/products'
const productStore = useProductStore();

const price = ref('None');
const categories = ref([]);

async function checkCategories(argument) {
    categories.value = argument;

    price.value = 'None'
    await productStore.getProducts();

    const filterCategories = productStore.products.filter(product => {
        return product.Category.name.includes(categories.value)
    });

    if (!filterCategories.length) {
        return await productStore.getProducts()
    }

    if (!categories.value.length) {
        return await productStore.getProducts('http://localhost:3000/customer/products')
    }

    productStore.products = filterCategories;
}

async function radioPrice(argument) {
    price.value = argument;

    categories.value = [];
    await productStore.getProducts();

    if (price.value === 'Lowest') {
        const cheapest = productStore.products
            .sort((a, b) => a.price - b.price);

        productStore.products = cheapest;
        return
    }

    if (price.value === 'Highest') {
        const expensive = productStore.products
            .sort((a, b) => b.price - a.price)

        productStore.products = expensive;
        return
    }

    await productStore.getProducts('http://localhost:3000/customer/products');
}

async function pageNumber(number) {
    await productStore.getProducts(`${url}?page=${number}`)
}

onMounted(async () => {
    if (productStore.search) {
        return searchProduct(productStore);
    }

    await productStore.getProducts(url)
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
            <SortSection @radio-price="radioPrice" :price="price" @check-categories="checkCategories" />
            <ListSection :products="productStore.products" :pagination="productStore.pagination" :pageNumber="pageNumber" />
        </div>
    </section>
</template>