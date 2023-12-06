<template>
    <div>
        <p>首页</p>
        <button @click="tiaozhuan">跳转</button>
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