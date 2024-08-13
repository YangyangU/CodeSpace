export const isLogin = () => {
    return localStorage.getItem('my-back-token') ? true : false;
};
