<template>
    <div>
        <ItemContainer parent-component="item"/>
    </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue'
import { mapActions } from 'vuex';
    export default {
        components:{
            ItemContainer
        }
    }
</script>

<style lang="less" scoped>

</style>