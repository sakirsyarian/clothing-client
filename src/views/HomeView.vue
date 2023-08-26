<script setup>
import NavbarSection from '@/components/NavbarSection.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import AnswerSection from '@/components/home/AnswerSection.vue';
</script>

<template>
    <header class="bg-base-100">
        <div class="mx-auto container">
            <div class="px-4 xl:px-40">
                <NavbarSection />
            </div>
        </div>
    </header>

    <main class="bg-base-100">
        <div class="mx-auto container">
            <div class="px-4 xl:px-40">
                <HeroSection />
                <AnswerSection />
            </div>
        </div>
    </main>
</template>
