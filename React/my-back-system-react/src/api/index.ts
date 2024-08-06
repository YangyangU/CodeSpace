import { request } from './axios';

export const getData: () => Promise<dataType> = async () => {
    const { data } = await request.get('/home/getData');
    return data;
};

export const getUser: (config?: string) => Promise<{
    code: number;
    count: number;
    list: userType[];
}> = async (config = '') => {
    const { data } = await request.get(`/home/getUser?name=${config}`);
    return data;
};

export const createUser: (config: userType) => Promise<{
    code: number;
    data: userType;
}> = async (config) => {
    const { data } = await request.post('/user/addUser', config);
    return data;
};

export const updateUser: (config: userType) => Promise<{
    code: number;
    data: userType;
}> = async (config) => {
    const { data } = await request.post('/user/editUser', config);
    return data;
};

export const deleteUser: (config: userType) => Promise<{
    code: number;
    message: string;
}> = async (config) => {
    const { data } = await request.post('/user/deleteUser', config);

    return data;
};
