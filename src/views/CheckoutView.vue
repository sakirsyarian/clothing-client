<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, RouterLink, onBeforeRouteLeave } from 'vue-router'

import { post } from '@/lib/axios'
import { useProductStore } from '@/stores/product';
import CheckoutSection from '@/components/shop/CheckoutSection.vue';

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
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">Checkout</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/catalog">Product</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/shopping">Shopping Bag</RouterLink>
                    </li>
                    <li>Checkout</li>
                </ul>
            </div>
        </div>

        <CheckoutSection :loading="loading" :products="productStore.shoppingCart" :orderNow="orderNow" />
    </section>
</template>