<template>
    <!-- 页面过度动画 -->
    <!-- transition只能包含一个子容器 -->
    <transition name="fade">
        <div class="header-detail"><!-- 被transition动态添加类名 -->
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">店铺名称</h1>
                </div>
            </div>
            <div class="detail-close">
                X
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        
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
        transition: all 0.5 ease;
    }
}
</style>