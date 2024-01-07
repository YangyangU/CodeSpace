<template>
    <div class="container">
        <div class="head">
            <div class="search">
                <input type="text" class="search" placeholder="搜索">
            </div>
            <div class="item" @click="">
                <span>
                    <span>
                        <i class="iconfont icon-QQkongjian"></i>
                    </span>
                    <span class="info">
                        好友动态
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
        </div>
        <div class="body">
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-youxizhongxin"></i>
                    </span>
                    <span class="info">
                        游戏中心
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-tuandui"></i>
                    </span>
                    <span class="info">
                        结伴
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-fujin-01"></i>
                    </span>
                    <span class="info">
                        附近
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-yumaobi"></i>
                    </span>
                    <span class="info">
                        鹅毛市集
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-tuandui"></i>
                    </span>
                    <span class="info">
                        元梦营地
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
        </div>
        <div class="foot">
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-yundongbisai"></i>
                    </span>
                    <span class="info">
                        运动
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-youxi"></i>
                    </span>
                    <span class="info">
                        小游戏
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-zhibo"></i>
                    </span>
                    <span class="info">直播</span>
                </span>
                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon--gambit"></i>
                    </span>
                    <span class="info">
                        集卡
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-xingqubula"></i>
                    </span>
                    <span class="info">
                        小窝
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon-dongman"></i>
                    </span>
                    <span class="info">
                        动漫
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <span>
                        <i class="iconfont icon--yuedu"></i>
                    </span>
                    <span class="info">
                        阅读
                    </span>
                </span>

                <span>
                    <i class="iconfont icon-xiayiyehouyiye"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped>
.container {
    background-color: rgb(246, 246, 246);
    height: 80%;
    overflow: hidden;
}

.head {
    margin: 12px 0;
    background-color: rgb(255, 255, 255);
}

.search {
    width: 95%;
    margin: 0 auto;

    input {
        background: rgb(246, 246, 246);
        border: none;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
    }
}
.info{
    margin-left: -18px;
}

.item {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

i {
    padding: 0 25px 0 8px;
}

.body {
    margin: 12px 0;
}
</style>