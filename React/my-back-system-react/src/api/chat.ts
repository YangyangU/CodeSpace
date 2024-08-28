import { request } from './axios';

export const getMessage: (value: string) => Promise<{
    res: string;
}> = async (value) => {
    const { data } = await request.post('http://47.96.29.195:3001/ai', {
        value,
    });
    return data;
};
