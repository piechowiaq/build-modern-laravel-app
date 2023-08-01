<script setup>

defineProps({
    links: Array
})


</script>


<template>

    <div>
        <Component
            :is="link.url ? 'Link' : 'span'"
            v-for="link in links"
            :href="link.url" v-html="link.label"
            class="px-1"

            :class="link.url ? '' : 'text-gray-500'"
        />

    </div>

</template>



<style scoped>

</style>
