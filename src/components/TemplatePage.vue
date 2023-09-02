<script setup>
import { RouterView } from 'vue-router'

import NavbarSection from '@/components/NavbarSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
    <header class="bg-base-100 border-b">
        <div class="mx-auto container">
            <div class="2xl:px-40">
                <NavbarSection />
            </div>
        </div>
    </header>

    <main class="bg-base-100">
        <div class="mx-auto container">
            <div class="2xl:px-40">
                <RouterView />
            </div>
        </div>
    </main>

    <footer class=" bg-black">
        <div class="mx-auto container">
            <div class="2xl:px-40">
                <FooterSection />
            </div>
        </div>
    </footer>
</template>
