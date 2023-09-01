<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product';

const checked = ref([]);
const picked = ref('None');
const productStore = useProductStore();

async function handleChecked() {
    picked.value = 'None'
    await productStore.getProducts();

    const filterCategories = productStore.products.filter(product => {
        return product.Category.name.includes(checked.value)
    });

    if (!filterCategories.length) {
        return await productStore.getProducts()
    }

    if (!checked.value.length) {
        return await productStore.getProducts('http://localhost:3000/customer/products')
    }

    productStore.products = filterCategories;
}

async function handlePicked() {
    checked.value = [];
    await productStore.getProducts();

    if (picked.value === 'Lowest') {
        const cheapest = productStore.products
            .sort((a, b) => a.price - b.price);

        productStore.products = cheapest;
        return
    }

    if (picked.value === 'Highest') {
        const expensive = productStore.products
            .sort((a, b) => b.price - a.price)

        productStore.products = expensive;
        return
    }

    await productStore.getProducts('http://localhost:3000/customer/products');
}
</script>

<template>
    <section class="md:col-span-2 lg:col-span-1 border-t">
        <!-- category -->
        <div class="py-5">
            <h3 class="font-medium uppercase">Category</h3>

            <div class="py-5 space-y-3">
                <div class="flex items-center">
                    <input type="checkbox" v-model="checked" @change="handleChecked" value="Tshirt"
                        class="checkbox checkbox-sm" />
                    <label for="default-checkbox" class="ml-2">
                        Tshirt
                    </label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" v-model="checked" @change="handleChecked" value="Premium"
                        class="checkbox checkbox-sm" />
                    <label for="default-checkbox" class="ml-2">
                        Premium
                    </label>
                </div>
            </div>
        </div>

        <!-- sorting -->
        <div class="py-5 border-t">
            <h3 class="font-medium uppercase">Sorting</h3>

            <div class="py-5 space-y-3">
                <div class="flex items-center">
                    <input type="radio" value="None" v-model="picked" name="sorting" @change="handlePicked"
                        className="radio radio-sm" />
                    <label for="default-checkbox" class="ml-2">
                        None
                    </label>
                </div>
                <div class="flex items-center">
                    <input type="radio" value="Lowest" v-model="picked" name="sorting" @change="handlePicked"
                        className="radio radio-sm" />
                    <label for="default-checkbox" class="ml-2">
                        Lowest Price
                    </label>
                </div>
                <div class="flex items-center">
                    <input type="radio" value="Highest" v-model="picked" name="sorting" @change="handlePicked"
                        className="radio radio-sm" />
                    <label for="default-checkbox" class="ml-2">
                        Highest Price
                    </label>
                </div>
            </div>
        </div>
    </section>
</template>