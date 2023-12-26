const axios = require('axios')

axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike')
.then(res=>{
    console.log(res);
})