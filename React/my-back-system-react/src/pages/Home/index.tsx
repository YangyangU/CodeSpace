import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'antd';
import './index.css';
import userImg from '@/assets/images/avatar.jpg';
import { getData } from '@/api';
import { columns } from './data';
import { icon2Element } from '@/utils/icon';
import Echarts from '@/components/Echarts';

const Home: React.FC = () => {
    const [tableData, setTableData] = useState<tableType[]>([]);
    const [countData, setCountData] = useState<countType[]>([]);
    const [echartsData, setEchartsData] = useState<dataType>({} as dataType);

    useEffect(() => {
        getData().then(({ data }) => {
            const { tableData, orderData, userData, videoData, countData } =
                data;
            setTableData(tableData as tableType[]);
            setCountData(countData as countType[]);

            //获取折线图数据
            const order = orderData;
            const xData = order.date;
            if (!order.data) return;
            const keyArray = Object.keys(order.data[0]);
            const series: seriesType[] = [] as unknown as seriesType[];
            keyArray.forEach((key) => {
                if (!order.data) return;
                series.push({
                    name: key,
                    data: order.data.map((item) => item[key]),
                    type: 'line',
                });
            });
            setEchartsData({
                data: {
                    orderData: {
                        xData,
                        series,
                    },
                    userData: {
                        xData: (userData as userType[]).map(
                            (item) => item.date,
                        ) as string[],
                        series: [
                            {
                                name: '新增用户',
                                data: (userData as userType[]).map(
                                    (item) => item.new,
                                ) as number[],
                                type: 'bar',
                            },
                            {
                                name: '活跃用户',
                                data: (userData as userType[]).map(
                                    (item) => item.active,
                                ) as number[],
                                type: 'bar',
                            },
                        ],
                    },
                    videoData: {
                        series: [
                            {
                                data: videoData as number[],
                                type: 'pie',
                            },
                        ],
                    },
                },
            });
        });
    }, []);
    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={userImg} alt="user" />
                        <div className="userinfo">
                            <p className="name">YangyangU</p>
                            <p className="access">超级管理员</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p className="login-time">
                            上次登录时间：<span>2024-5-28</span>
                        </p>
                        <p className="login-ip">
                            上次登录地点：<span>北京小米科技园</span>
                        </p>
                    </div>
                </Card>
                <Card>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                        rowKey={(record) => record.name as string}
                    ></Table>
                </Card>
            </Col>
            <Col span={16}>
                <div className="num">
                    {countData.map((item) => (
                        <Card key={item.name}>
                            <div
                                className="icon-box"
                                style={{ backgroundColor: item.color }}
                            >
                                {icon2Element(item.icon)}
                            </div>
                            <div className="detail">
                                <p className="num">￥{item.value}</p>
                                <p className="txt">{item.name}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                {echartsData.data?.orderData && (
                    <Echarts
                        chartData={echartsData.data.orderData as ChartData}
                        style={{ height: '280px', marginTop: '30px' }}
                    ></Echarts>
                )}
                <div className="graph">
                    {echartsData.data?.userData && (
                        <Echarts
                            chartData={
                                echartsData.data
                                    .userData as unknown as ChartData
                            }
                            style={{
                                height: '240px',
                                width: '50%',
                                marginLeft: '20px',
                            }}
                        ></Echarts>
                    )}
                    {echartsData.data?.videoData && (
                        <Echarts
                            chartData={
                                echartsData.data
                                    .videoData as unknown as ChartData
                            }
                            style={{ height: '240px', width: '50%' }}
                        ></Echarts>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default Home;
