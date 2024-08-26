import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'antd';
import './index.css';
import userImg from '@/assets/images/avatar.jpg';
import { getData, getArea } from '@/api';
import { columns } from './data';
import { icon2Element } from '@/utils/icon';
import Echarts from '@/components/Echarts';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useCoordinate } from '@/hooks/useCoordinate';

const Home: React.FC = () => {
    const [tableData, setTableData] = useState<tableType[]>([]);
    const [countData, setCountData] = useState<countType[]>([]);
    const [echartsData, setEchartsData] = useState<dataType>({} as dataType);
    const [area, setArea] = useState<string>('');
    const navigate = useNavigate();
    const { longitude, latitude } = useCoordinate();

    useEffect(() => {
        const addr = `${longitude},${latitude}`;
        getArea('8300c47ce20d888bb05d89f0b869a270', addr).then((data) => {
            setArea(data.regeocode.formatted_address);
        });
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
    }, [latitude, longitude]);
    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable onClick={() => navigate('/area')}>
                    <div className="user">
                        <img src={userImg} alt="user" />
                        <div className="userinfo">
                            <p className="name">YangyangU</p>
                            <p className="access">超级管理员</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p>
                            登录时间：
                            <span>
                                {dayjs(new Date()).format('YYYY-MM-DD')}
                            </span>
                        </p>
                        <p>
                            登录地点：<span>{area}</span>
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
