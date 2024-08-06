import Mock from 'mockjs';
import homeApi from './mockServeData/home';
import userApi from './mockServeData/user';

Mock.mock(/home\/getData/, homeApi.getStatisticalData);
Mock.mock(/home\/getUser/, userApi.getUserList);
Mock.mock(/user\/addUser/, 'post', userApi.createUser);
Mock.mock(/user\/deleteUser/, 'post', userApi.deleteUser);
Mock.mock(/user\/editUser/, 'post', userApi.updateUser);
