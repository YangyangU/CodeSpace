<template>
    <div>
        <Head @add="handle"/>
        <List :lists="lists"/>
    </div>
</template>
  
<script>
import List from '@/components/body3/List.vue';
import Head from '@/components/body3/Head.vue';

export default {
    components: {
        List,
        Head
    },
    methods:{
        handle(val){
            this.lists.push(val)
        }
    }
}
</script>
  
<style scoped></style>
  