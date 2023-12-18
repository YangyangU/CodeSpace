<template>
    <div>
        <Head @add="val"/>
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
}
</script>
  
<style scoped></style>
  