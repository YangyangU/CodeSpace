/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { getIp, getIpLocation } from '@/api/area';

export const useCoordinate = () => {
    const [ip, setIp] = useState<string>('');
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
        getIp()
            .then((res) => {
                setIp(res.ip);
            })
            .then(() => {
                getIpLocation(ip).then((res) => {
                    setLongitude(res.lon);
                    setLatitude(res.lat);
                });
            });
    }, []);
    return {
        longitude,
        latitude,
    };
};
