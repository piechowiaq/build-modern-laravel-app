<script setup>
import Nav from "../Shared/Nav.vue"
import { Link } from "@inertiajs/vue3"

defineProps({
    time: String
});


</script>
<template>

    <h1>Users</h1>

    <Nav/>

    <div style="margin-top: 400px">
        <p>The curren time is {{ time }}</p>
    </div>

    <Link href="/users" class="text-blue-500" preserve-scroll>
        Refresh
    </Link>


</template>
