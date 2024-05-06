<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="user">
                        <img src="@/assets/images/user.jpg" alt="">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2022-10-10</span></p>
                        <p>上次登录地点：<span>武汉</span></p>
                    </div>
                </el-card>
                <el-card style="margin-top: 20px;height: 343px;">
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column v-for="(value, key) in tableLabel" :prop="key" :label="value" :key="value" />
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex'}">
                        <el-icon class="icon" :style="{ backgroundColor: item.color }">
                            <component :is='item.icon'/>
                        </el-icon>
                        <div class="detail">
                            <p class="price">￥{{ item.value }}</p>
                            <p class="desc">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
    {
        name: 'oppo',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
    {
        name: 'vivo',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
    {
        name: '苹果',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
    {
        name: '小米',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
    {
        name: '三星',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
    {
        name: '魅族',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
    {
        name: '华为',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800
    },
])

const tableLabel = ref({
    name: '课程',
    todayBuy: '今日购买',
    monthBuy: '本月购买',
    totalBuy: '总购买'
})

const countData = ref([
    {
        name: '今日支付订单',
        value: 1234,
        icon: 'SuccessFilled',
        color: '#2ec7c9'
    },
    {
        name: '今日收藏订单',
        value: 210,
        icon: 'StarFilled',
        color: '#ffb980'
    },
    {
        name: '今日未支付订单',
        value: 1234,
        icon: 'GoodsFilled',
        color: '#5ab1ef'
    },
    {
        name: '本月支付订单',
        value: 1234,
        icon: 'SuccessFilled',
        color: '#2ec7c9'
    },
    {
        name: '本月收藏订单',
        value: 210,
        icon: 'StarFilled',
        color: '#ffb980'
    },
    {
        name: '本月未支付订单',
        value: 1234,
        icon: 'GoodsFilled',
        color: '#5ab1ef'
    }
])
</script>

<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }
    .detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        .price{
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }
        .desc{
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }
    .el-card{
        width: 32%;
        margin-bottom: 20px;
    }
}

.graph {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .el-card{
        width: 48%;
    }
}
</style>