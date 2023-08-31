<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();
defineProps([
    'productTshirt',
    'productPremium'
]);
</script>

<template>
    <section class="pt-7 pb-10">
        <!-- tshirt -->
        <div class="flex flex-col md:flex-row gap-5 lg:gap-10">
            <!-- left -->
            <div class="flex items-center">
                <img src="/img/banner-tshirt.png" class="" alt="banner-tshirt">
            </div>

            <!-- right -->
            <div class="w-full">
                <!-- heading -->
                <div class="flex justify-between items-center border-b">
                    <h2 @click="loading = false" class="py-5 font-semibold text-xl uppercase border-b border-black">
                        Tshirt
                    </h2>
                    <RouterLink to="/catalog">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </RouterLink>
                </div>

                <!-- shirt -->
                <div class="py-5 flex flex-col md:flex-row gap-5 font-semibold">
                    <div v-for="tshirt in productTshirt" :key="tshirt.id" class="p-5 space-y-5 uppercase bg-base-200">
                        <RouterLink :to="'/product/' + tshirt.id">{{ tshirt.name }}</RouterLink>
                        <img :src="'/products/' + tshirt.image" class="mx-auto" :alt="tshirt.name">
                        <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                            <p>{{ tshirt.rupiah }}</p>
                            <button @click="productStore.purchase(tshirt.id)" class="underline">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- premium -->
        <div class="flex flex-col md:flex-row gap-5 lg:gap-10">
            <!-- left -->
            <div class="flex items-center">
                <img src="/img/banner-premium.png" class="" alt="banner-premium">
            </div>

            <!-- right -->
            <div class="w-full">
                <!-- heading -->
                <div class="flex justify-between items-center border-b">
                    <h2 class="py-5 font-semibold text-xl uppercase border-b border-black">Premium</h2>
                    <RouterLink to="/catalog">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </RouterLink>
                </div>

                <!-- shirt -->
                <div class="py-5 flex flex-col md:flex-row gap-5 font-semibold">
                    <div v-for="premium in productPremium" :key="premium.id" class="p-5 space-y-5 uppercase bg-base-200">
                        <RouterLink :to="'/product/' + premium.id">{{ premium.name }}</RouterLink>
                        <img :src="'/products/' + premium.image" class="mx-auto" alt="javascript">
                        <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                            <p>{{ premium.rupiah }}</p>
                            <button @click="productStore.purchase(premium.id)" class="underline">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

