import { useState, useEffect } from 'react';
export const useCoordinate = () => {
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function success(position) {
                    setLongitude(position.coords.longitude);
                    setLatitude(position.coords.latitude);
                },
                function error(positionError) {
                    console.log(
                        '获取位置失败:',
                        positionError.code,
                        positionError.message,
                    );
                },
                {
                    timeout: 30000,
                    maximumAge: 0,
                },
            );
        } else {
            alert('您的浏览器不支持Geolocation!');
        }
    }, []);
    return {
        longitude,
        latitude,
    };
};
