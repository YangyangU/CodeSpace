<template>
    <div class="score">
        <h2>得分：xxx</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        mapState(['answerId'])
    },
    created:{

    },
    methods:{
        calcScore(){

        }
    }
}
</script>

<style lang="less" scoped>
h2 {
    color: #fff;
}
</style>