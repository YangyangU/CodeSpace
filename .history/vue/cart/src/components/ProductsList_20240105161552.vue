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

const store = useStore() //状态树
const product = computed(()=>{})
</script>

<style scoped>

</style>