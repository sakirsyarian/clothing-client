<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router'

import { useProductStore } from '@/stores/product';

const route = useRoute()
const quantity = ref(0);
const productDetail = ref({});
const productStore = useProductStore();

function quantityOnShoppingCart() {
    if (productStore.shoppingCart.length) {
        const found = productStore.shoppingCart.find((el) => el.id === productDetail.value.id)
        found.quantity = quantity.value
    }
}

function quantityPlus() {
    quantity.value++
    productDetail.value.quantity = quantity.value
    quantityOnShoppingCart()
}

function quantityMinus() {
    quantity.value--
    productDetail.value.quantity = quantity.value
    quantityOnShoppingCart()
}

function addToChart() {
    productDetail.value.quantity = quantity.value
    productStore.purchase(productDetail.value.id)
}

onMounted(async () => {
    await productStore.getProducts()

    productDetail.value = productStore.products.find((el) => el.id === +route.params.id)
    quantity.value = productDetail.value.quantity
});
</script>

<template>
    <!-- information -->
    <div class="w-full space-y-8 md:space-y-10">
        <!-- breadcrumbs -->
        <div class="text-sm breadcrumbs">
            <ul class="text-gray-500">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/catalog">Product</RouterLink>
                </li>
                <li>{{ productDetail.name }}</li>
            </ul>
        </div>

        <!-- heading -->
        <div class="space-y-5">
            <h2 @click="quantityProduct" class="font-semibold text-2xl uppercase">{{ productDetail.name }}</h2>
            <p class="uppercase text-lg text-gray-600">{{ productDetail.rupiah }}</p>
        </div>

        <!-- info -->
        <div class="space-y-2 text-gray-500">
            <p>Stock: {{ productDetail.stock }}</p>
            <p>Category: {{ productDetail.Category?.name }}</p>
        </div>

        <!-- description -->
        <div class="space-y-2">
            <p>Description :</p>
            <p class="text-gray-500">{{ productDetail.description }} </p>
        </div>
    </div>

    <!-- image -->
    <div class="w-full">
        <div class="p-10 bg-base-200">
            <img :src="'/products/' + productDetail.image" class="mx-auto h-96" :alt="productDetail.name">
        </div>
    </div>

    <!-- cart -->
    <div class="w-full flex flex-col justify-between gap-8 md:gap-0">
        <div>
            <p class="mb-4 font-semibold uppercase">Quantity</p>
            <div class="flex gap-2">
                <button @click="quantityMinus" class="px-4 py-1 border" :disabled="quantity === 1">-</button>
                <p class="px-4 py-1 text-center border">{{ quantity }}</p>
                <button @click="quantityPlus" class="px-4 py-1 border">+</button>
            </div>
        </div>

        <button @click="addToChart" className="btn w-full block py-4 rounded-none hover:bg-black bg-black text-base-100">
            Add to Cart
        </button>
    </div>
</template>