<script setup>
import SortSection from '@/components/catalog/SortSection.vue';
import ListSection from '@/components/catalog/ListSection.vue';
</script>

<template>
    <section class="py-10">
        <div class="pb-3 flex flex-wrap items-center justify-between">
            <h2 class="pr-16 font-semibold text-2xl uppercase">Catalog</h2>
            <div class="text-sm breadcrumbs">
                <ul class="text-gray-500">
                    <li><a href="/">Home</a></li>
                    <li>Catalog</li>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-20">
            <SortSection />
            <ListSection />
        </div>
    </section>
</template>