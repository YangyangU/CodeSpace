<template>
    <div class="tabbar">
        <div class="item-container">
            <div class="item">
                <img src="./assets/images/shouye.png" alt="">
            </div>
            <div class="item">
                <img src="./assets/images/shouye.png" alt="">
            </div>
            <div class="item">
                <img src="./assets/images/shouye.png" alt="">
            </div>
            <div class="item">
                <img src="./assets/images/shouye.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background-color: #000;
    .item-container {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .item {
            height: 30px;
            width: 30px;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }

}
</style>