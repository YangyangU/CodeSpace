import Mock from 'mockjs'
import homeApi from './mockServerData/home'

Mock.mock('/api/home/getData',homeApi.getStatistcalData())