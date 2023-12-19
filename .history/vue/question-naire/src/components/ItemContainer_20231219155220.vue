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

</style>