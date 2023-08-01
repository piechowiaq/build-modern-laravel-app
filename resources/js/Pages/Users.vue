<script setup>

defineProps({
    users: Array,
});

</script>
<template>
    <Head>
        <title>Users</title>
    </Head>
    <h1 class="text-3xl font-bold">Users</h1>
    <ul>
        <li v-for="user in users"
            :key="user.id"
            v-text="user.name"
        />
    </ul>
</template>
