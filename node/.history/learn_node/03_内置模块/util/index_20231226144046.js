const util = require('util');

const obj = {
    a:1,
    b:{
        c:2,
        d:[3,4,5],
        e:()=>{
            console.log(6);
        }
    }
}

console.log(util.inspect(obj));