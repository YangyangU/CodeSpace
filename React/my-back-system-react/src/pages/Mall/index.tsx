import React from 'react';
import './index.css';
import { Card } from 'antd';
import LazyImage from '@/components/LazyImage';
import LoadingImg from '@/assets/images/loading.gif';
interface ImageType {
    url: string;
    name: string;
    desc: string;
    price: string;
}

const Mall = () => {
    const ImageList: ImageType[] = [
        {
            url: '../../assets/images/su7.jpg',
            name: 'Xiaomi SU7 Max',
            desc: 'Xiaomi SU7 Max',
            price: '29.99万',
        },
        {
            url: '../../assets/images/13u.jpeg',
            name: 'Xiaomi 13 Ultra',
            desc: 'Xiaomi 13 Ultra',
            price: '3999',
        },
        {
            url: '../../assets/images/14u.jpeg',
            name: 'Xiaomi 14 Ultra',
            desc: 'Xiaomi 14 Ultra',
            price: '5999',
        },
        {
            url: '../../assets/images/es65.jpeg',
            name: '小米电视 ES65',
            desc: '小米电视 ES65',
            price: '2599',
        },
        {
            url: '../../assets/images/mixflip.jpeg',
            name: 'Xiaomi MIX Flip',
            desc: 'Xiaomi MIX Flip',
            price: '5999',
        },
        {
            url: '../../assets/images/su7u.jpg',
            name: 'Xiaomi SU7 Ultra',
            desc: 'Xiaomi SU7 Ultra',
            price: '未知',
        },
        {
            url: '../../assets/images/jsd.jpeg',
            name: '巨省电Pro',
            desc: '巨省电Pro',
            price: '2599',
        },
        {
            url: '../../assets/images/book16.jpeg',
            name: 'Redmi Book 16',
            desc: 'Redmi Book 16',
            price: '3299',
        },
        {
            url: '../../assets/images/su7.jpg',
            name: 'Xiaomi SU7 Max',
            desc: 'Xiaomi SU7 Max',
            price: '29.99万',
        },
        {
            url: '../../assets/images/13u.jpeg',
            name: 'Xiaomi 13 Ultra',
            desc: 'Xiaomi 13 Ultra',
            price: '3999',
        },
        {
            url: '../../assets/images/14u.jpeg',
            name: 'Xiaomi 14 Ultra',
            desc: 'Xiaomi 14 Ultra',
            price: '5999',
        },
        {
            url: '../../assets/images/es65.jpeg',
            name: '小米电视 ES65',
            desc: '小米电视 ES65',
            price: '2599',
        },
        {
            url: '../../assets/images/mixflip.jpeg',
            name: 'Xiaomi MIX Flip',
            desc: 'Xiaomi MIX Flip',
            price: '5999',
        },
        {
            url: '../../assets/images/su7u.jpg',
            name: 'Xiaomi SU7 Ultra',
            desc: 'Xiaomi SU7 Ultra',
            price: '未知',
        },
        {
            url: '../../assets/images/jsd.jpeg',
            name: '巨省电Pro',
            desc: '巨省电Pro',
            price: '2599',
        },
        {
            url: '../../assets/images/book16.jpeg',
            name: 'Redmi Book 16',
            desc: 'Redmi Book 16',
            price: '3299',
        },
        {
            url: '../../assets/images/sb4.jpeg',
            name: 'Redmi Watch 4',
            desc: 'Redmi Watch 4',
            price: '489',
        },
        {
            url: '../../assets/images/gp.jpeg',
            name: 'Redmi G Pro',
            desc: 'Redmi G Pro',
            price: '7799',
        },
        {
            url: '../../assets/images/sbs4.jpeg',
            name: 'Xiaomi Watch S4 Sport',
            desc: 'Xiaomi Watch S4 Sport',
            price: '1999',
        },
        {
            url: '../../assets/images/sh9.jpeg',
            name: '小米手环9',
            desc: '小米手环9',
            price: '249',
        },
        {
            url: '../../assets/images/buds5p.jpeg',
            name: 'Redmi Buds 5 Pro',
            desc: 'Redmi Buds 5 Pro',
            price: '369',
        },
        {
            url: '../../assets/images/su7.jpg',
            name: 'Xiaomi SU7 Max',
            desc: 'Xiaomi SU7 Max',
            price: '29.99万',
        },
        {
            url: '../../assets/images/13u.jpeg',
            name: 'Xiaomi 13 Ultra',
            desc: 'Xiaomi 13 Ultra',
            price: '3999',
        },
        {
            url: '../../assets/images/14u.jpeg',
            name: 'Xiaomi 14 Ultra',
            desc: 'Xiaomi 14 Ultra',
            price: '5999',
        },
        {
            url: '../../assets/images/es65.jpeg',
            name: '小米电视 ES65',
            desc: '小米电视 ES65',
            price: '2599',
        },
        {
            url: '../../assets/images/mixflip.jpeg',
            name: 'Xiaomi MIX Flip',
            desc: 'Xiaomi MIX Flip',
            price: '5999',
        },
        {
            url: '../../assets/images/su7u.jpg',
            name: 'Xiaomi SU7 Ultra',
            desc: 'Xiaomi SU7 Ultra',
            price: '未知',
        },
        {
            url: '../../assets/images/jsd.jpeg',
            name: '巨省电Pro',
            desc: '巨省电Pro',
            price: '2599',
        },
        {
            url: '../../assets/images/book16.jpeg',
            name: 'Redmi Book 16',
            desc: 'Redmi Book 16',
            price: '3299',
        },
        {
            url: '../../assets/images/sb4.jpeg',
            name: 'Redmi Watch 4',
            desc: 'Redmi Watch 4',
            price: '489',
        },
        {
            url: '../../assets/images/gp.jpeg',
            name: 'Redmi G Pro',
            desc: 'Redmi G Pro',
            price: '7799',
        },
        {
            url: '../../assets/images/sbs4.jpeg',
            name: 'Xiaomi Watch S4 Sport',
            desc: 'Xiaomi Watch S4 Sport',
            price: '1999',
        },
        {
            url: '../../assets/images/sh9.jpeg',
            name: '小米手环9',
            desc: '小米手环9',
            price: '249',
        },
        {
            url: '../../assets/images/buds5p.jpeg',
            name: 'Redmi Buds 5 Pro',
            desc: 'Redmi Buds 5 Pro',
            price: '369',
        },
        {
            url: '../../assets/images/sb4.jpeg',
            name: 'Redmi Watch 4',
            desc: 'Redmi Watch 4',
            price: '489',
        },
        {
            url: '../../assets/images/gp.jpeg',
            name: 'Redmi G Pro',
            desc: 'Redmi G Pro',
            price: '7799',
        },
        {
            url: '../../assets/images/sbs4.jpeg',
            name: 'Xiaomi Watch S4 Sport',
            desc: 'Xiaomi Watch S4 Sport',
            price: '1999',
        },
        {
            url: '../../assets/images/sh9.jpeg',
            name: '小米手环9',
            desc: '小米手环9',
            price: '249',
        },
        {
            url: '../../assets/images/buds5p.jpeg',
            name: 'Redmi Buds 5 Pro',
            desc: 'Redmi Buds 5 Pro',
            price: '369',
        },
    ];
    return (
        <div className="container">
            {ImageList.map((item) => (
                <Card className="item" hoverable>
                    <LazyImage
                        src={new URL(item.url, import.meta.url).href}
                        alt={item.name}
                        key={item.name}
                        className="product-image"
                        placeholder={LoadingImg}
                    />
                    <div className="content">
                        <div className="desc">{item.desc}</div>
                        <div className="price">￥{item.price}</div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Mall;
