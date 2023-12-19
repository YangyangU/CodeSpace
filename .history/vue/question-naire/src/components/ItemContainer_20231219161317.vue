<!-- 首页和答题页面的结构相似，用组件可复用 -->
<template>
    <section><!-- h5标签 -->
        <header class="top_tips">
            <span class="num_tip">第一周</span>
        </header>
        <div>
            <div class="home_logo item_container_style">

            </div>
            <router-link to="/item" class="start button_style"></router-link>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.top_tips .num_tip {
    position: absolute;
    left: .48rem;
    bottom: 1.1rem;
    height: .7rem;
    width: 2.5rem;
    font-size: .6rem;
    font-family: \\9ED1\4F53;
    font-weight: 600;
    color: #a57c50;
    text-align: center;
}
</style>