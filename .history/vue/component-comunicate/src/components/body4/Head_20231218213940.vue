<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="listsAdd">确认</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods:{
        submit(){
            this.listsAdd(val)
        },
        ...mapMutations(['listsAdd'])
    }
}
</script>

<style scoped></style>