<template>
    <div class="score">
        <h2>得分：xxx</h2>
    </div>
</template>

<script>
import { mapState,mapGetters} from 'vuex'
export default {
    data(){
        
    },
    computed:{
        ...mapState(['answerId']),
        ...mapGetters(['rightAnswer'])
    },
    created:{

    },
    methods:{
        calcScore(){
            let every = 100 / answerId.length
            this.answerId.forEach((item,index) => {
                if(item === this.rightAnswer[index]){

                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
h2 {
    color: #fff;
}
</style>