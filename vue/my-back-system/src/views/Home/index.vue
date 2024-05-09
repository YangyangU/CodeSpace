<template>
    <div>
        <el-row>
            <el-col :span="8" style="padding-right:10px">
                <el-card class="box-card">
                    <div class="user">
                        <img src="@/assets/images/user.jpg" alt="">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2024-5-9</span></p>
                        <p>上次登录地点：<span>南昌</span></p>
                    </div>
                </el-card>
                <el-card style="margin-top: 20px;height: 343px;">
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column v-for="(value, key) in tableLabel" :prop="key" :label="value" :key="value" />
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left:10px">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                        <el-icon class="icon" :style="{ backgroundColor: item.color }">
                            <component :is='item.icon' />
                        </el-icon>
                        <div class="detail">
                            <p class="price">￥{{ item.value }}</p>
                            <p class="desc">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <el-card style="height: 226px;">
                    <div ref="echarts1" style="height: 236px;"></div>
                </el-card>
                <div class="graph">
                    <el-card style="height: 220px;">
                        <div ref="echarts2" style="height: 236px;"></div>
                    </el-card>
                    <el-card style="height: 220px;">
                        <div ref="echarts3" style="height: 220px;"></div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { getData } from '@/api';
import * as echarts from 'echarts'

let echarts1 = ref(null)
let echarts2 = ref(null)
let echarts3 = ref(null)

onMounted(async () => {
    const data = await getData()//拿到数据
    // console.log(data.data.data.orderData[0].data[0]);
    tableData.value = data.data.data.tableData
    tableLabel.value = data.data.data.tableLabel
    countData.value = data.data.data.countData

    nextTick(() => {//拿到dom

        //折线图
        let echartsOne = echarts.init(echarts1.value)
        let order = data.data.data.lineData[0]
        // console.log(order.data);
        let optionOne = {
            legend: {
                data: Object.keys(order.data[0])
            },
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                data: order.date
            },
            yAxis: {
                type: 'value'
            },
            series: []
        }
        Object.keys(order.data[0]).forEach(key => {
            optionOne.series.push({
                name: key,
                type: 'line',
                data: order.data.map(item => item[key])
            })
        })
        // console.log(optionOne.series);
        echartsOne.setOption(optionOne)


        //柱状图
        let echartsTwo = echarts.init(echarts2.value)
        let optionTwo = {
            legend: {
                textStyle: {
                    color: '#333'
                }
            },
            grid: {
                left: '20%'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: data.data.data.userData.map(item => item.date),
                axisLine: {
                    lineStyle: {
                        color: '#17b3a3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    color: '#333'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#17b3a3'
                    }
                }
            },
            color: ['#2ec7c9', '#b6a2de'],
            series: [
                {
                    name: '新增用户',
                    type: 'bar',
                    data: data.data.data.userData.map(item => item.new),

                },
                {
                    name: '活跃用户',
                    type: 'bar',
                    data: data.data.data.userData.map(item => item.active)
                }
            ]
        }
        echartsTwo.setOption(optionTwo)

        //饼状图
        let echartsThree = echarts.init(echarts3.value)
        let optionThree = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top:'-3%',
                left: 'center'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: data.data.data.videoData,
                    type: 'pie'
                }
            ]
        }
        echartsThree.setOption(optionThree)

    })
})


const tableData = ref([])

const tableLabel = ref({})

const countData = ref([])
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

    .el-card__body {
        padding: 0 !important;
    }

    .icon {
        width: 70px;
        height: 70px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }

    .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        .price {
            font-size: 28px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }

        .desc {
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}

.graph {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .el-card {
        width: 48%;
    }
}
</style>