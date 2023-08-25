<template>
    <nav class="mx-auto container border">
        <div class="flex gap-5">
            <RouterLink class="btn" to="/">Home</RouterLink>
            <RouterLink class="btn" to="/about">About</RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

