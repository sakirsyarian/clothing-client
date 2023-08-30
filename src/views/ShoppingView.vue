<script setup>
import { RouterLink } from 'vue-router'
import ShoppingSection from '@/components/shop/ShoppingSection.vue';
</script>

<template>
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">Shopping Bag</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/catalog">Product</RouterLink>
                    </li>
                    <li>Shopping Bag</li>
                </ul>
            </div>
        </div>

        <ShoppingSection />
    </section>
</template>