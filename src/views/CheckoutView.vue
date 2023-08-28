<script setup>
import CheckoutSection from '@/components/shop/CheckoutSection.vue';
</script>

<template>
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">Checkout</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li><a>Home</a></li>
                    <li><a>Catalog</a></li>
                    <li><a>Tshirt</a></li>
                    <li><a>Shopping Bag</a></li>
                    <li>Checkout</li>
                </ul>
            </div>
        </div>

        <CheckoutSection />
    </section>
</template>