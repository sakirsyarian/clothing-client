<script setup>
import { ref } from 'vue';

const quantity = ref(1);
</script>

<template>
    <section class="py-5">
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
                <tbody>
                    <tr>
                        <td class="flex items-center md:gap-5">
                            <div class="p-2 w-28 bg-base-200">
                                <img src="/img/javascript.png" class="mx-auto" alt="javascript">
                            </div>
                            <p class="hidden md:block font-semibold uppercase">JavaScript</p>
                        </td>
                        <td>
                            <div class="flex flex-col md:flex-row gap-1">
                                <button @click="quantity--" class="px-4 py-1 border" :disabled="quantity === 1">-</button>
                                <p class="px-4 py-1 text-center border">{{ quantity }}</p>
                                <button @click="quantity++" class="px-4 py-1 border">+</button>
                            </div>
                        </td>
                        <td class="font-semibold">Rp 56.000</td>
                        <td>
                            <a href="#">
                                <svg class="w-6 h-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#ef4444"
                                        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
                                </svg>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="flex items-center gap-5">
                            <div class="p-2 w-28 bg-base-200">
                                <img src="/img/vue.png" class="mx-auto" alt="vue">
                            </div>
                            <p class="hidden md:block font-semibold uppercase">Vue</p>
                        </td>
                        <td>
                            <div class="flex flex-col md:flex-row gap-1">
                                <button @click="quantity--" class="px-4 py-1 border" :disabled="quantity === 1">-</button>
                                <p class="px-4 py-1 text-center border">{{ quantity }}</p>
                                <button @click="quantity++" class="px-4 py-1 border">+</button>
                            </div>
                        </td>
                        <td class="font-semibold">Rp 55.000</td>
                        <td>
                            <a href="#">
                                <svg class="w-6 h-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#ef4444"
                                        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
                                </svg>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- button -->
        <div class="mt-5 flex justify-end gap-5">
            <button className="btn py-4 rounded-none hover:bg-black bg-black text-base-100">
                Checkout
            </button>
        </div>
    </section>
</template>