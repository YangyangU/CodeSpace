import axios from 'axios'

const http = axios.create({
    baseURL: '/api',
    timeout: 10000,
})

http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http