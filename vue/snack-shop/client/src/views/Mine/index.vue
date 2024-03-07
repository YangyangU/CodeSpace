<template>
    <div class="mine">
        <div class="mine-hd">
            <img src="../assets/images/home1.jpg" alt="">
            <div class="name">游客00001</div>
            <div class="utils">
                <van-icon name="setting-o" />
            </div>
        </div>
        <div class="mine-bd">
            <div class="order">
                <div class="order-hd">
                    <div class="title">我的订单</div>
                    <div class="more">查看更多<van-icon name="arrow" /></div>
                </div>
                <div class="order-bd">
                    <div class="order-item">
                        <img src="" alt="">
                        <div class="desc">
                            待付款
                        </div>
                    </div>
                    <div class="order-item">
                        <img src="" alt="">
                        <div class="desc">
                            待发货
                        </div>
                    </div>
                    <div class="order-item">
                        <img src="" alt="">
                        <div class="desc">
                            待收货
                        </div>
                    </div>
                    <div class="order-item">
                        <img src="" alt="">
                        <div class="desc">
                            已完成
                        </div>
                    </div>
                    <div class="order-item">
                        <img src="" alt="">
                        <div class="desc">
                            售后
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu">
                <div class="menu-hd">
                    <div class="title">菜单栏</div>
                </div>
                <div class="menu-bd">
                    <div class="menu-item">
                        <img src="" alt="">
                        <div class="desc">
                            联系我们
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="" alt="">
                        <div class="desc">
                            会员中心
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="" alt="">
                        <div class="desc">
                            领券中心
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="" alt="">
                        <div class="desc">
                            充值中心
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.mine{
    .mine-hd{
        display: flex;
        align-items: center;
        background-color: #217d70;
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 3px solid #fff;
            margin: 15px;
        }
        .name{
            color: #fff;
            font-size: 22px;
        }
        .utils{
            margin-left: 120px;
            color: #fff;
        }
    }
    .mine-bd{
        .order{
            box-shadow: #eee 0px 0px 10px;
            margin: 10px;
            padding: 10px;
            .order-hd{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .title{
                    font-size: 16px;
                    font-weight: bold;
                }
                .more{
                    font-size: 12px;
                    color: #666;
                }
            }
            .order-bd{
                display: flex;
                align-items: center;
                justify-content: space-around;
                .order-item{

                }
            }
        }
        .menu{
            box-shadow: #eee 0px 0px 10px;
            margin: 10px;
            padding: 10px;
            .menu-hd{
                .title{
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .menu-bd{
                display: flex;
                .menu-item{

                }
            }
        }
    }
}
</style>