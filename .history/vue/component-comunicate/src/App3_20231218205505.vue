<template>
    <div>
        <Head @add="handle"/>
        <List :val="val"/>
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
        handle(){
            return val
        }
    }
}
</script>
  
<style scoped></style>
  