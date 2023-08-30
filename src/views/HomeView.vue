<script setup>
import { useProductStore } from '@/stores/product';
import HeroSection from '@/components/home/HeroSection.vue';
import AnswerSection from '@/components/home/AnswerSection.vue';
import ContactSection from '@/components/home/ContactSection.vue';

const productStore = useProductStore();
if (productStore.toast) {
    setTimeout(() => {
        productStore.toast = false
    }, 3000);
}
</script>

<template>
    <div v-if="productStore.toast" class="toast toast-top toast-end">
        <div class="alert alert-success bg-green-600 rounded-none">
            <span class="font-semibold text-white">Payment successfully.</span>
        </div>
    </div>

    <HeroSection />
    <AnswerSection />
    <ContactSection />
</template>
