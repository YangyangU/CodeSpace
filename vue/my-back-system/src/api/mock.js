import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'

//home
Mock.mock('/api/home/getData',homeApi.getStatistcalData)


//user
Mock.mock('/api/user/add','post',userApi.createUser)
Mock.mock('/api/user/delete','post',userApi.deleteUser)
Mock.mock('/api/user/update','post',userApi.updateUser)
Mock.mock(/api\/user\/getUser/,userApi.getUserList)