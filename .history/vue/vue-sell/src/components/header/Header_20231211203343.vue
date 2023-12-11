<template>
    <!-- 图片放在当前文件夹方便取,而且只有这个地方用的上 -->
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <!-- 图片装在div里面，防止图片变形 -->
                <img src="https://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
            </div>
            <div class="content">
                <div class="title">徐阳阳的小店</div>
                <div class="description">蜂鸟专送/38分钟送达</div>
                <div class="support">在线支付满28减5</div>
            </div>
        </div>
        <div class="bulletin-wrapper">

        </div>
    </div>
    <div class="body">

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.header{
    background: @color-background-ss;
    .content-wrapper{
        .avatar{
            width: 64px;
            height: 64px;
            img{
                width: 100%;
                border-radius: 2px;
            }
        }
    }
}
</style>