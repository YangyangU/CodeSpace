import axios from 'axios'; //导入axios

//区分于fatch xhr vue应用，复用，App而不是页面统一管理
axios.defaults.baseUrl = 'http://localhost:3000';