/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import areaPng from '@/assets/images/area1.png';
import './index.css';
import { useCoordinate } from '@/hooks/useCoordinate';

const View: React.FC = () => {
    const mapRef = useRef<any>(null);
    const { longitude, latitude } = useCoordinate();

    useEffect(() => {
        AMapLoader.load({
            key: 'b4ba9fe27d65399e63b39660e9f80f66',
            version: '2.0',
            plugins: ['AMap.Marker'],
        })
            .then((AMap) => {
                if (!longitude || !latitude) return;

                // 创建地图实例
                const map = new AMap.Map('map', {
                    viewMode: '2D',
                    zoom: 16,
                    center: [longitude, latitude],
                });
                mapRef.current = map;

                // 创建标记点
                const marker = new AMap.Marker({
                    position: new AMap.LngLat(longitude, latitude),
                    icon: new AMap.Icon({
                        image: areaPng,
                        size: new AMap.Size(26, 30),
                        imageSize: new AMap.Size(26, 30),
                    }),
                    offset: new AMap.Pixel(-13, -30),
                });

                map.add(marker);
            })
            .catch((e) => {
                console.error('高德地图加载失败:', e);
            });

        return () => {
            mapRef.current?.destroy();
        };
    }, [longitude, latitude]);

    return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default View;
