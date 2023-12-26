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
//     searchParams: URLSearchParams {},   //参数
//     hash: ''
//   }

const req = https.request(
    {
        method: 'GET', //请求方法
        // port:80, //端口号
        hostname: url.hostname,
        path:url.pathname + url.searchParams,  //完整的url
    },
    (res)=>{
        let content = ''
        res.on('data',(chunk)=>{
            content += chunk
        })
        res.on('end',()=>{//请求结束end触发
            console.log(content); //拿到一串Buffer流
        });
    }
)