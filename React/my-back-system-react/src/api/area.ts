import { request } from './axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getArea: (key: string, addr: string) => Promise<any> = async (
    key,
    addr,
) => {
    const { data } = await request.get(
        `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${addr}`,
    );
    return data;
};
