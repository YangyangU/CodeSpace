/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

const View = () => {
    const mapRef = useRef<any>(null);

    useEffect(() => {
        (window as any)._AMapSecurityConfig = {
            securityJsCode: '1d8f95f07e818ecf68f14af9fc9db215',
        };

        AMapLoader.load({
            key: 'b4ba9fe27d65399e63b39660e9f80f66',
            version: '2.0',
        })
            .then((AMap) => {
                mapRef.current = new AMap.Map('map', {
                    viewMode: '2D',
                    zoom: 11,
                    center: [116.397428, 39.90923],
                });
            })
            .catch((e) => {
                console.error(e);
            });

        return () => {
            if (mapRef.current) {
                mapRef.current.destroy();
            }
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default View;
