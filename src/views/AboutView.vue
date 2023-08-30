<script setup>
import { RouterLink } from 'vue-router'
import GreetingSection from '@/components/about/GreetingSection.vue';
</script>

<template>
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">About</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>About</li>
                </ul>
            </div>
        </div>

        <GreetingSection />
    </section>
</template>


