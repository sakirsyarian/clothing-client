<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="py-16 px-5 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10">
            <!-- product -->
            <div class="space-y-4">
                <h3 class="font-semibold uppercase text-white">Product</h3>
                <ul class="space-y-2 text-gray-300">
                    <li>
                        <RouterLink to="/tshirt">Tshirt</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/premium">Premium</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- sitemap -->
            <div class="space-y-4">
                <h3 class="font-semibold uppercase text-white">Sitemap</h3>
                <ul class="space-y-2 text-gray-300">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/catalog">Catalog</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- help -->
            <div class="space-y-4">
                <h3 class="font-semibold uppercase text-white">Help</h3>
                <ul class="space-y-2 text-gray-300">
                    <li>
                        <RouterLink to="/">FAQ</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">Terms and condition</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">Provacy policy</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- social -->
            <div class="space-x-4">
                <div class="p-1 inline-block bg-base-100">
                    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000"
                                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" />
                        </svg>
                    </a>
                </div>

                <div class="p-1 inline-block bg-base-100">
                    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" fill-rule="evenodd"
                                d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712ZM14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1H14.2Z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>

                <div class="p-1 inline-block bg-base-100">
                    <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000"
                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <!-- credit -->
    <p class="mt-16 text-center text-gray-300">&copy; {{ new Date().getFullYear() }} All rights reserved</p>
</section></template>