<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: mapState(['lists']),//语法是在函数体返回一个值
    watch:{
        msg(newVal){
            this.msg = newVal
        }
    }
}
</script>

<style scoped></style>