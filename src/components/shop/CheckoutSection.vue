<script setup>
import { onMounted } from 'vue';

import rupiah from '@/utils/rupiah'
import totalPrice from '@/utils/totalPrice'
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();
onMounted(async () => {
    await productStore.getProducts()
});
</script>

<template>
    <section class="py-5">
        <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 border-t">
            <div class="md:col-span-2">
                <h2 class="py-5 font-semibold uppercase">Payment</h2>
            </div>
            <div class="">
                <h2 class="py-5 font-semibold uppercase">Order Summary</h2>

                <div v-if="!productStore.shoppingCart.length" class="p-5 bg-base-200 border">
                    <p class="uppercase text-base">Data not available!</p>
                </div>

                <div v-if="productStore.shoppingCart.length" class="p-5 space-y-5 bg-gray-50 border">
                    <div v-for="product in productStore.shoppingCart" :key="product.id"
                        class="flex items-center justify-between md:gap-20">
                        <div>
                            <p class="uppercase">{{ product.name }}</p>
                            <p class="text-sm text-gray-500">x {{ product.quantity }}</p>
                            <p class="text-sm text-gray-500">{{ rupiah(product.price) }}</p>
                        </div>
                        <p class="font-normal">{{ rupiah(product.price * product.quantity) }}</p>
                    </div>
                </div>

                <div v-if="productStore.shoppingCart.length" class="p-5 space-y-5 bg-base-100 border border-t-0">
                    <div class="flex items-center justify-between gap-20">
                        <p class="font-semibold uppercase">Total</p>
                        <p class="font-semibold">{{ totalPrice(productStore.shoppingCart) }}</p>
                    </div>
                    <button className="btn py-4 w-full rounded-none hover:bg-black bg-black text-base-100">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>