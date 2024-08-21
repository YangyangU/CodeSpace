import { request } from './axios';

export const getMessage: (value: string) => Promise<{
    res: string;
}> = async (value) => {
    const { data } = await request.post('http://localhost:3001/ai', {
        value,
    });
    return data;
};
