import { request } from './axios';

export const getMessage: (value: string) => Promise<{
    value: string;
}> = async (value) => {
    const { data } = await request.get(
        `http://localhost:3001/ai?value=${value}`,
    );
    return data;
};
