<script setup>
import InformationSection from '@/components/product/InformationSection.vue';
import RelatedSection from '@/components/product/RelatedSection.vue';
</script>

<template>
    <section class="py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 border-b">
            <InformationSection />
        </div>

        <RelatedSection />
    </section>
</template>