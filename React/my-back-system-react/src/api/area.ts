/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from './axios';

export const getArea: (key: string, addr: string) => Promise<any> = async (
    key,
    addr,
) => {
    const { data } = await request.get(
        `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${addr}`,
    );
    return data;
};

export const getIp: () => Promise<any> = async () => {
    const { data } = await request.get('https://api.ipify.org/?format=json');
    return data;
};

export const getIpLocation: (ip: string) => Promise<any> = async (ip) => {
    const { data } = await request.post(`http://ip-api.com/json/${ip}`);
    return data;
};
