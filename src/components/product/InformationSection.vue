<script setup>
import { ref } from 'vue';

const quantity = ref(1);
</script>

<template>
    <!-- information -->
    <div class="w-full space-y-8 md:space-y-10">
        <!-- breadcrumbs -->
        <div class="text-sm breadcrumbs">
            <ul class="text-gray-500">
                <li><a>Home</a></li>
                <li><a>Catalog</a></li>
                <li><a>Tshirt</a></li>
                <li>JavaScript</li>
            </ul>
        </div>

        <!-- heading -->
        <div class="space-y-5">
            <h2 class="font-semibold text-2xl uppercase">JavaScript</h2>
            <p class="uppercase text-lg text-gray-600">Rp 56.000</p>
        </div>

        <!-- info -->
        <div class="space-y-2 text-gray-500">
            <p>Stock: 10</p>
            <p>Category: Tshirt</p>
        </div>

        <!-- description -->
        <div class="space-y-2">
            <p>Description :</p>
            <p class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Tempor nec feugiat nisl pretium fusce.
            </p>
        </div>
    </div>

    <!-- image -->
    <div class="w-full">
        <div class="p-10 bg-base-200">
            <img src="/img/javascript.png" class="mx-auto h-96" alt="javascript">
        </div>
    </div>

    <!-- cart -->
    <div class="w-full flex flex-col justify-between gap-8 md:gap-0">
        <div>
            <p class="mb-4 font-semibold uppercase">Quantity</p>
            <div class="flex gap-2">
                <button @click="quantity--" class="px-4 py-1 border" :disabled="quantity === 1">-</button>
                <p class="px-4 py-1 text-center border">{{ quantity }}</p>
                <button @click="quantity++" class="px-4 py-1 border">+</button>
            </div>
        </div>

        <button className="btn w-full block py-4 rounded-none hover:bg-black bg-black text-base-100">Add to
            Cart
        </button>
    </div>
</template>