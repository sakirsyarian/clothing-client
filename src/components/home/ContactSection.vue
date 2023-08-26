<script setup>

</script>

<template>
    <section class="py-10">
        <!-- heading -->
        <div class="py-8 border-b">
            <h2 class="font-semibold text-3xl uppercase">Get in Touch</h2>
        </div>

        <!-- contact -->
        <div class="">
            <div class="py-5">
                <h3 class="font-semibold uppercase">Send The Message</h3>
                <p class="mt-1 text-gray-500">You can write us an email and we'll get back to you in short time.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 items-center gap-10">
                <!-- form -->
                <div class="w-full col-span-3">
                    <form>
                        <!-- name -->
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="firstName" class="input-form peer" placeholder=" " required />
                                <label for="firstName" class="label-form">
                                    First name
                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="lastName" class="input-form peer" placeholder=" " required />
                                <label for="lastName" class="label-form">
                                    Last name
                                </label>
                            </div>
                        </div>

                        <!-- email -->
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" class="input-form peer" placeholder=" " required />
                            <label for="email" class="label-form">Email
                                address
                            </label>
                        </div>

                        <!-- textarea -->
                        <div class="relative z-0 w-full mb-6 group">
                            <textarea name="message" rows="4" class="input-form peer" placeholder=" "></textarea>
                            <label for="message" class="label-form">
                                Message
                            </label>
                        </div>
                        <button type="submit" class="px-8 py-3 text-black bg-base-300 font-semibold">Submit</button>
                    </form>
                </div>

                <!-- info -->
                <div class="p-10 col-span-2 space-y-8 w-full bg-base-200">
                    <div class="">
                        <h3 class="font-semibold uppercase">Call Us</h3>
                        <p class="text-gray-500">You can call us if you have question or suggestion.</p>
                        <div class="mt-2 flex items-center gap-3">
                            <div class="p-2 bg-base-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <p>021-123456</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-semibold uppercase">Write Us</h3>
                        <p class="text-gray-500">Email us and we will respond within a few days.</p>
                        <div class="mt-2 flex items-center gap-3">
                            <div class="p-2 bg-base-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <p>elgoritme@mail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

