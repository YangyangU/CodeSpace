// import { message } from 'antd';
import axios, { AxiosInstance } from 'axios';
// import { getCookie } from '@/utils/cookie';
// import { login } from '@/api/login';

// const { VITE_API_URL, NODE_ENV } = import.meta.env;

// const errorHandler = (redirect: string): void => {
//     if (NODE_ENV === 'development') {
//         // window.location.href = redirect
//     } else {
//         window.location.href = redirect;
//     }
// };

const instance: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'X-Requested-With': 'XMLHttpRequest',
    },
    // withCredentials: true, // header头开启cookie信息
});

// instance.interceptors.request.use(
//     (config) => {
//         const { method, data, url } = config;
//         if (method === 'get' && data) {
//             // get请求将data转换成为query
//             const query = Object.keys(data).reduce(
//                 (pre: string, cur: string) => {
//                     const str = `${cur}=${data[cur]}`;
//                     return pre + str + '&';
//                 },
//                 '?',
//             );
//             delete config.data;
//             config.url = url + query.replace(/&$/, '');
//         }
//         if (method === 'post') {
//             const key = 'hyperos_sec_common_ph';
//             config.url = `${url}${/\?/.test(url as string) ? '&' : '?'}${key}=${getCookie(key)}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error),
// );

// const whiteUrl = ['/admin/platform/applyQuota'];
// instance.interceptors.response.use(
//     (response) => {
//         const { status, data, config } = response;
//         if (status === 200 && status < 300) {
//             if (whiteUrl.some((item) => config.url?.includes(item))) {
//                 return data;
//             }
//             if (data?.code === 0) return data.data;
//         }
//         message.error(data.msg);
//         return Promise.reject(data.msg); // 状态码非正常即报错
//     },
//     (error) => {
//         const { status, data, config } = error.response || {};

//         if (status && status === 400) {
//             const _message =
//                 typeof data.msg === 'string'
//                     ? data.msg
//                     : JSON.stringify(data.msg);
//             message.error(_message);
//         }
//         if (status && status === 401) {
//             Promise.reject({ message: '用户未登录' });
//             if (/^\/admin\/platform\/login/.test(config.url)) {
//                 // return errorHandler(data.loginUrl);
//             } else {
//                 // return login({ callbackUrl: VITE_API_URL });
//             }
//         }
//         Promise.reject(error);
//     },
// );

export { instance as request, axios };
