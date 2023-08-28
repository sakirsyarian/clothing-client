<script setup>

</script>

<template>
    <section class="py-5">
        <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 border-t">
            <div class="md:col-span-2">
                <h2 class="py-5 font-semibold uppercase">Payment</h2>
            </div>
            <div class="">
                <h2 class="py-5 font-semibold uppercase">Order Summary</h2>

                <div class="p-5 space-y-5 bg-base-200 border">
                    <div class="flex items-center justify-between md:gap-20">
                        <div class="flex items-center gap-3">
                            <div class="p-2 w-16 bg-base-100">
                                <img src="/img/javascript.png" class="mx-auto" alt="javascript">
                            </div>
                            <div>
                                <p class="uppercase">JavaScript</p>
                                <p class="text-gray-400">x 1</p>
                            </div>
                        </div>
                        <p class="font-normal">Rp 56.000</p>
                    </div>
                    <div class="flex items-center justify-between md:gap-20">
                        <div class="flex items-center gap-3">
                            <div class="p-2 w-16 bg-base-100">
                                <img src="/img/vue.png" class="mx-auto" alt="vue">
                            </div>
                            <div>
                                <p class="uppercase">Vue</p>
                                <p class="text-gray-400">x 1</p>
                            </div>
                        </div>
                        <p class="font-normal">Rp 55.000</p>
                    </div>
                </div>
                <div class="p-5 space-y-5 bg-base-100 border border-t-0">
                    <div class="flex items-center justify-between gap-20">
                        <p class="font-semibold">Total</p>
                        <p class="font-semibold">Rp 105.000</p>
                    </div>
                    <button className="btn py-4 w-full rounded-none hover:bg-black bg-black text-base-100">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>