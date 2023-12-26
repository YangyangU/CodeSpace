const https = require('https')

const url = new URL('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike') //node自代的构造函数
// console.log(url);
// URL {
//     href: 'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
//     origin: 'https://www.fastmock.site',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.fastmock.site',
//     hostname: 'www.fastmock.site',
//     port: '',
//     pathname: '/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: ''
//   }

const req = https.request({
    method: 'GET',
})