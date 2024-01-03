import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'
axios.default.headers.post['Content-Type'] = 'application/json'