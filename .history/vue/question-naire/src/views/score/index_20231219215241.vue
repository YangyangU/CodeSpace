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
        ...mapGetters(['answerId'])},
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