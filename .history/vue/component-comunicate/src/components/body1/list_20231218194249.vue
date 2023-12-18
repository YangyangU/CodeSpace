<template>
    <div class="body">
        <ul>
          <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
        </ul>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>