<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import totalPrice from '@/utils/totalPrice'
import searchProduct from '@/utils/searchProduct';
import { useProductStore } from '@/stores/product';

const menu = ref(false)
const router = useRouter()
const productStore = useProductStore();

async function handleSubmit() {
    router.push('/catalog');
    searchProduct(productStore);
}
</script>

<template>
    <nav class="uppercase">
        <div class="p-0 navbar justify-between bg-base-100">
            <!-- left -->
            <div class="">
                <RouterLink to="/">
                    <h1 class="font-bold text-xl">Elgoritme</h1>
                </RouterLink>
            </div>

            <!-- middle -->
            <div class="hidden md:flex gap-5 font-semibold">
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
                    <div class="mt-2 z-[1] w-60 dropdown-content border">
                        <form @submit.prevent="handleSubmit" className="form-control">
                            <input v-model="productStore.search" type="text" placeholder="Search"
                                className="w-24 md:w-auto input focus:outline-none rounded-none" />
                        </form>
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
                            <span class="badge badge-sm indicator-item">{{ productStore.shoppingCart.length }}</span>
                        </div>
                    </label>
                    <div tabindex="0"
                        class="mt-3 z-[1] card card-compact rounded-none dropdown-content w-52 bg-base-100 shadow">
                        <div class="card-body space-y-1">
                            <span class="font-bold text-lg">
                                {{ productStore.shoppingCart.length }}
                                {{ productStore.shoppingCart.length > 1 ? "Items" : "Item" }}
                            </span>
                            <span>Total :
                                <span class="normal-case">
                                    {{ totalPrice(productStore.shoppingCart) }}
                                </span>
                            </span>
                            <div class="card-actions">
                                <RouterLink to="/shopping" class="btn btn-block rounded-none">View cart</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- burger -->
                <div @click="menu = !menu" class="md:hidden">
                    <button tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg v-if="!menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <svg v-else class="h-5 w-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000"
                                d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <div v-if="menu" class="relative md:hidden">
        <div class="absolute inset-0">
            <div className="p-8 bg-base-100">
                <div class="grid gap-5 font-semibold">
                    <RouterLink class="" to="/catalog">Catalog</RouterLink>
                    <RouterLink class="" to="/tshirt">Tshirt</RouterLink>
                    <RouterLink class="" to="/premium">Premium</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

