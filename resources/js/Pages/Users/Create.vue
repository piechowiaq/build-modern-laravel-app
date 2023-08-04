<script setup>

import { reactive } from "vue";

let form = reactive({
    name: '',
    email: '',
    password: '',
})

</script>

<template>
    <Head title="Create User" />

    <h1 class="text-3xl font-bold">Create New User</h1>

    <form method="POST" action="/" class="max-w-md mx-auto mt-8">
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="name"> Name </label>

            <input
                v-model="form.name"
                class="border border-gray-400 p-2 w-full"
                type="text"
                name="name"
                id="name"
                required />
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email"> Email </label>

            <input
                v-model="form.email"
                class="border border-gray-400 p-2 w-full"
                type="email"
                name="email"
                id="email"
                required
            />
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password"> Password </label>

            <input
                v-model="form.password"
                class="border border-gray-400 p-2 w-full"
                type="password"
                name="password"
                id="password"
                required
            />
        </div>

        <div class="mb-6">
            <button type="submit" class="bg-indigo-500 text-white rounded py-2 px-4 hover:bg-indigo-600">Submit</button>
        </div>


    </form>
</template>



<style scoped>

</style>
