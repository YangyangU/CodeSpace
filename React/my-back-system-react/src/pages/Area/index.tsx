/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import areaPng from '@/assets/images/area1.png';
import './index.css';
import { useCoordinate } from '@/hooks/useCoordinate';

const View = () => {
    const mapRef = useRef<any>(null);
    const { longitude, latitude } = useCoordinate();

    useEffect(() => {
        (window as any)._AMapSecurityConfig = {
            securityJsCode: '1d8f95f07e818ecf68f14af9fc9db215',
        };

        const markerContent = `<div class="custom-content-marker">
                                <img src=${areaPng}>
                                </div>`;

        AMapLoader.load({
            key: 'b4ba9fe27d65399e63b39660e9f80f66',
            version: '1.4.15',
        })
            .then((AMap) => {
                mapRef.current = new AMap.Map('map', {
                    viewMode: '2D',
                    zoom: 16,
                    center: [longitude, latitude],
                });
                const position = new AMap.LngLat(longitude, latitude);
                const marker = new AMap.Marker({
                    position: position,
                    content: markerContent,
                    offset: new AMap.Pixel(-13, -30),
                });
                mapRef.current.add(marker);
            })
            .catch((e) => {
                console.error(e);
            });

        return () => {
            if (mapRef.current) {
                mapRef.current.destroy();
            }
        };
    }, [latitude, longitude]);

    return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default View;
