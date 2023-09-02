<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'

const route = useRoute()
const emit = defineEmits(['radio-price', 'check-categories']);

const checked = ref([]);
const picked = ref('None');

async function handlePicked() {
    checked.value = [];
    emit('radio-price', picked.value);
}

const handleChecked = () => {
    picked.value = 'None'
    emit('check-categories', checked.value);
};

onBeforeRouteLeave(async (to) => {
    if (to.path === '/premium') {
        checked.value = ['Premium'];
    }

    if (to.path === '/tshirt') {
        checked.value = ['Tshirt'];
    }

    if (to.path === '/catalog') {
        checked.value = [];
    }
})

onMounted(() => {
    if (route.path === '/premium') {
        checked.value = ['Premium'];
    }

    if (route.path === '/tshirt') {
        checked.value = ['Tshirt'];
    }

    if (route.query.price === 'lowest') {
        picked.value = 'Lowest';
    }

    if (route.query.price === 'highest') {
        picked.value = 'Highest';
    }
});
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