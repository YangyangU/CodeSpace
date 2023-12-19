<template>
    <div class="score">
        <h2>得分：xxx</h2>
    </div>
</template>

<script>
import { mapState,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapState(['answerId']),
        ...mapGetters(['rightAnswer'])
    },
    created:{

    },
    methods:{
        calcScore(){
            let every = 100 / answer.length
        }
    }
}
</script>

<style lang="less" scoped>
h2 {
    color: #fff;
}
</style>