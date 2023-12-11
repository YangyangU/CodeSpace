<template>
    <!-- 图片放在当前文件夹方便取,而且只有这个地方用的上 -->
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <!-- 图片装在div里面，防止图片变形 -->
                <img src="https://p6-passport.byteacctimg.com/img/user-avatar/8bf0ad1e40354ad342722b475efdb7ec~120x120.awebp" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">徐阳阳的小店</span>
                </div>
                <div class="description">蜂鸟专送/1分钟送达</div>
                <!-- 当有独立特性，成为组件 -->
                <div class="support">
                    <span class="text">
                        在线支付满10减10
                    </span>
                </div>
            </div>
            <div class="support-count">
                <span class="count">100个</span>
                <i>></i>
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
@import '@/common/style/mixin.less';
.header{
    background-image: url('https://p6-passport.byteacctimg.com/img/user-avatar/8bf0ad1e40354ad342722b475efdb7ec~120x120.awebp');
    background-size:100% 12em;
    .content-wrapper{
        display: flex;
        padding: 24px 12px 18px 24px;
        position: relative;
        .avatar{
            width: 64px;
            height: 64px;
            img{
                width: 100%;
                border-radius: 2px;
            }
        }
        .content{
            flex:1;
            margin-left: 16px;
            color: @color-white;
            .title{
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                .brand{
                    width: 30px;
                    height: 18px;
                    // background-image: url('./brand@2x.png');
                    .bg-image('./brand');
                    background-size: cover;
                }

                .name{
                    margin-left: 6px;
                    font-size: @fontsize-large;
                    font-weight: bold;
                }
            }

            .description{
                font-size: @fontsize-small;
                margin-bottom: 8px;
            }
            .support{
                display: flex;
                align-items: center;
                .text{
                    font-size: @fontsize-small-s;
                }
            }
        }
        .support-count{
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background: @color-background-sss;
            border-radius: 14px;
        }
        .count{
            font-size: @fontsize-small-s;
        }
    }
}
</style>