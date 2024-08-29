/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
export const useCoordinate = () => {
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);

    // 不支持非安全域的浏览器位置请求
    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             function success(position) {
    //                 setLongitude(position.coords.longitude);
    //                 setLatitude(position.coords.latitude);
    //             },
    //             function error(positionError) {
    //                 console.log(
    //                     '获取位置失败:',
    //                     positionError.code,
    //                     positionError.message,
    //                 );
    //             },
    //             {
    //                 timeout: 30000,
    //                 maximumAge: 0,
    //             },
    //         );
    //     } else {
    //         alert('您的浏览器不支持Geolocation!');
    //     }
    // }, []);
    useEffect(() => {
        (window as any)._AMapSecurityConfig = {
            securityJsCode: '1d8f95f07e818ecf68f14af9fc9db215',
        };
        if ((window as any).AMap) {
            (window as any).AMap.plugin('AMap.Geolocation', function () {
                const geolocation = new (window as any).AMap.Geolocation({
                    enableHighAccuracy: true, // 是否使用高精度定位
                    timeout: 10000, // 超过10秒后停止定位
                    maximumAge: 0, // 定位结果缓存时间
                    GeoLocationFirst: true, // 首次成功获取位置后自动停止定位
                });

                geolocation.getCurrentPosition(
                    (
                        status: string,
                        result: { position: { lng: number; lat: number } },
                    ) => {
                        if (status === 'complete') {
                            const { position } = result;
                            setLatitude(position.lat);
                            setLongitude(position.lng);
                        } else {
                            console.log('获取位置失败:', status);
                        }
                    },
                );
            });
        } else {
            console.log('高德地图API未加载');
        }
    }, []);
    return {
        longitude,
        latitude,
    };
};
