<script setup>
import { ref, onMounted } from 'vue'

import { useProductStore } from '@/stores/product';
import HeroSection from '@/components/home/HeroSection.vue';
import CheapSection from '@/components/home/CheapSection.vue';
import ExpensiveSection from '@/components/home/ExpensiveSection.vue';
import AnswerSection from '@/components/home/AnswerSection.vue';
import ContactSection from '@/components/home/ContactSection.vue';

const cheapest = ref([])
const expensive = ref([])
const productTshirt = ref([])
const productPremium = ref([])
const productStore = useProductStore();

if (productStore.toast) {
    setTimeout(() => {
        productStore.toast = false
    }, 3000);
}

onMounted(async () => {
    await productStore.getProducts()

    productTshirt.value = productStore.products.slice(0, 3)

    productPremium.value = productStore.products
        .filter(product => product.CategoryId === 2)
        .slice(0, 3)

    cheapest.value = productStore.products
        .sort((a, b) => a.price - b.price)
        .slice(0, 5)

    expensive.value = productStore.products
        .sort((a, b) => b.price - a.price)
        .slice(0, 5)
});
</script>

<template>
    <div v-if="productStore.toast" class="toast toast-top toast-end">
        <div class="alert alert-success bg-green-600 rounded-none">
            <span class="font-semibold text-white">Payment successfully.</span>
        </div>
    </div>

    <HeroSection :productTshirt="productTshirt" :productPremium="productPremium" />
    <CheapSection :cheapest="cheapest" />
    <ExpensiveSection :expensive="expensive" />
    <AnswerSection />
    <ContactSection />
</template>
