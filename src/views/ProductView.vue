<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import InformationSection from '@/components/product/InformationSection.vue';
import RelatedSection from '@/components/product/RelatedSection.vue';
import { useProductStore } from '@/stores/product';

const route = useRoute()
const router = useRouter()
const random = ref([])
const quantity = ref(0);
const productDetail = ref({});
const productStore = useProductStore();

function pushRouter(id) {
    router.push('/product/' + id)
    productDetail.value = productStore.products.find((el) => el.id === id)
}

function quantityOnShoppingCart() {
    const found = productStore.shoppingCart.find((el) => el.id === productDetail.value.id)
    if (productStore.shoppingCart.length && found) {
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

function randomProducts(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

onMounted(async () => {
    await productStore.getProducts()

    productDetail.value = productStore.products.find((el) => el.id === +route.params.id)
    quantity.value = productDetail.value.quantity

    random.value = randomProducts(productStore.products).slice(0, 5)
});
</script>

<template>
    <section class="py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 border-b">
            <InformationSection :product="productDetail" :quantity="quantity" :quantityPlus="quantityPlus"
                :quantityMinus="quantityMinus" :addToChart="addToChart" />
        </div>

        <RelatedSection :products="random" :pushRouter="pushRouter" />
    </section>
</template>