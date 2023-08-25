<template>
  <header class="border">
    <NavbarSection />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarSection from '@/components/NavbarSection.vue'
</script>