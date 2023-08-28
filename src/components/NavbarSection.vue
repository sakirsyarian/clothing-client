<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="uppercase border-b">
        <div class="p-0 navbar justify-between bg-base-100">
            <!-- left -->
            <div class="">
                <RouterLink to="/">
                    <h1 class="font-bold text-xl">Elgoritme</h1>
                </RouterLink>
            </div>

            <!-- middle -->
            <div class="hidden md:flex gap-5 font-semibold">
                <RouterLink class="" to="/about">About</RouterLink>
                <RouterLink class="" to="/catalog">Catalog</RouterLink>
                <RouterLink class="" to="/tshirt">Tshirt</RouterLink>
                <RouterLink class="" to="/premium">Premium</RouterLink>
            </div>

            <!-- right -->
            <div class="flex gap-5">
                <!-- search -->
                <div class="hidden md:dropdown dropdown-end">
                    <button tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000"
                                d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192ZM4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49Z" />
                        </svg>
                    </button>
                    <div class="mt-3 z-[1] w-52 dropdown-content">
                        <div className="form-control">
                            <input type="text" placeholder="Search"
                                className="w-24 md:w-auto input focus:outline-none rounded-none" />
                        </div>
                    </div>
                </div>

                <!-- cart -->
                <div class="hidden md:dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>
                    <div tabindex="0"
                        class="mt-3 z-[1] card card-compact rounded-none dropdown-content w-52 bg-base-100 shadow">
                        <div class="card-body">
                            <span class="font-bold text-lg">8 Items</span>
                            <span class="text-info">Subtotal: $999</span>
                            <div class="card-actions">
                                <button class="btn btn-primary btn-block rounded-none">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- burger -->
                <div class="dropdown dropdown-end md:hidden">
                    <button tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <!-- <div class="mt-3 z-[1] w-80 dropdown-content transition-all delay-100">
                        <div class="relative w-full">
                            <div className="p-8 w-96 h-screen absolute top-[-5px] right-[-5.1rem] bg-base-200">
                                <div class="grid gap-5 font-semibold">
                                    <RouterLink class="" to="/about">About</RouterLink>
                                    <RouterLink class="" to="/catalog">Catalog</RouterLink>
                                    <RouterLink class="" to="/tshirt">Tshirt</RouterLink>
                                    <RouterLink class="" to="/premium">Premium</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </nav>
</template>

