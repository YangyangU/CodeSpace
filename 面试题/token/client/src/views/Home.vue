<template>
    <div>
        Home
    </div>
</template>

<script setup>
import { home } from '../api/user.js';
import { onMounted } from 'vue';

onMounted(()=>{
    home()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
})
</script>

<style lang="css" scoped>

</style>