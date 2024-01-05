<template>
    <div>
        Products
    </div>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
const store = useStore() //状态树

//借|接
const products = computed(() => store.state.products.all)
console.log(products)
const addProductToCart = ()=>{

}
</script>

<style scoped>

</style>