<template>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }} - {{ currency(product.price) }}</li>
    </ul>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
const store = useStore() //状态树
//借|接
const products = computed(() => store.state.products.all)
console.log(products)
//派遣一个工作
store.dispatch('products/getAllProducts')

</script>

<style scoped>

</style>