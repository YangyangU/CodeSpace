<template>
    <a :href="'#'+to">
        <slot />
    </a>
</template>

<script setup>
defineProps({
    to: {
        type: String,
        required: true
    }
})
</script>
