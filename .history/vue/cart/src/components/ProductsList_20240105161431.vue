<template>
    <div>
        Products
    </div>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
</template>

<script>
import {useStore} from 'vuex'
</script>

<style scoped>

</style>