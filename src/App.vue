<template>
  <header class="bg-base-100">
    <NavbarSection />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarSection from '@/components/NavbarSection.vue'
</script>