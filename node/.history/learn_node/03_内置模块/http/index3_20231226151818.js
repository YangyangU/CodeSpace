fetch('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike')
.then(res=>res.json()) //格式化
.then(data=>{       //打印
    console.log(data);
})