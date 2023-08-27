<script setup>

</script>

<template>
    <section class="md:col-span-3 lg:col-span-4 border-t">
        <!-- tshirt -->
        <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-semibold">
            <div class="p-5 space-y-5 uppercase bg-base-200">
                <p class="text-right">JavaScript</p>
                <img src="/img/javascript.png" class="mx-auto" alt="javascript">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>Rp 56.000</p>
                    <a href="#" class="underline">Buy</a>
                </div>
            </div>
            <div class="p-5 space-y-5 uppercase bg-base-200">
                <p class="text-right">Vue</p>
                <img src="/img/vue.png" class="mx-auto" alt="vue">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>Rp 55.000</p>
                    <a href="#" class="underline">Buy</a>
                </div>
            </div>
            <div class="p-5 space-y-5 uppercase bg-base-200">
                <p class="text-right">React</p>
                <img src="/img/react.png" class="mx-auto" alt="react">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>Rp 59.000</p>
                    <a href="#" class="underline">Buy</a>
                </div>
            </div>
            <div class="p-5 space-y-5 uppercase bg-base-200">
                <p class="text-right">React</p>
                <img src="/img/react.png" class="mx-auto" alt="react">
                <div class="flex flex-row md:flex-col lg:flex-row justify-between">
                    <p>Rp 59.000</p>
                    <a href="#" class="underline">Buy</a>
                </div>
            </div>
        </div>

        <!-- pagination -->
        <div className="join rounded-none">
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
        </div>
    </section>
</template>