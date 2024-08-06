// mock数据模拟
import Mock from 'mockjs';

// 图表数据
const List: Array<{ [key: string]: number }> = [];
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                }),
            );
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: '小米',
                        value: Mock.Random.integer(800, 1000),
                    },
                    {
                        name: '苹果',
                        value: Mock.Random.integer(1000, 1500),
                    },
                    {
                        name: 'vivo',
                        value: Mock.Random.integer(200, 500),
                    },
                    {
                        name: 'oppo',
                        value: Mock.Random.integer(200, 500),
                    },
                    {
                        name: '魅族',
                        value: Mock.Random.integer(100, 200),
                    },
                    {
                        name: '华为',
                        value: Mock.Random.integer(1000, 1500),
                    },
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: Mock.Random.integer(1, 500),
                        active: Mock.Random.integer(1, 1000),
                    },
                    {
                        date: '周二',
                        new: Mock.Random.integer(1, 500),
                        active: Mock.Random.integer(500, 1000),
                    },
                    {
                        date: '周三',
                        new: Mock.Random.integer(1, 500),
                        active: Mock.Random.integer(500, 1000),
                    },
                    {
                        date: '周四',
                        new: Mock.Random.integer(1, 500),
                        active: Mock.Random.integer(500, 1000),
                    },
                    {
                        date: '周五',
                        new: Mock.Random.integer(1, 750),
                        active: Mock.Random.integer(750, 1500),
                    },
                    {
                        date: '周六',
                        new: Mock.Random.integer(1, 1000),
                        active: Mock.Random.integer(1000, 1750),
                    },
                    {
                        date: '周日',
                        new: Mock.Random.integer(1, 1000),
                        active: Mock.Random.integer(1000, 1750),
                    },
                ],
                // 折线图
                orderData: {
                    date: [
                        '5月1日',
                        '5月2日',
                        '5月3日',
                        '5月4日',
                        '5月5日',
                        '5月6日',
                        '5月7日',
                    ],
                    data: List,
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                    {
                        name: 'vivo',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                    {
                        name: '苹果',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                    {
                        name: '小米',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                    {
                        name: '荣耀',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                    {
                        name: '魅族',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                    {
                        name: '华为',
                        todayBuy: Mock.Random.integer(1, 100),
                        monthBuy: Mock.Random.integer(100, 1000),
                        totalBuy: Mock.Random.integer(1000, 10000),
                    },
                ],
                countData: [
                    {
                        name: '今日支付订单',
                        value: Mock.Random.integer(50, 100),
                        icon: 'CheckCircleOutlined',
                        color: '#2ec7c9',
                    },
                    {
                        name: '今日收藏订单',
                        value: Mock.Random.integer(100, 200),
                        icon: 'ClockCircleOutlined',
                        color: '#ffb980',
                    },
                    {
                        name: '今日未支付订单',
                        value: Mock.Random.integer(1, 50),
                        icon: 'CloseCircleOutlined',
                        color: '#5ab1ef',
                    },
                    {
                        name: '本月支付订单',
                        value: Mock.Random.integer(1000, 2000),
                        icon: 'CheckCircleOutlined',
                        color: '#2ec7c9',
                    },
                    {
                        name: '本月收藏订单',
                        value: Mock.Random.integer(2000, 3000),
                        icon: 'ClockCircleOutlined',
                        color: '#ffb980',
                    },
                    {
                        name: '本月未支付订单',
                        value: Mock.Random.integer(100, 200),
                        icon: 'CloseCircleOutlined',
                        color: '#5ab1ef',
                    },
                ],
            },
        };
    },
};
