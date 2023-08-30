<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router'

import { post } from '@/lib/axios'
import rupiah from '@/utils/rupiah'
import totalPrice from '@/utils/totalPrice'
import { useProductStore } from '@/stores/product';

const loading = ref(true)
const router = useRouter()
const productStore = useProductStore();

onBeforeRouteLeave((to, from) => {
    console.clear()
    if (from.name === 'checkout') window.snap.hide()
})

async function orderNow() {
    try {
        const { data: midtrans } = await post('midtrans-token', productStore.shoppingCart)
        loading.value = false

        window.snap.embed(midtrans.data.token, {
            embedId: 'snap-container',
            onSuccess: function () {
                productStore.shoppingCart.length = 0;
                productStore.toast = true
                router.push('/')
            },
            onPending: function (result) {
                alert("wating your payment!"); console.log(result);
            },
            onError: function (result) {
                alert("payment failed!"); console.log(result);
            },
            onClose: function () {
                alert('you closed the popup without finishing the payment');
            }
        })
    } catch (error) {
        console.error(error);
    }
}

onMounted(async () => {
    await productStore.getProducts()
});
</script>

<template>
    <section class="py-5">
        <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 border-t h-full">
            <div class="md:col-span-2">
                <h2 class="py-5 font-semibold uppercase">Payment</h2>
                <div v-if="loading" class="py-5 flex items-center justify-center gap-2 bg-gray-50">
                    <span class="loading loading-spinner loading-md"></span>
                </div>
                <div id="snap-container" class="w-full"></div>
            </div>
            <div class="">
                <h2 class="py-5 font-semibold uppercase">Order Summary</h2>

                <div v-if="!productStore.shoppingCart.length" class="p-5 bg-gray-50">
                    <p class="uppercase text-sm">Data not available!</p>
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

                    <button @click="orderNow"
                        className="btn py-4 w-full rounded-none hover:bg-black bg-black text-base-100">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>