<template>
    <div>
        <div class="head">
            <p>首页</p>
            <button @click="tiaozhuan">跳转</button>
        </div>
        <div class="body">
            <div class="menu"></div>
            <div class="jd"></div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            tiaozhuan(){
                this.$router.push('/about')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>