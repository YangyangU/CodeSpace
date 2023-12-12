<template>
    <span class="support-icon" :class="iconClass"></span>
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
                default:0
            }
        },
        computed:{//计算属性中的函数名直接当成数据源使用
            iconClass(){
                const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
                return `icon-${this.size} ${classMap[this.type]}`
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