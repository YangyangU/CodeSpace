<template>
    <div>
        <Head @add="handle" />
        <List :msg="msg" />
    </div>
</template>
  
<script>
import List from '@/components/body3/List.vue';
import Head from '@/components/body3/Head.vue';

export default {
    data(){
        return{
            msg
        }
    },
    components: {
        List,
        Head
    },
    methods:{
        handle(val){
            this.msg = val
        }
    }
}
</script>
  
<style scoped></style>
  