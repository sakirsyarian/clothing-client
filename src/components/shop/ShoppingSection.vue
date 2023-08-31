<script setup>
import { RouterLink } from 'vue-router'
import rupiah from '@/utils/rupiah'

defineProps([
    'products',
    'quantityPlus',
    'quantityMinus',
    'deleteProduct'
]);
</script>

<template>
    <section class="py-5 border-b">
        <!-- table -->
        <div class="overflow-x-auto">
            <table class="table">
                <thead class="border-t border-gray-100">
                    <tr class="uppercase">
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <div v-if="!products.length" class="py-5 uppercase text-gray-400 text-base">
                    Data not available!
                </div>
                <tbody v-if="products.length" class="border-b border-gray-100">
                    <tr v-for="product in products" :key="product.id">
                        <td class="flex items-center md:gap-5">
                            <div class="p-2 w-28 bg-base-200">
                                <img :src="'/products/' + product.image" class="mx-auto" :alt="product.name">
                            </div>
                            <p class="hidden md:block font-semibold uppercase">{{ product.name }}</p>
                        </td>
                        <td>
                            <div class="flex flex-col md:flex-row gap-1">
                                <button @click="quantityMinus(product.id)" class="px-4 py-1 border"
                                    :disabled="product.quantity === 1">-</button>
                                <p class="px-4 py-1 text-center border">{{ product.quantity }}</p>
                                <button @click="quantityPlus(product.id)" class="px-4 py-1 border">+</button>
                            </div>
                        </td>
                        <td>
                            <p class="font-semibold w-full">{{ rupiah(product.price * product.quantity) }}</p>
                        </td>
                        <td>
                            <button @click="deleteProduct(product.id)">
                                <svg class="w-6 h-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#ef4444"
                                        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- button -->
        <div v-if="products.length" class="pt-10 pb-5 flex justify-end gap-5">
            <RouterLink to="/checkout" className="btn py-4 md:w-60 rounded-none text-black">
                Checkout
            </RouterLink>
        </div>
    </section>
</template>