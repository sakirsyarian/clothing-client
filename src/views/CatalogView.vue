<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink, onBeforeRouteLeave } from 'vue-router'

import { urlCustomer } from '@/stores/product';
import { useProductStore } from '@/stores/product';
import searchProduct from '@/utils/searchProduct';
import SortSection from '@/components/catalog/SortSection.vue';
import ListSection from '@/components/catalog/ListSection.vue';

const route = useRoute();
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
        return await productStore.getProducts(urlCustomer)
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

    await productStore.getProducts(urlCustomer);
}

async function pageNumber(number) {
    await productStore.getProducts(`${urlCustomer}?page=${number}`)
}

onBeforeRouteLeave(async (to) => {
    if (to.path === '/premium') {
        categories.value = ['Premium'];
        checkCategories(categories.value);
    }

    if (to.path === '/tshirt') {
        categories.value = ['Tshirt'];
        checkCategories(categories.value);
    }

    if (to.path === '/catalog') {
        await productStore.getProducts(urlCustomer);
    }
})

onMounted(async () => {
    if (productStore.search) {
        return searchProduct(productStore);
    }

    if (route.path === '/premium') {
        categories.value = ['Premium'];
        return checkCategories(categories.value);
    }

    if (route.path === '/tshirt') {
        categories.value = ['Tshirt'];
        return checkCategories(categories.value);
    }

    if (route.query.price === 'lowest') {
        price.value = 'Lowest';
        return radioPrice(price.value);
    }

    if (route.query.price === 'highest') {
        price.value = 'Highest';
        return radioPrice(price.value);
    }

    await productStore.getProducts(urlCustomer)
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