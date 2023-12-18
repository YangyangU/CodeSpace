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
    data(){
        return {
            val
        }
    },
    components: {
        List,
        Head
    },
}
</script>
  
<style scoped></style>
  