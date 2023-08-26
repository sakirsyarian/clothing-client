<script setup>
import NavbarSection from '@/components/NavbarSection.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import AnswerSection from '@/components/home/AnswerSection.vue';
import ContactSection from '@/components/home/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
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
                <ContactSection />
            </div>
        </div>
    </main>

    <footer class="bg-black">
        <div class="mx-auto container">
            <div class="px-4 xl:px-40">
                <FooterSection />
            </div>
        </div>
    </footer>
</template>
