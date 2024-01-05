<template>
    <div>
        Products
    </div>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
</template>

<script>
    
</script>

<style scoped>

</style>