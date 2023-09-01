<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="grid items-center justify-center w-screen h-screen border">
        <div class="space-y-5">
            <h2 class="text-4xl text-center">404 Not Found</h2>
            <p>Back to
                <RouterLink to="/">homepage</RouterLink>
            </p>
        </div>
    </section>
</template>

