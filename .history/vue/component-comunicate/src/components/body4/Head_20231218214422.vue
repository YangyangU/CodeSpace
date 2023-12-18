<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确认</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods:{
        submit(){
            if(this.message){
            this.listsAdd(this.message)

            }
        },
        ...mapMutations(['listsAdd'])
    }
}
</script>

<style scoped></style>