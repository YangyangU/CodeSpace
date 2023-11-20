const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');


https.get('https://movie.douban.com/top250',(res)=>{
    // console.log(res);
    let html = ''
    res.on('data',(chunk)=>{//监听数据的读取 //读取到数据的时候data事件触发 
        // console.log(chunk + '');//十六进制的数据  +''强行把十六进制转换成页面代码  或者toString
        html += chunk;
    })
    res.on('end',()=>{ //data执行完毕，源代码获取完毕，end事件执行
        // console.log(html);
        const $ = cheerio.load(html);
        const result = []

        $('li .item').each(function(){
            const title = $('.info .title',this).text()//标题//跳着找
            const star = $('.info .bd .rating_num',this).text()//评分
            const pic = $('.pic img',this).attr('src')//图片
            result.push(
                {
                    title,
                    star,
                    pic
                }
            )
        })
        // console.log(result);
        fs.writeFile('./list.json', JSON.stringify(result),(err,data)=>{
            if(err){
                throw err 
            }
            console.log();
            

        })//转化成字符串
    })
})