// node commonjs
// mjs
// babel 转译 es6->es5 style->css
const geektime = require('./geektime')

geektime.on('newlesson',({price})=>{
    console.log('new lesson')
    if(price <80){
        console.log('buy');
    }
})

// setTimeout(()=>{
//     for(let i = 0; i < 100;i++){
//         geektime.on('newlesson',({price})=>{
//             console.log('hehe',price);
//         })
//     }
// },10000)