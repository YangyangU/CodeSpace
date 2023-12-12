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
@import '@/common/style/mixin.less';
.support-icon{
    display: inline-block;
    background-repeat: no-repeat;//不平铺
    
}
.icon-1{
    width:12px;
    height:12px;
    background-size: 100% 100%;
    &.decrease{//继承了上一个类名
        .bg-image('decrease_1')
    }
    &.special{
        .bg-image('special_1')
    }
    &.invoice{
        .bg-image('invoice_1')
    }
    &.guarantee{
        .bg-image('guarantee_1')
    }
}
.icon-2{
    width:16px;
    height:16px;
    background-size: 100% 100%;
    &.decrease{//继承了上一个类名
        .bg-image('decrease_2')
    }
    &.special{
        .bg-image('special_2')
    }
    &.invoice{
        .bg-image('invoice_2')
    }
    &.guarantee{
        .bg-image('guarantee_2')
    }
}
.icon-2{
    width:12px;
    height:12px;
    background-size: 100% 100%;
    &.decrease{//继承了上一个类名
        .bg-image('decrease_2')
    }
    &.special{
        .bg-image('special_2')
    }
    &.invoice{
        .bg-image('invoice_2')
    }
    &.guarantee{
        .bg-image('guarantee_2')
    }
}
</style>