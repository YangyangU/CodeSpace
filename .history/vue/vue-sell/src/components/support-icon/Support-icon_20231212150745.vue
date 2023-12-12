<template>
    <span class="support-icon"></span>
</template>

<script>
    export default {
        props: {//专门用来接收父组件传进来的值
            size:{
                type:String,
                default:'1'
            },
            type:{
                type:Number,
                default:'1'
            }
        }
    }
</script>

<style lang="less" scoped>
.support-icon{
    display: inline-block;
    background-repeat: no-repeat;//不平铺
}

</style>