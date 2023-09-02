<script setup>
import { RouterView } from 'vue-router'

import NavbarSection from '@/components/NavbarSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
    <header class="bg-base-100">
        <div class="mx-auto container">
            <div class="px-4 2xl:px-40">
                <NavbarSection />
            </div>
        </div>
    </header>

    <main class="bg-base-100">
        <div class="mx-auto container">
            <div class="px-4 2xl:px-40">
                <RouterView />
            </div>
        </div>
    </main>

    <footer class="mx-auto container">
        <div class="px-4 2xl:px-40">
            <div class="bg-black">
                <FooterSection />
            </div>
        </div>
    </footer>
</template>
