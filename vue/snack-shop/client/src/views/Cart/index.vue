<template>
    <div>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
            <template #tags>
                <van-tag plain type="primary">标签</van-tag>
                <van-tag plain type="primary">标签</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </template>
        </van-card>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped></style>