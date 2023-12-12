<template>
    <!-- 页面过度动画 -->
    <!-- transition只能包含一个子容器 -->
    <transition name="fade">
        <div class="header-detail" v-show="detailShow"><!-- 被transition动态添加类名 -->
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">店铺名称</h1>
                </div>
            </div>
            <div class="detail-close" @click.stop="hideDetail"> //.stop阻止事件冒泡
                X
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            hideDetail(){ //拿不到detailShow？//子父组件通讯 子组件负责抛出
                this.$emit('hide',false); //事件名,值    子组件负责发散，父组件负责接收
            }               //创建一个hide事件
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.header-detail{
    position:fixed;//相对于窗口定位
    left: 0;//扯大
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);//被盖在下面的虚化掉
    &.fade-enter-from,&.fade-leave-to{//被transition动态添加的类名
        opacity: 0;//全透明
        background: @color-background;
    }
    &.fade-enter-active,&.fade-leave-active{
        transition: all 0.5 ease;//从不透明到全透明花0.5秒
    }
    .detail-close{
        width: 30px;
        height: 30px;
        position: fixed;
        bottom: 30px;
        left: 50%;
        margin-left: -15px;//往左移自身一半才居中// translate: (-50%);同理        
        text-align: center;
        // align-items: center;//不是弹性容器不能用
        line-height: 30px;
    }
}
</style>